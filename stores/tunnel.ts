import { defineStore } from 'pinia';
import type { TunnelPayload } from '~/types';

export const useTunnelStore = defineStore('tunnel', {
	state: () => ({
		isAddingTunnel: false,
	}),

	actions: {
		openAddTunel() {
			this.isAddingTunnel = true;
		},
		async createTunnel(clientID: string, payload: TunnelPayload) {
			const { $api } = useNuxtApp();
			try {
				const data = await $api.clients.createTunnel(clientID, payload);
				console.log(data);
				return { data: data, error: null };
			}
			catch (e: any) {
				return {
					data: null,
					error: e.data,
				};
			}
		},
		closeAddTunnel() {
			this.isAddingTunnel = false;
		},
	},
});
