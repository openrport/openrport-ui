import { HttpFactory } from '~/repository/factory';
import type {
	ClientGraphMetric,
	ClientMetricsResponse,
	ClientMountpointsResponse,
	ClientProcessesResponse,
	ClientResponse,
	ClientsResponse,
	Client,
	StoredTunnel, StoredTunnelResponse,
	Tunnel, TunnelPayload,
	TunnelResponse, ClientTagsResponse,
} from '~/types';
import { toQueryString } from '~/lib/utils';

class ClientsModule extends HttpFactory {
	private RESOURCE = '/api/v1/clients';
	private RESOURCE_TAGS = '/api/v1/client-tags';

	async show(id: string): Promise<ClientResponse> {
		return this.call<ClientResponse>(
			'GET',
			`${this.RESOURCE}/${id.toLowerCase()}`,
			undefined,
		);
	}

	async listClients(): Promise<ClientsResponse> {
		return this.call<ClientsResponse>('GET',
			`${this.RESOURCE}?sort=name&fields[clients]=id,name,os,os_family,os_kernel,os_full_name,ipv4,disconnected_at,tags&page[limit]=20&page[offset]=0`,
			undefined,
		);
	}

	async listClientsWithFilter(filter: string): Promise<ClientsResponse> {
		return this.call<ClientsResponse>('GET',
			`${this.RESOURCE}?${filter}`,
			undefined,
		);
	}

	async getClientsName(clientsIds: Array<string>): Promise<ClientsResponse> {
		return this.call<ClientsResponse>('GET',
			`${this.RESOURCE}?sort=name&fields[clients]=name,id&page[limit]=${clientsIds.length}&page[offset]=0&filter[id]=${clientsIds.join(',')}`,
			undefined,
		);
	}

	// "all" lists every client, "favorites" the given favorite IDs, anything else is a client group
	async listByGroup(id: string, favoriteIds: string[] = []): Promise<ClientsResponse> {
		let params = `?sort=name&fields[clients]=id,name,os,os_family,os_kernel,os_full_name,ipv4,disconnected_at,tags&page[limit]=20&page[offset]=0`;
		if (id === 'favorites') {
			params += `&filter[id]=${favoriteIds.map(encodeURIComponent).join(',')}`;
		}
		else if (id !== 'all') {
			params += `&filter[groups]=${id}`;
		}
		return this.call(
			'GET',
			`${this.RESOURCE}${params}`,
			undefined,
		);
	}

	async getTotalClients(): Promise<ClientsResponse> {
		return this.call(
			'GET',
			`${this.RESOURCE}?page[limit]=1`,
			undefined,
		);
	}

	async metrics(id: string): Promise<ClientMetricsResponse> {
		return this.call(
			'GET',
			`${this.RESOURCE}/${id}/metrics`,
			undefined,
		);
	}

	// Administrators always keep access, so they are never part of this list
	async updateAllowedUserGroups(id: string, groups: string[]): Promise<unknown> {
		return this.call('POST', `${this.RESOURCE}/${id}/acl`, { allowed_user_groups: groups });
	}

	async mountpoints(id: string): Promise<ClientMountpointsResponse> {
		return this.call('GET', `${this.RESOURCE}/${id}/mountpoints`, undefined);
	}

	async tunnels(id: string): Promise<Tunnel[]> {
		const response = await this.call<TunnelResponse>(
			'GET',
			`${this.RESOURCE}/${id}?fields[clients]=tunnels`,
			undefined,
		);
		return response?.data;
	}

	async storedTunnels(id: string): Promise<StoredTunnel[]> {
		const response = await this.call<StoredTunnelResponse>(
			'GET',
			`${this.RESOURCE}/${id}/stored-tunnels?page[limit]=100`,
			undefined,
		);
		return response?.data;
	}

	async createTunnel(clientId: string, payload: TunnelPayload): Promise<{ data: Tunnel }> {
		return await this.call<{ data: Tunnel }>(
			'PUT',
			`${this.RESOURCE}/${clientId}/tunnels${toQueryString(payload)}`,
			undefined,
		);
	}

	async updateTagsLabel(client: Client): Promise<never> {
		return await this.call(
			'PUT',
			`${this.RESOURCE}/${client.id}/attributes`,
			{
				tags: client.tags,
				labels: client.labels,
			},
		);
	}

	async graphMetrics(id: string, graph: string, since: string, until: string): Promise<{ data: ClientGraphMetric[] }> {
		return this.call<{ data: ClientGraphMetric[] }>(
			'GET',
			`${this.RESOURCE}/${id}/graph-metrics/${graph}?filter[timestamp][since]=${since}&filter[timestamp][until]=${until}&sort=timestamp`,
			undefined,
		);
	}

	// One process snapshot per page, newest first, for the given UTC day
	async processes(id: string, day: string, offset = 0): Promise<ClientProcessesResponse> {
		return this.call<ClientProcessesResponse>(
			'GET',
			`${this.RESOURCE}/${id}/processes?filter[timestamp][since]=${day}T00:00:00Z&filter[timestamp][until]=${day}T23:59:59Z&page[limit]=1&page[offset]=${offset}`,
			undefined,
		);
	}

	async listTags(filter = 'page[limit]=20&page[offset]=0'): Promise<ClientTagsResponse> {
		return this.call<ClientTagsResponse>('GET', `${this.RESOURCE_TAGS}?${filter}`, undefined);
	}
}

export default ClientsModule;
