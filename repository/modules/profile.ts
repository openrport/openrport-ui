import { HttpFactory } from '~/repository/factory';
import type { Profile, ProfileResponse } from '~/types';

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
}

export default ProfileModule;
