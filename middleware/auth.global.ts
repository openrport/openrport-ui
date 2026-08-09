export default defineNuxtRouteMiddleware((to: any, _from: any) => {
	if (process.server) {
		return;
	}

	const store = useTokenStore();
	const { authenticated } = storeToRefs(store);
	const isAuthRoute = to.path === '/auth';
	const isOAuthCallbackRoute = to.path.startsWith('/oauth/callback');

	return (async () => {
		if (isOAuthCallbackRoute) {
			return;
		}

		if (!authenticated.value) {
			try {
				const config = useRuntimeConfig();
				await $fetch('/api/v1/status', {
					method: 'GET',
					baseURL: config.public.apiUrl,
					credentials: 'include',
				});
				authenticated.value = true;
			}
			catch {
				authenticated.value = false;
			}
		}

		if (authenticated.value && isAuthRoute) {
			return navigateTo('/');
		}

		if (!authenticated.value && !isAuthRoute) {
			abortNavigation();
			return navigateTo('/auth');
		}
	})();
});
