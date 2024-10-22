import type { InstallerResponse } from '~/types';

export const useInstaller = () => {
	const { $api } = useNuxtApp();

	const isLoading = ref(false);
	const error = ref<string | null>(null);

	const installers = reactive({
		linux: '',
		windows: '',
		pairing_code: '',
	});

	async function fetchInstaller(params: {
		client_id: string;
		connect_url: string;
		fingerprint: string;
		password: string;
	}, pairingUrl: string) {
		isLoading.value = true;
		error.value = null;

		try {
			const response = await $fetch<InstallerResponse>(pairingUrl, {
				method: 'POST',
				body: params,
			});

			Object.assign(installers, {
				linux: response.installers.linux,
				windows: response.installers.windows,
				pairing_code: response.pairing_code,
			});
		}
		catch (e) {
			error.value = e instanceof Error ? e.message : 'Failed to get pairing code';
		}
		finally {
			isLoading.value = false;
		}
	}

	return {
		isLoading,
		error,
		installers,
		fetchInstaller,
	};
};
