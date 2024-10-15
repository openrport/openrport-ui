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

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig();
	const userAuth = useCookie('token');
	const is_authenticated = useCookie<boolean>('is_authenticated');
	const fetchOptions: FetchOptions = {
		baseURL: config.public.apiUrl,
	};
	const apiFetchOptions: FetchOptions = {
		baseURL: config.public.apiUrl,
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${userAuth.value}`,
		},
		onRequestError({ request, options, error }): void | Promise<void> {
			console.log('[fetch request error]', request, error);
		},
		async onResponseError({ request, response, options }): void | Promise<void> {
			if (response.status === 401) {
				userAuth.value = null;
				is_authenticated.value = false;
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
