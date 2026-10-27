import { getHostFromUrl } from '~/utils/url';

export type ExecutionMode = 'commands' | 'scripts';
export type JobStatus = 'running' | 'successful' | 'failed' | 'skipped';

export interface JobResult {
	client_id?: string;
	client_name?: string;
	stdout?: string;
	stderr?: string;
	summary?: string;
	error?: string;
	pid?: number | string;
	started_at?: string;
	finished_at?: string;
}

export interface Job {
	client_id: string;
	client_name: string;
	status: JobStatus;
	executingConcurrently: boolean;
	abortOnError: boolean;
	result: JobResult;
}

export interface JobClientTags {
	tags: string[];
	operator: 'AND' | 'OR';
}

export interface MultiClientExecution {
	command?: string;
	script?: string;
	interpreter?: string;
	is_sudo?: boolean;
	cwd?: string;
	client_ids: string[];
	group_ids: string[];
	tags: JobClientTags | null;
	execute_concurrently: boolean;
	abort_on_error: boolean;
	timeout_sec: number;
}

interface WsJobMessage {
	client_id?: string;
	client_name?: string;
	status?: JobStatus;
	pid?: number;
	started_at?: string;
	finished_at?: string;
	error?: string;
	result?: { stdout?: string; stderr?: string; summary?: string };
	errors?: Array<{ title?: string; detail?: string }>;
}

// Base64 encode that keeps non-latin1 characters intact
export const encodeScript = (script: string) => {
	const bytes = new TextEncoder().encode(script);
	let binary = '';
	bytes.forEach((byte) => {
		binary += String.fromCharCode(byte);
	});
	return btoa(binary);
};

