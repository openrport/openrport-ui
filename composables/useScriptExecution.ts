import { getHostFromUrl } from '~/utils/url';

export const useScriptExecution = () => {
	const config = useRuntimeConfig();
	const userAuth = useCookie('token');
	const wsUrl = `wss://${getHostFromUrl(config.public.apiUrl)}/api/v1/ws/scripts?access_token=${userAuth.value}`;
	let ws: WebSocket | null = null;
	const results = ref<any[]>([]);
	const isConnected = ref(false);
	const error = ref<string | null>(null);
	const isLoading = ref(false);

	const executeScript = (script: string, clientIds: string[], groupIds: string[], cwd: string, executeConcurrently: boolean, isSudo: boolean, timeoutInSecond: number) => {
		ws = new WebSocket(wsUrl);
		isLoading.value = true;
		const requestPayload = {
			script: btoa(script),
			client_ids: clientIds,
			group_ids: groupIds,
			timeout_sec: timeoutInSecond,
			cwd: cwd,
			execute_concurrently: executeConcurrently,
			is_sudo: isSudo,

		};

		ws.onopen = () => {
			results.value = [];
			ws?.send(JSON.stringify(requestPayload));
		};
		ws.onmessage = (event) => {
			const data = JSON.parse(event.data);
			results.value.push(data);
			isLoading.value = false;
		};
		ws.onerror = (err) => {
			error.value = 'WebSocket error occurred.';
			isLoading.value = false;
			ws?.close();
		};
		ws.onclose = (event) => {
			isLoading.value = false;
		};
	};
	const disconnect = () => {
		if (ws) {
			ws.close();
		}
	};
	return { executeScript, disconnect, isLoading, results, isConnected, error };
};
