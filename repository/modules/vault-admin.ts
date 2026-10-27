import { HttpFactory } from '~/repository/factory';
import type { VaultAdminStatus } from '~/types';

class VaultAdminModule extends HttpFactory {
	private RESOURCE = '/api/v1/vault-admin';

	async status(): Promise<{ data: VaultAdminStatus }> {
		return this.call('GET', this.RESOURCE, undefined);
	}

	async init(password: string): Promise<unknown> {
		return this.call('POST', `${this.RESOURCE}/init`, { password });
	}

	async unlock(password: string): Promise<unknown> {
		return this.call('POST', `${this.RESOURCE}/sesame`, { password });
	}

	async lock(): Promise<unknown> {
		return this.call('DELETE', `${this.RESOURCE}/sesame`, undefined);
	}
}

export default VaultAdminModule;
