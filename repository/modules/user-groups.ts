import { HttpFactory } from '~/repository/factory';
import type { UserGroup, UserGroupResponse } from '~/types';

class UserGroupsModule extends HttpFactory {
	private RESOURCE = 'api/v1/user-groups';

	async all(): Promise<UserGroup[]> {
		const response = await this.call<UserGroupResponse>(
			'GET',
			`${this.RESOURCE}`,
			undefined,
		);
		return response.data;
	}

	// The extended restrictions are only sent when the group has them, like the reference
	async update(group: UserGroup): Promise<unknown> {
		const payload: Partial<UserGroup> = { permissions: group.permissions };
		if (group.commands_restricted !== undefined) {
			payload.commands_restricted = group.commands_restricted;
		}
		if (group.tunnels_restricted !== undefined) {
			payload.tunnels_restricted = group.tunnels_restricted;
		}
		return this.call('PUT', `${this.RESOURCE}/${encodeURIComponent(group.name)}`, payload);
	}
}

export default UserGroupsModule;
