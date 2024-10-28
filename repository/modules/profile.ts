import { HttpFactory, HttpMethod } from '~/repository/factory';
import type {APITokenPayload, APITokenResponse, APITokensResponse, IpResponse, Profile, ProfileResponse} from '~/types';

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
