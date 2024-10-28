import { HttpFactory } from '~/repository/factory';
import type {
	ClientMetricsResponse,
	ClientResponse,
	ClientsResponse,
	StoredTunnel, StoredTunnelResponse,
	Tunnel, TunnelPayload,
	TunnelResponse,
} from '~/types';
import { toQueryString } from '~/lib/utils';

class ClientsModule extends HttpFactory {
	private RESOURCE = '/api/v1/clients';

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

	async getClientsName(clientsIds: Array<string>): Promise<ClientsResponse> {
		return this.call<ClientsResponse>('GET',
			`${this.RESOURCE}?sort=name&fields[clients]=name,id&page[limit]=${clientsIds.length}&page[offset]=0&filter[id]=${clientsIds.join(',')}`,
			undefined,
		);
	}

	async listByGroup(id: string): Promise<ClientsResponse> {
		let params = `?sort=name&fields[clients]=id,name,os,os_family,os_kernel,os_full_name,ipv4,disconnected_at,tags&page[limit]=20&page[offset]=0`;
		if (id !== 'all') {
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
}

export default ClientsModule;
