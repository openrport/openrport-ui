import { HttpFactory, HttpMethod } from '~/repository/factory';
import type { APITokenPayload, APITokenResponse, APITokensResponse, IpResponse, Profile, ProfileResponse, ProfileUpdatePayload } from '~/types';

class ProfileModule extends HttpFactory {
	private RESOURCE = 'api/v1/me';

	async get(): Promise<Profile> {
		const response = await this.call<ProfileResponse>(
			'GET',
			`${this.RESOURCE}`,
			undefined,
		);
		return response.data;
	}

	// Only the fields that change are sent, e.g. { username, two_fa_send_to, password, old_password }
	async updateMe(payload: ProfileUpdatePayload): Promise<ProfileResponse> {
		return this.call<ProfileResponse>(
			HttpMethod.PUT,
			`${this.RESOURCE}`,
			payload,
		);
	}

	async apiTokens(): Promise<APITokensResponse> {
		return this.call<APITokensResponse>(
			'GET',
			`${this.RESOURCE}/tokens`,
			undefined,
		);
	}

	async create(payload: APITokenPayload): Promise<APITokenResponse> {
		return this.call<APITokenResponse>(
			HttpMethod.POST,
			`${this.RESOURCE}/tokens`,
			payload,
		);
	}

	async update(payload: APITokenPayload): Promise<APITokenResponse> {
		return this.call<APITokenResponse>(
			HttpMethod.PUT,
			`${this.RESOURCE}/tokens/${payload.prefix}`,
			payload,
		);
	}

	async delete(tokenPrefix: string): Promise<never> {
		return this.call(
			HttpMethod.DELETE,
			`${this.RESOURCE}/tokens/${tokenPrefix}`,
			undefined,
		);
	}

	async ip(): Promise<IpResponse> {
		return this.call<IpResponse>(
			HttpMethod.GET,
			`${this.RESOURCE}/ip`,
			undefined,
		);
	}
}

export default ProfileModule;