export const useJobExecution = (mode: ExecutionMode) => {
	const config = useRuntimeConfig();
	const userAuth = useCookie('token');
	const jobs = ref<Record<string, Job>>({});
	const loading = ref(false);
	const executeError = ref<string | null>(null);
	let ws: WebSocket | null = null;
	let timeoutTimer: ReturnType<typeof setInterval> | null = null;

	const wsUrl = computed(() => {
		const protocol = config.public.apiUrl.startsWith('http:') ? 'ws:' : 'wss:';
		return `${protocol}//${getHostFromUrl(config.public.apiUrl)}/api/v1/ws/${mode}?access_token=${userAuth.value}`;
	});

	const addJob = (clientId: string, job: Omit<Job, 'client_id' | 'client_name'> & { client_name?: string }) => {
		jobs.value[clientId] = { client_id: clientId, client_name: job.client_name || '', ...job };
	};

	const setStatus = (clientId: string, status: JobStatus) => {
		if (jobs.value[clientId]) {
			jobs.value[clientId].status = status;
		}
	};

	const clearJobs = () => {
		jobs.value = {};
		executeError.value = null;
	};

	const stopTimeoutWatcher = () => {
		if (timeoutTimer) {
			clearInterval(timeoutTimer);
			timeoutTimer = null;
		}
	};

	const isRunning = () => Object.values(jobs.value).some(job => job.status === 'running');

	// Marks jobs still running after timeout_sec as failed and closes the socket once nothing runs anymore
	const watchTimeout = (timeoutSec: number) => {
		stopTimeoutWatcher();
		let elapsed = 0;
		const label = mode === 'commands' ? 'command' : 'script';
		timeoutTimer = setInterval(() => {
			elapsed++;
			if (elapsed < timeoutSec && isRunning()) {
				return;
			}
			Object.values(jobs.value)
				.filter(job => job.status === 'running')
				.forEach((job) => {
					job.status = 'failed';
					job.result = {
						...job.result,
						client_id: job.client_id,
						stderr: `The ${label} execution exceeded the timeout (${timeoutSec} ${timeoutSec === 1 ? 'second' : 'seconds'}). The ${label} might continue running in the background on the remote system.`,
					};
				});
			ws?.close();
			loading.value = false;
			stopTimeoutWatcher();
		}, 1000);
	};

	const handleMessage = (event: MessageEvent, stdout: Record<string, string>, stderr: Record<string, string>, summary: Record<string, string>) => {
		const message: WsJobMessage = JSON.parse(event.data);
		if (message.errors) {
			executeError.value = message.errors[0]?.title || message.errors[0]?.detail || executeError.value;
			Object.values(jobs.value).forEach((job) => {
				job.status = 'failed';
			});
			loading.value = false;
			return;
		}

		const clientId = message.client_id;
		if (!clientId) {
			return;
		}
		if (!jobs.value[clientId]) {
			// Group/tag executions may report clients that were not known upfront
			addJob(clientId, { status: 'running', executingConcurrently: false, abortOnError: false, result: {} });
		}
		if (message.client_name) {
			jobs.value[clientId].client_name = message.client_name;
		}

		if (message.result?.stdout) {
			stdout[clientId] = (stdout[clientId] || '') + message.result.stdout;
		}
		if (message.result?.stderr) {
			stderr[clientId] = (stderr[clientId] || '') + message.result.stderr;
		}
		if (message.result?.summary) {
			summary[clientId] = (summary[clientId] || '') + message.result.summary;
		}

		const result: JobResult = {
			client_id: clientId,
			client_name: message.client_name || '',
			stdout: message.result?.stdout || '',
			stderr: message.result?.stderr || '',
			summary: message.result?.summary || '',
			error: message.error ?? '',
			pid: message.pid || '',
			started_at: message.started_at || '',
			finished_at: message.finished_at || '',
		};

		if (message.status) {
			jobs.value[clientId].result = result;
			setStatus(clientId, message.status);
		}
		else {
			jobs.value[clientId].result = { ...result, stdout: stdout[clientId], stderr: stderr[clientId], summary: summary[clientId] };
		}

		const job = jobs.value[clientId];
		if (message.status === 'failed' && !job.executingConcurrently && job.abortOnError) {
			Object.values(jobs.value)
				.filter(other => other.client_id !== clientId && other.status === 'running')
				.forEach((other) => {
					other.status = 'skipped';
				});
		}

		if (!isRunning()) {
			setTimeout(() => {
				loading.value = false;
			}, 800);
		}
	};

	const connect = () => new Promise<void>((resolve, reject) => {
		ws = new WebSocket(wsUrl.value);
		const stdout: Record<string, string> = {};
		const stderr: Record<string, string> = {};
		const summary: Record<string, string> = {};
		ws.onmessage = event => handleMessage(event, stdout, stderr, summary);
		ws.onopen = () => resolve();
		ws.onerror = (error) => {
			executeError.value = 'WebSocket error occurred.';
			loading.value = false;
			reject(error);
		};
		ws.onclose = () => {
			setTimeout(() => {
				loading.value = false;
			});
		};
	});

	// Mirrors the reference UI: explicit client ids win, then group ids, then tags
	const executeMultipleClients = async (execution: MultiClientExecution) => {
		try {
			loading.value = true;
			executeError.value = null;
			clearJobs();
			ws?.close();
			await connect();

			const payload: Record<string, unknown> = {
				...(mode === 'commands'
					? { command: execution.command }
					: {
							script: encodeScript(execution.script || ''),
							interpreter: (execution.interpreter || '').replace(/(\.exe|shOrShebang|systemDefaultShell)/g, ''),
							is_sudo: execution.is_sudo,
							cwd: execution.cwd,
						}),
				execute_concurrently: execution.execute_concurrently,
				abort_on_error: execution.abort_on_error,
				timeout_sec: execution.timeout_sec,
			};

			let targetIds: string[] = [];
			if (execution.client_ids.length) {
				targetIds = execution.client_ids;
				payload.client_ids = execution.client_ids;
			}
			else if (execution.group_ids.length) {
				payload.group_ids = execution.group_ids;
			}
			else if (execution.tags?.tags.length) {
				payload.tags = execution.tags;
			}

			targetIds.forEach((clientId) => {
				addJob(clientId, {
					status: 'running',
					executingConcurrently: execution.execute_concurrently,
					abortOnError: execution.abort_on_error,
					result: {},
				});
			});
			watchTimeout(execution.timeout_sec);
			ws?.send(JSON.stringify(payload));
		}
		catch (error) {
			executeError.value = executeError.value || String(error);
			loading.value = false;
		}
	};

	const disconnect = () => {
		stopTimeoutWatcher();
		ws?.close();
	};

	onBeforeUnmount(disconnect);

	return { jobs, loading, executeError, executeMultipleClients, clearJobs, disconnect };
};
