import type { Profile } from '~/types';

export const useProfile = defineStore('profile', {
	state: () => ({
		profile: {} as Profile,
		ip: '' as string,
	}),
	getters: {
		getServerIp(state) {
			return state.ip;
		},
	},
	actions: {
		async fetchProfile(): Promise<void> {
			const { $api } = useNuxtApp();
			try {
				this.profile = await $api.profile.get();
			}
			catch (e) {
				console.error(e);
			}
		},

		async loadServerIp(): Promise<void> {
			const { $api } = useNuxtApp();
			try {
				const response = await $api.profile.ip();
				this.ip = response?.data?.ip;
			}
			catch (e) {
				console.log(e);
			}
		},
	},
});
