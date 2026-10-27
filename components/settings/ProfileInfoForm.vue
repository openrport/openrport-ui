<template>
	<form
		novalidate
		@submit.prevent="save"
	>
		<div class="relative z-20 flex h-16 items-center justify-between">
			<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
				Profile
			</h3>
			<button
				:class="primaryButtonClass"
				type="button"
				@click="reload"
			>
				<span class="flex items-center justify-center gap-x-2">
					<IconRefresh
						:size="16"
						:class="{ 'animate-spin': loading }"
					/>
					Reload
				</span>
			</button>
		</div>
		<div class="mt-4 flex flex-col gap-y-8">
			<div :class="cardClass">
				<div class="px-4 py-4 sm:px-6">
					<h3 :class="cardTitleClass">
						Update profile info
					</h3>
				</div>
				<div class="px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
					<div class="flex flex-col opacity-50">
						<label
							:class="labelClass"
							for="profileUsername"
						>Username</label>
						<input
							id="profileUsername"
							:value="form.username"
							:class="inputClass"
							readonly
							type="text"
						>
						<p class="mt-1 pl-1 text-sm text-theme-inverted">
							The username field is not editable
						</p>
					</div>
					<div
						v-if="showTwoFaSendTo"
						class="mt-4 flex flex-col"
					>
						<label
							:class="labelClass"
							for="profileTwoFaSendTo"
						>Two-factor send to</label>
						<input
							id="profileTwoFaSendTo"
							v-model="form.twoFaSendTo"
							:class="inputClass"
							type="text"
							autocomplete="off"
						>
						<p
							v-if="submitted && errors.twoFaSendTo"
							:class="errorClass"
						>
							{{ errors.twoFaSendTo }}
						</p>
					</div>
					<label class="flex cursor-pointer select-none items-center py-6 text-sm text-theme-label">
						<input
							v-model="changePassword"
							type="checkbox"
							class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
						>
						Change password
					</label>
					<!-- The reference only offers Save inside the password card, so a 2FA address change alone could not be saved -->
					<div
						v-if="showTwoFaSendTo && !changePassword"
						class="flex justify-end"
					>
						<button
							:class="primaryButtonClass"
							:disabled="saving"
							type="submit"
						>
							<span class="flex items-center gap-2">
								<IconDeviceFloppy :size="16" />
								Save
							</span>
						</button>
					</div>
				</div>
			</div>
			<div
				v-if="changePassword"
				:class="cardClass"
			>
				<div class="px-4 py-4 sm:px-6">
					<h3 :class="cardTitleClass">
						Change password
					</h3>
				</div>
				<div class="space-y-4 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
					<div
						v-for="field in PASSWORD_FIELDS"
						:key="field.key"
						class="flex flex-col"
					>
						<label
							:class="labelClass"
							:for="`profile-${field.key}`"
						>{{ field.label }}</label>
						<input
							:id="`profile-${field.key}`"
							v-model="form[field.key]"
							:class="inputClass"
							:autocomplete="field.autocomplete"
							type="password"
						>
						<p
							v-if="submitted && errors[field.key]"
							:class="errorClass"
						>
							{{ errors[field.key] }}
						</p>
					</div>
					<div class="flex justify-end">
						<button
							:class="primaryButtonClass"
							:disabled="saving"
							type="submit"
						>
							<span class="flex items-center gap-2">
								<IconLoader2
									v-if="saving"
									:size="16"
									class="animate-spin"
								/>
								<IconDeviceFloppy
									v-else
									:size="16"
								/>
								Save
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
import { IconDeviceFloppy, IconLoader2, IconRefresh } from '@tabler/icons-vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { ProfileUpdatePayload } from '~/types';

type PasswordField = 'currentPassword' | 'newPassword' | 'reTypedNewPassword';

