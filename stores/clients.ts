import { defineStore } from 'pinia';
import type { Client, ClientGroup, ClientsResponse } from '~/types';

export const useClientStore = defineStore('clients', {
	state: () => ({
		clients: [] as Array<Client>,
		groups: [] as Array<ClientGroup>,
	}),
	getters: {
		getClients(state) {
			return state.clients;
		},
	},
	actions: {

		async loadClients() {
			try {
				const data: ClientsResponse = (await this.fetchClients()) as ClientsResponse;
				if (data) {
					this.clients = <Client[]>data.data;
				}
			}
			catch (error) {
				console.error('Error loading clients:', error);
			}
		},
		async loadGroups() {
			const { $api } = useNuxtApp();
			const data = await $api.groups.listGroups();

			this.$state.groups = <ClientGroup[]>data.data;
		},

		async loadGroupList(id: string) {
			const { $api } = useNuxtApp();
			const data = await $api.clients.listByGroup(id);
			return data.data;
		},
		async fetchClients() {
			const { $api } = useNuxtApp();
			try {
				return await $api.clients.listClients();
			}
			catch (e) {
				console.error('Error fetching clients:', e);
			}
		},
	},
});
