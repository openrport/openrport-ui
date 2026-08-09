<template>
	<div class="flex min-h-[240px] w-full max-w-[400px] items-center justify-center text-sm text-theme-label">
		<span v-if="loading">Signing you in...</span>
		<span v-else-if="errorMessage">{{ errorMessage }}</span>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const config = useRuntimeConfig();
const store = useTokenStore();

const loading = ref(true);
const errorMessage = ref('');

definePageMeta({
	layout: 'auth',
});

useHead({
	title: 'OAuth Login',
});


onMounted(async () => {
	const callbackHandledKey = 'oauth-callback-handled';
	if (window.sessionStorage.getItem(callbackHandledKey) === '1') {
		loading.value = false;
		return;
	}

	const code = route.query.code;
	const state = route.query.state;
	const remoteError = route.query.error;

	if (typeof remoteError === 'string') {
		errorMessage.value = remoteError;
		loading.value = false;
		return;
	}

	if (typeof code !== 'string' || typeof state !== 'string') {
		errorMessage.value = 'Missing OAuth callback parameters.';
		loading.value = false;
		return;
	}

	try {
		window.sessionStorage.setItem(callbackHandledKey, '1');
		const response = await $fetch<{ data: { token: string | null, two_fa: unknown } }>('/api/v1/oauth/login', {
			method: 'GET',
			baseURL: config.public.apiUrl,
			credentials: 'include',
			query: {
				code,
				state,
			},
		});

		if (!response.data.token) {
			errorMessage.value = 'OAuth login requires additional verification which is not yet supported in this view.';
			loading.value = false;
			return;
		}

		store.authenticated = true;
		window.sessionStorage.removeItem(callbackHandledKey);
		await router.replace('/');
	}
	catch (error: any) {
		window.sessionStorage.removeItem(callbackHandledKey);
		errorMessage.value = error?.data?.errors?.[0]?.detail || error?.data?.errors?.[0]?.title || 'OAuth sign-in failed.';
		loading.value = false;
		return;
	}
});
</script>