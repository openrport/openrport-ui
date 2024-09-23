import { defineStore } from 'pinia';
import type { ILoginInput, TwoFa } from '~/types';

export const useTokenStore = defineStore('token', {
	state: () => ({
		authenticated: false,
		showTwoFa: false,
		loading: false,
		errors: [] as Array<string>,
		two_fa: {} as TwoFa,
		twoFaToken: null as string,
	}),
	actions: {
		async getLoginToken(credentials: ILoginInput) {
			const { $api } = useNuxtApp();
			this.loading = true;
			const token = useCookie<string>('token');
			const is_authenticated = useCookie<boolean>('is_authenticated');
			try {
				const response = await $api.auth.login(credentials);
				console.log(response);
				if (response?.data.token) {
					if (response?.data?.two_fa !== null) {
						this.twoFaToken = response.data.token;
						this.two_fa = response.data.two_fa;
						this.showTwoFa = true;
					}
					else {
						token.value = response.data.token;
						is_authenticated.value = true;
						this.authenticated = true;
					}
				}
				this.loading = false;
			}
			catch (error: any) {
				if (error.response && error.response.data && error.response.data.errors) {
					const apiErrors = error.response.data.errors;
					if (apiErrors.length > 0) {
						const errorMessage = apiErrors[0].detail || apiErrors[0].title;
						this.errors = errorMessage;
					}
				}
				else {
					this.$state.errors = ['An error occurred. Please try again later.'];
				}
				this.loading = false;
			}
		},
		async verifyTwoFa(credentials: ILoginInput, code: string) {
			const { $api } = useNuxtApp();
			this.loading = true;
			const token = useCookie<string>('token');
			const is_authenticated = useCookie<boolean>('is_authenticated');
			try {
				const response = await $api.auth.verify2fa(credentials, this.twoFaToken, code);
				if (response?.data.token) {
					token.value = response.data.token;
					is_authenticated.value = true;
					this.authenticated = true;
				}
				this.loading = false;
			}
			catch (error: any) {
				this.$state.errors = ['An error occurred. Please try again later.'];
				console.log(error);
			}
			this.loading = false;
		},

		async getProvider() {

		},
		logOut() {
			const token = useCookie('token');
			const is_authenticated = useCookie<boolean>('is_authenticated');
			this.authenticated = false;
			token.value = null;
			is_authenticated.value = false;
		},
	},
});
