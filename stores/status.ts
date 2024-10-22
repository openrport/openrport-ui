import { defineStore } from 'pinia';
import type { ServerStatus } from '~/types';

export const useStatusStore = defineStore('status', {
	state: () => ({
		status: {} as ServerStatus,
		nbClient: 0,
	}),
	actions: {
		async loadStatus() {
			try {
				const { $api } = useNuxtApp();
				const { data: response } = await $api.status.show();
				if (response) {
					this.$state.status = response.value.data as ServerStatus;
				}
			}
			catch (e) {
				console.log(e);
			}
		},
		async fetchNbClients() {
			try {
				const { $api } = useNuxtApp();
				const data = await $api.clients.getTotalClients();
				if (data?.meta) {
					this.$state.nbClient = data.meta.count;
				}
			}
			catch (e) {
				console.log(e);
			}
		},
	},
});
