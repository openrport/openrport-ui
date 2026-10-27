import { defineStore } from 'pinia';
import type { Client, ClientGroup, ClientMetric, ClientMountpoint, ClientsResponse } from '~/types';

export const useClientStore = defineStore('clients', {
	state: () => ({
		clients: [] as Array<Client>,
		groups: [] as Array<ClientGroup>,
		currentClient: {} as Client,
		currentMetrics: [] as Array<ClientMetric>,
		currentMountpoints: [] as Array<ClientMountpoint>,
	}),
	getters: {
		getClients(state) {
			return state.clients;
		},
		getCurrentClient(state) {
			return state.currentClient;
		},
		getCurrentMetrics(state) {
			return state.currentMetrics;
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
		// The client and its usage data are independent, so they load in parallel like the reference UI
		async loadClientById(clientId: string) {
			const { $api } = useNuxtApp();
			if (this.currentClient.id !== clientId) {
				// Never show the previously opened client while the new one loads
				this.$state.currentClient = {} as Client;
				this.$state.currentMetrics = [];
				this.$state.currentMountpoints = [];
			}
			const usage = this.loadClientUsage(clientId);
			try {
				this.$state.currentClient = <Client>(await $api.clients.show(clientId)).data;
			}
			catch (e) {
				console.error('Error fetching client:', e);
			}
			await usage;
		},
		async loadClientUsage(clientId: string) {
			const { $api } = useNuxtApp();
			const [metrics, mountpoints] = await Promise.allSettled([
				$api.clients.metrics(clientId),
				$api.clients.mountpoints(clientId),
			]);
			this.$state.currentMetrics = metrics.status === 'fulfilled' ? metrics.value.data : [];
			this.$state.currentMountpoints = mountpoints.status === 'fulfilled' ? mountpoints.value.data : [];
		},
		updateClient(client: Partial<Client>) {
			this.$state.currentClient = {
				...client,
				...this.$state.currentClient,
			};
		},
	},
});
