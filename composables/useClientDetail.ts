export const useClientDetail = () => {
	const deviceId = useRoute().params.id;

	const clientStore = useClientStore();
	const { currentClient: device, currentMetrics: metrics, currentMountpoints: mountpoints } = storeToRefs(clientStore);

	onMounted(() => {
		clientStore.loadClientById(deviceId as string);
	});

	const reloadUsage = () => clientStore.loadClientUsage(deviceId as string);

	return {
		deviceId,
		clientStore,
		device,
		metrics,
		mountpoints,
		reloadUsage,
	};
};
