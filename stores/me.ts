import type { Profile } from '~/types';

export const useProfile = defineStore('profile', {
	state: () => ({
		profile: {} as Profile,
	}),
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
	},
});
