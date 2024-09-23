export default defineNuxtRouteMiddleware((to, from) => {
	// const isLoggedIn = false;
	// if (isLoggedIn) {
	//     return navigateTo(to.fullPath);
	// }
	// return navigateTo("/auth")
	const { authenticated } = storeToRefs(useTokenStore());
	const token = useCookie('token');

	if (token.value) {
		authenticated.value = true;
	}

	if (token.value && to?.name === 'auth') {
		return navigateTo('/');
	}
	if (!token.value && to?.name !== 'auth') {
		abortNavigation();
		return navigateTo('/auth');
	}
});
