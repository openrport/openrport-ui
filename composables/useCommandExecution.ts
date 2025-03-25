const getHostFromUrl = (fullUrl: string) => {
	const url = new URL(fullUrl);
	return url.host;
};
export const useCommandExecution = () => {
	const config = useRuntimeConfig();
	const userAuth = useCookie('token');
	const wsUrl = `wss://${getHostFromUrl(config.public.apiUrl)}/api/v1/ws/commands?access_token=${userAuth.value}`;
	let ws: WebSocket | null = null;
	const results = ref<any[]>([]);
	const isConnected = ref(false);
	const error = ref<string | null>(null);
	const isLoading = ref(false);

	const executeCommand = (command: string, clientsIds: string[], groupIds: string[]) => {
		ws = new WebSocket(wsUrl);
		isLoading.value = true;
		const requestPayload = {
			command,
			client_ids: clientsIds,
			group_ids: groupIds,
			timeout_sec: 30,
			execute_concurrently: true,
			is_sudo: false,
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

	return { executeCommand, disconnect, isLoading, results, isConnected, error };
};
