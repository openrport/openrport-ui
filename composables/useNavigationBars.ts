export const useNavigationBars = () => {
	const isDeviceBarOpen = ref(false);
	const isSettingsBarOpen = ref(false);

	const toggleDeviceBarNav = () => {
		isDeviceBarOpen.value = !isDeviceBarOpen.value;
	};

	const toggleSettingsBarNav = () => {
		isSettingsBarOpen.value = !isSettingsBarOpen.value;
	};

	return {
		isDeviceBarOpen,
		isSettingsBarOpen,
		toggleDeviceBarNav,
		toggleSettingsBarNav,
	};
};
