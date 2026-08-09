import { $fetch } from 'ofetch';
import type { FetchOptions } from 'ofetch';
import AuthModule from '~/repository/modules/auth';
import ClientsModule from '~/repository/modules/clients';
import GroupsModule from '~/repository/modules/groups';
import UsersModule from '~/repository/modules/users';
import UserGroupsModule from '~/repository/modules/user-groups';
import ProfileModule from '~/repository/modules/profile';
import ClientAuthModule from '~/repository/modules/client-auth';
import StatusModule from '~/repository/modules/status';
import TunnelsModule from '~/repository/modules/tunnels';

interface IApiInstance {
	auth: AuthModule;
	clients: ClientsModule;
	groups: GroupsModule;
	users: UsersModule;
	userGroups: UserGroupsModule;
	profile: ProfileModule;
	clientAuth: ClientAuthModule;
	status: StatusModule;
	tunnels: TunnelsModule;
}

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const authStore = useTokenStore();
	const fetchOptions: FetchOptions = {
		baseURL: config.public.apiUrl,
		credentials: 'include',
	};
	const apiFetchOptions: FetchOptions = {
		baseURL: config.public.apiUrl,
		credentials: 'include',
		headers: {
			Accept: 'application/json',
		},
		onRequestError({ request, options: _options, error }) {
			console.log('[fetch request error]', request, error);
		},
		async onResponseError({ request: _request, response, options: _options }) {
			if (response.status === 401) {
				authStore.authenticated = false;
				await navigateTo('/auth');
			}
		},
	};
	const authFetcher = $fetch.create(fetchOptions);
	const apiFetcher = $fetch.create(apiFetchOptions);
	const modules: IApiInstance = {
		auth: new AuthModule(authFetcher),
		clients: new ClientsModule(apiFetcher),
		groups: new GroupsModule(apiFetcher),
		users: new UsersModule(apiFetcher),
		userGroups: new UserGroupsModule(apiFetcher),
		profile: new ProfileModule(apiFetcher),
		clientAuth: new ClientAuthModule(apiFetcher),
		status: new StatusModule(apiFetcher),
		tunnels: new TunnelsModule(apiFetcher),
	};

	return {
		provide: {
			api: modules,
		},
	};
});
