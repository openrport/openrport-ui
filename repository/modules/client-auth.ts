import { HttpFactory } from '~/repository/factory';
import type { ClientAuth, ClientAuthResponse } from '~/types';

class ClientAuthModule extends HttpFactory {
	private RESOURCE = 'api/v1/clients-auth';

	async all(): Promise<ClientAuthResponse> {
		return this.get<ClientAuthResponse>(this.RESOURCE, undefined);
	}

	async paginate(offset = 0, filter = ''): Promise<ClientAuthResponse> {
		if (filter?.length > 0) {
			return this.searchById(offset, filter);
		}
		return this.call<ClientAuthResponse>('GET',
			`${this.RESOURCE}?page[limit]=20&page[offset]=${offset * 20}`, undefined);
	}

	async searchById(offset = 0, id: string): Promise<ClientAuthResponse> {
		return this.call<ClientAuthResponse>(
			'GET',
			`${this.RESOURCE}?page[limit]=20&page[offset]=0&filter[id]${id}`,
			undefined,
		);
	}

	async create(clientAuth: ClientAuth): Promise<any> {
		return this.call(
			'POST',
			this.RESOURCE,
			clientAuth);
	}

	async show(client_auth_id: string): Promise<ClientAuth> {
		const response = await this.get(`${this.RESOURCE}/${client_auth_id}`, undefined);
		// @ts-ignore
		return response.data;
	}

	async delete(client_auth_id: string, force = false): Promise<any> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${client_auth_id}?force=${force}`,
			undefined,
		);
	}
}
export default ClientAuthModule;
