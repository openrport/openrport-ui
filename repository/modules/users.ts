import { HttpFactory } from '~/repository/factory';
import type { Meta, User, UserPayload, UserSessionResponse } from '~/types';

class UsersModule extends HttpFactory {
	private RESOURCE = 'api/v1/users';

	public async list(offset = 0, limit = 20): Promise<{ data: User[]; meta?: Meta }> {
		return this.call(
			'GET',
			`${this.RESOURCE}?page[limit]=${limit}&page[offset]=${offset}`,
			undefined,
		);
	}

	public async getSessions(username: string): Promise<UserSessionResponse> {
		return this.call<UserSessionResponse>(
			'GET',
			`${this.RESOURCE}/${encodeURIComponent(username)}/sessions`,
			undefined,
		);
	}

	public async deleteSessionForUser(username: string, sessionId: number): Promise<never> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${encodeURIComponent(username)}/sessions/${sessionId}`,
			undefined,
		);
	}

	public async deleteSessions(username: string): Promise<never> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${encodeURIComponent(username)}/sessions`,
			undefined,
		);
	}

	public async create(user: UserPayload): Promise<unknown> {
		return this.call('POST', this.RESOURCE, user);
	}

	// Same fields as the reference; without a password the current one is kept
	public async update(username: string, user: UserPayload): Promise<unknown> {
		return this.call(
			'PUT',
			`${this.RESOURCE}/${encodeURIComponent(username)}`,
			{
				username: user.username,
				password: user.password,
				password_expired: user.password_expired,
				groups: user.groups,
				two_fa_send_to: user.two_fa_send_to,
			},
		);
	}

	public async delete(username: string): Promise<unknown> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${encodeURIComponent(username)}`,
			undefined,
		);
	}

	public async resetTotpSecret(username: string): Promise<unknown> {
		return this.call(
			'DELETE',
			`${this.RESOURCE}/${encodeURIComponent(username)}/totp-secret`,
			undefined,
		);
	}
}
export default UsersModule;