const PASSWORD_FIELDS: Array<{ key: PasswordField; label: string; autocomplete: string }> = [
	{ key: 'currentPassword', label: 'Old password', autocomplete: 'current-password' },
	{ key: 'newPassword', label: 'New password', autocomplete: 'new-password' },
	{ key: 'reTypedNewPassword', label: 'Confirm new password', autocomplete: 'new-password' },
];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cardClass = 'flex flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900';
const cardTitleClass = 'text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50';
const labelClass = 'pb-1 pl-1 text-sm font-normal text-theme-label';
const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 dark:text-gray-100 dark:[&>option]:bg-gray-900 sm:text-sm';
const errorClass = 'mt-1 pl-1 text-sm text-red-600';
const primaryButtonClass = 'rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-800 disabled:opacity-50';

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const statusStore = useStatusStore();
const { status } = storeToRefs(statusStore);

const loading = ref(false);
const saving = ref(false);
const submitted = ref(false);
const changePassword = ref(false);
const form = reactive({ username: '', twoFaSendTo: '', currentPassword: '', newPassword: '', reTypedNewPassword: '' });
// Errors returned by the server, shown on the matching field
const serverErrors = ref<Record<string, string>>({});

// The send-to address is only asked for when 2FA codes go by email or another delivery method, not the TOTP app
const deliveryMethod = computed(() => status.value?.two_fa_delivery_method || '');
const showTwoFaSendTo = computed(() => !!status.value?.two_fa_enabled && !!deliveryMethod.value && deliveryMethod.value !== 'totp_authenticator_app');

const errors = computed(() => {
	const found: Record<string, string> = {};
	if (showTwoFaSendTo.value) {
		if (!form.twoFaSendTo) {
			found.twoFaSendTo = 'The two-factor send to field is required';
		}
		else if (deliveryMethod.value === 'email' && !EMAIL_PATTERN.test(form.twoFaSendTo)) {
			found.twoFaSendTo = 'The two-factor send to field must be a valid email address';
		}
	}
	if (changePassword.value) {
		if (!form.currentPassword) {
			found.currentPassword = 'The old password field is required';
		}
		if (!form.newPassword) {
			found.newPassword = 'The new password field is required';
		}
		if (!form.reTypedNewPassword) {
			found.reTypedNewPassword = 'The confirm new password field is required';
		}
		else if (form.reTypedNewPassword !== form.newPassword) {
			found.reTypedNewPassword = 'The confirm new password does not match';
		}
	}
	return { ...found, ...Object.fromEntries(Object.entries(serverErrors.value).filter(([key]) => !found[key])) };
});

watch(() => ({ ...form }), () => {
	serverErrors.value = {};
});

watch(changePassword, () => {
	Object.assign(form, { currentPassword: '', newPassword: '', reTypedNewPassword: '' });
	submitted.value = false;
});

const load = async () => {
	loading.value = true;
	try {
		const [profile] = await Promise.all([$api.profile.get(), statusStore.loadStatus()]);
		form.username = profile?.username ?? '';
		form.twoFaSendTo = profile?.two_fa_send_to ?? '';
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Your profile could not be loaded.' });
	}
	finally {
		loading.value = false;
	}
};

const reload = async () => {
	await load();
	changePassword.value = false;
	snackbar.add({ type: 'success', text: 'Your profile has been reloaded' });
};

const save = async () => {
	submitted.value = true;
	if (Object.keys(errors.value).length) {
		snackbar.add({ type: 'error', text: 'Please check all fields for errors' });
		return;
	}
	const payload: ProfileUpdatePayload = { username: form.username, two_fa_send_to: form.twoFaSendTo };
	if (changePassword.value) {
		payload.password = form.newPassword;
		payload.old_password = form.currentPassword;
	}
	saving.value = true;
	try {
		await $api.profile.updateMe(payload);
		snackbar.add({ type: 'success', text: 'Your profile has been saved' });
	}
	catch (error) {
		const message = apiErrorText(error) || 'Your profile could not be saved.';
		if (message === 'Incorrect old password.') {
			serverErrors.value = { currentPassword: message };
		}
		else if (message.includes('two_fa_send_to')) {
			serverErrors.value = { twoFaSendTo: message };
		}
		else {
			serverErrors.value = { newPassword: message };
		}
	}
	finally {
		saving.value = false;
	}
};

onMounted(load);
</script>
