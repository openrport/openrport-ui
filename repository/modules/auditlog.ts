import { HttpFactory } from '~/repository/factory';
import type { AuditLog, AuditLogFilter, Meta } from '~/types';

class AuditLogModule extends HttpFactory {
	private RESOURCE = '/api/v1/auditlog';

	// Newest first, like the reference; the start date filters on timestamp > date and the username is a prefix match
	async list(filter: AuditLogFilter, offset = 0, limit = 20): Promise<{ data: AuditLog[]; meta: Meta }> {
		const params = [`sort=-timestamp`, `page[limit]=${limit}`, `page[offset]=${offset}`];
		if (filter.timestamp) {
			params.push(`filter[timestamp][gt]=${encodeURIComponent(filter.timestamp)}`);
		}
		if (filter.username) {
			params.push(`filter[username]=${encodeURIComponent(`${filter.username}*`)}`);
		}
		if (filter.application) {
			params.push(`filter[application]=${encodeURIComponent(filter.application)}`);
		}
		return this.call('GET', `${this.RESOURCE}?${params.join('&')}`, undefined);
	}
}

export default AuditLogModule;
