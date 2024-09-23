import { HttpFactory } from '~/repository/factory';
import type { Tunnel, TunnelResponse } from '~/types';

class TunnelsModule extends HttpFactory {
	private RESOURCE = '/api/v1/tunnels';

	async index(): Promise<Tunnel[]> {
		const response = await this.call<TunnelResponse>(
			'GET',
			`${this.RESOURCE}`,
			undefined,
		);
		return response?.data;
	}
}
export default TunnelsModule;
