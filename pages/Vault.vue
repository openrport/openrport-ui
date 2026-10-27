<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center justify-between">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							Vault
						</h3>
						<div
							v-if="badge"
							:class="['flex items-center gap-x-3 rounded-md p-4 uppercase', badge.class]"
						>
							<component
								:is="badge.icon"
								:size="20"
							/>
							<span>{{ badge.text }}</span>
						</div>
					</div>
					<div class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900">
						<div
							v-if="!loaded"
							class="flex justify-center p-8"
						>
							<IconLoader2
								:size="32"
								class="primary-text animate-spin"
							/>
						</div>
						<template v-else-if="unauthorized">
							<div class="flex items-center gap-x-3 p-6 uppercase text-red-700">
								<IconLock :size="20" />
								<span>User is not authorized to access the vault</span>
							</div>
						</template>
						<template v-else>
							<div class="px-4 py-4 sm:px-6">
								<p class="text-sm leading-6 text-gray-500">
									{{ subtitle }}
								</p>
							</div>
							<div class="px-4 py-5 sm:p-6">
								<div
									v-if="locked || !initialized"
									class="mb-4 flex w-full items-center"
								>
									<div class="relative flex w-full flex-col">
										<input
											id="vaultPassphrase"
											v-model="passphrase"
											:type="initialized ? 'password' : 'text'"
											:class="inputClass"
											placeholder=" "
											autocomplete="off"
											@keyup.enter="submit"
										>
										<label
											:class="labelClass"
											for="vaultPassphrase"
										>passphrase</label>
										<p
											v-if="errors.passphrase"
											class="mt-1 pl-1 text-xs text-red-600"
										>
											{{ errors.passphrase }}
										</p>
									</div>
									<button
										v-if="!initialized"
										class="ml-1 rounded-md bg-primary p-2 text-white hover:opacity-80"
										type="button"
										title="Generate a passphrase"
										@click="generatePassphrase"
									>
										<IconKey :size="20" />
									</button>
								</div>
								<div
									v-if="!initialized"
									class="mb-4 w-full"
								>
									<div class="relative flex w-full flex-col">
										<input
											id="vaultRepeatPassphrase"
											v-model="repeatPassphrase"
											type="text"
											:class="inputClass"
											placeholder=" "
											autocomplete="off"
										>
										<label
											:class="labelClass"
											for="vaultRepeatPassphrase"
										>Repeat passphrase</label>
										<p
											v-if="errors.repeatPassphrase"
											class="mt-1 pl-1 text-xs text-red-600"
										>
											{{ errors.repeatPassphrase }}
										</p>
									</div>
								</div>
								<div
									v-if="!initialized"
									class="mb-4 w-full rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800"
									role="alert"
								>
									Please, be aware that it's not possible to recover a lost passphrase. Store your passphrase safely and consider making clear text backups of your vault.
								</div>
								<p
									v-if="unlocked"
									class="mb-4 py-2 text-xs font-medium text-black opacity-60 dark:text-slate-200"
								>
									Please make sure that you know the passphrase to unlock the vault, before actively locking it. It's not possible to recover lost passphrases.
								</p>
								<div class="flex w-full items-center justify-end">
									<button
										:class="['flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80', unlocked ? 'bg-red-600' : 'bg-primary']"
										:disabled="submitting"
										type="button"
										@click="submit"
									>
										<IconLoader2
											v-if="submitting"
											:size="16"
											class="animate-spin"
										/>
										<component
											:is="action.icon"
											v-else
											:size="16"
										/>
										<span>{{ action.text }}</span>
									</button>
								</div>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconKey, IconLoader2, IconLock, IconLockOpen, IconShieldLock } from '@tabler/icons-vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import { randomPassword } from '~/lib/utils';
import type { VaultAdminStatus } from '~/types';

useHead({ title: 'Vault' });

const inputClass = 'h-14 primary input-text peer block w-full rounded bg-transparent text-theme-inverted shadow-sm focus:border-1 focus:outline-0 focus:ring-0 sm:text-sm';
const labelClass = 'absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform bg-theme px-1 text-sm font-normal text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 peer-focus:text-primary';

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const loaded = ref(false);
const unauthorized = ref(false);
const admin = ref<VaultAdminStatus>({ init: '', status: '' });
const passphrase = ref('');
const repeatPassphrase = ref('');
const errors = ref<{ passphrase?: string; repeatPassphrase?: string }>({});
const submitting = ref(false);

const initialized = computed(() => admin.value.init === 'setup-completed');
const locked = computed(() => admin.value.status === 'locked');
const unlocked = computed(() => admin.value.status === 'unlocked');

const subtitle = computed(() => {
	if (!initialized.value) {
		return 'Initialize the vault by setting a passphrase';
	}
	return locked.value ? 'Enter the passphrase to unlock the vault' : 'Users can currently access the vault\'s content';
});

const badge = computed(() => {
	if (!loaded.value) {
		return null;
	}
	if (unauthorized.value || (initialized.value && locked.value)) {
		return { text: 'Locked', icon: IconLock, class: 'bg-red-50 text-red-700' };
	}
	if (!initialized.value) {
		return { text: 'Needs Initialization', icon: IconShieldLock, class: 'bg-orange-50 text-orange-700' };
	}
	return { text: 'Unlocked', icon: IconLockOpen, class: 'bg-green-50 text-green-700' };
});

const action = computed(() => {
	if (!initialized.value) {
		return { text: 'Initialize vault', icon: IconShieldLock };
	}
	return locked.value ? { text: 'Unlock vault', icon: IconLockOpen } : { text: 'Lock vault', icon: IconLock };
});

const loadStatus = async () => {
	try {
		admin.value = (await $api.vaultAdmin.status()).data;
	}
	catch (error) {
		unauthorized.value = true;
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Vault status could not be loaded.' });
	}
	finally {
		loaded.value = true;
	}
};

// Same 32 character suggestion as the reference when the vault is not initialized yet
const generatePassphrase = () => {
	passphrase.value = randomPassword(32);
	repeatPassphrase.value = passphrase.value;
};

const validate = () => {
	errors.value = {};
	if ((locked.value || !initialized.value) && !passphrase.value) {
		errors.value.passphrase = 'passphrase is required';
	}
	if (!initialized.value && !repeatPassphrase.value) {
		errors.value.repeatPassphrase = 'Repeat passphrase is required';
	}
	else if (!initialized.value && repeatPassphrase.value !== passphrase.value) {
		errors.value.repeatPassphrase = 'Passphrases do not match';
	}
	return !Object.keys(errors.value).length;
};

const submit = async () => {
	if (submitting.value || !validate()) {
		return;
	}
	submitting.value = true;
	try {
		if (!initialized.value) {
			await $api.vaultAdmin.init(passphrase.value);
		}
		else if (locked.value) {
			await $api.vaultAdmin.unlock(passphrase.value);
		}
		else {
			await $api.vaultAdmin.lock();
		}
		passphrase.value = '';
		repeatPassphrase.value = '';
		await loadStatus();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'The vault request failed.' });
	}
	finally {
		submitting.value = false;
	}
};

onMounted(async () => {
	await loadStatus();
	if (!initialized.value && !unauthorized.value) {
		generatePassphrase();
	}
});
</script>
