import { HttpFactory } from '~/repository/factory';
import type { VaultEntry, VaultEntryPayload } from '~/types';

class VaultModule extends HttpFactory {
	private RESOURCE = '/api/v1/vault';

	// Fails while the vault is locked or not initialized; the list has no values
	async list(clientId: string): Promise<{ data: VaultEntry[] }> {
		return this.call('GET', `${this.RESOURCE}?filter[client_id]=${encodeURIComponent(clientId)}`, undefined);
	}

	// Entries with their values, the way the reference loads them for the device tabs
	async listWithValues(clientId: string): Promise<VaultEntry[]> {
		const { data } = await this.list(clientId);
		const entries = await Promise.allSettled((data || []).map(entry => this.show(entry.id)));
		return entries.flatMap(entry => entry.status === 'fulfilled' && entry.value?.data ? [entry.value.data] : []);
	}

	async show(id: number): Promise<{ data: VaultEntry }> {
		return this.call('GET', `${this.RESOURCE}/${id}`, undefined);
	}

	async create(payload: VaultEntryPayload): Promise<{ data: { id: number } }> {
		return this.call('POST', this.RESOURCE, payload);
	}

	async update(id: number, payload: VaultEntryPayload): Promise<unknown> {
		return this.call('PUT', `${this.RESOURCE}/${id}`, payload);
	}

	async delete(id: number): Promise<unknown> {
		return this.call('DELETE', `${this.RESOURCE}/${id}`, undefined);
	}
}

export default VaultModule;
