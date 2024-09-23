<template>
	<LoginForm
		v-if="!showTwoFa"
		@login="handleLogin"
	/>
	<TwoFa
		v-if="showTwoFa"
		:send_to="store.two_fa?.send_to"
		@code="handleTwoFa"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import type { ILoginInput } from '~/types';

const store = useTokenStore();
const { authenticated, showTwoFa } = storeToRefs(store);
const router = useRouter();
const credentialsRef = ref<ILoginInput>({
	username: '',
	password: '',
	remember_me: '',
});

definePageMeta({
	layout: 'auth',
});
useHead({
	title: 'Login',
});

const handleLogin = async (credentials: ILoginInput) => {
	credentialsRef.value = credentials;
	await store.getLoginToken(credentials);
	if (authenticated) {
		router.push('/');
	}
};

const handleTwoFa = async (two_fa: string) => {
	await store.verifyTwoFa(credentialsRef.value, two_fa);
	if (authenticated) {
		router.push('/');
	}
};
</script>
