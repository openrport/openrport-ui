import { HttpFactory, HttpMethod } from '~/repository/factory';
import type { Client, ClientGroup, ClientGroupResponse } from '~/types';

class GroupsModule extends HttpFactory {
	private RESOURCE = '/api/v1/client-groups';

	async listGroups(): Promise<ClientGroupResponse> {
		return this.call<ClientGroupResponse>(
			'GET',
			`${this.RESOURCE}?page[limit]=20&page[offset]=0&fields[client_groups]=id,description,num_clients`, undefined);
	}

	async create(payload: Client): Promise<any> {
		return this.call(
			HttpMethod.POST,
			`${this.RESOURCE}`,
			payload,
		);
	}

	async show(group_id: string, params?: any): Promise<any> {
		return this.call(
			'GET',
			`${this.RESOURCE}/${group_id}`,
			undefined,
		);
	}

	async update(group_id: string, payload: Partial<ClientGroup>): Promise<any> {
		return this.call(
			'PUT',
			`${this.RESOURCE}/${group_id}`,
			payload,
		);
	}

	async delete(group_id: string): Promise<any> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${group_id}`,
			undefined,
		);
	}
}

export default GroupsModule;
