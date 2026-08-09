import { defineStore } from 'pinia';
import type { ILoginInput, TwoFa } from '~/types';

export const useTokenStore = defineStore('token', {
	state: () => ({
		authenticated: false,
		showTwoFa: false,
		loading: false,
		errors: [] as Array<string>,
		two_fa: {} as TwoFa,
		twoFaToken: null as string | null,
	}),
	actions: {
		async getLoginToken(credentials: ILoginInput) {
			const { $api } = useNuxtApp();
			this.loading = true;
			try {
				const response = await $api.auth.login(credentials);
				if (response?.data?.two_fa !== null) {
					this.twoFaToken = response.data.token;
					this.two_fa = response.data.two_fa;
					this.showTwoFa = true;
				} else {
					this.authenticated = true;
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
			if (!this.twoFaToken) {
				this.$state.errors = ['No verification token found. Please sign in again.'];
				this.loading = false;
				return;
			}
			try {
				const response = await $api.auth.verify2fa(credentials, this.twoFaToken, code);
				if (response?.data.token) {
					this.authenticated = true;
					this.showTwoFa = false;
					this.twoFaToken = null;
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
		async logOut() {
			const { $api } = useNuxtApp();
			try {
				await $api.auth.logout();
			}
			catch (_error: any) {
				// keep local logout state even if server session is already gone
			}
			this.authenticated = false;
			this.showTwoFa = false;
			this.twoFaToken = null;
		},
	},
});
