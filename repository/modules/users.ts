import { HttpFactory } from '~/repository/factory';
import type { UserPayload, User, UserListResponse, UserSessionResponse } from '~/types';

class UsersModule extends HttpFactory {
	private RESOURCE = 'api/v1/users';

	public async getAll(): Promise<User[]> {
		const response = await this.call<UserListResponse>(
			'GET',
			`${this.RESOURCE}?page[limit]=20&page[offset]=0`,
			undefined,
		);
		return response.data;
	}

	public async getSessions(username: string): Promise<UserSessionResponse> {
		return this.call<UserSessionResponse>(
			'GET',
			`${this.RESOURCE}/${username}/sessions`,
			undefined,
		);
	}

	public async deleteSessionForUser(username: string, session_id: number): Promise<never> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${username}/sessions/${session_id}`,
			undefined,
		);
	}

	public async deleteSessions(username: string): Promise<never> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${username}/sessions`,
			undefined,
		);
	}

	public async create(user: UserPayload): Promise<User> {
		return this.call(
			'POST',
			`${this.RESOURCE}`,
			{
				...user,
			},
		);
	}

	public async update(user: User, user_id: string, password?: string): Promise<User> {
		return this.call(
			'PUT',
			`${this.RESOURCE}/${user_id}`,
			{
				...user,
				password,
			},
		);
	}

	public async delete(user_id: string): Promise<any> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${user_id}`,
			undefined,
		);
	}
}
export default UsersModule;
