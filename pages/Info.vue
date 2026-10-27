<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center justify-between">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							Info
						</h3>
						<button
							class="rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-800"
							type="button"
							@click="reload"
						>
							<span class="flex items-center gap-x-2">
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
							<h3 :class="titleClass">
								Server Api
							</h3>
							<dl class="mt-6 divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
								<div
									v-for="row in serverRows"
									:key="row.key"
									:class="rowClass"
								>
									<dt :class="termClass">
										{{ row.text }}
									</dt>
									<dd :class="valueClass">
										<span
											v-if="row.key === 'clientsAuthMode'"
											:class="badgeClass"
										>
											<IconPencil
												v-if="row.value === 'Read Write'"
												:size="16"
											/>
											<IconEye
												v-else
												:size="16"
											/>
											{{ row.value }}
										</span>
										<span
											v-else-if="row.key === 'usersAuthSource'"
											:class="badgeClass"
										>{{ row.value }}</span>
										<span
											v-else-if="row.key === 'twoFaEnabled'"
											:class="['inline-flex items-center rounded-md px-2 py-1 ring-1 ring-inset', row.value ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-red-50 text-red-700 ring-red-600/20']"
											:title="row.value ? 'Enabled' : 'Disabled'"
										>
											<IconCircleCheck
												v-if="row.value"
												:size="18"
											/>
											<IconCircleX
												v-else
												:size="18"
											/>
										</span>
										<template v-else>
											{{ row.value ?? '-' }}
										</template>
									</dd>
								</div>
							</dl>
						</div>
						<div :class="cardClass">
							<h3 :class="titleClass">
								Frontend
							</h3>
							<dl class="mt-6 divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
								<div :class="rowClass">
									<dt :class="termClass">
										Version
									</dt>
									<dd :class="valueClass">
										{{ config.public.appVersion }}
									</dd>
								</div>
								<div :class="rowClass">
									<dt :class="termClass">
										Download the latest version of VNC® Viewer
									</dt>
									<dd :class="valueClass">
										<a
											class="primary-text hover:underline"
											href="https://www.realvnc.com/en/connect/download/viewer/"
											target="_blank"
											rel="noopener"
										>go to downloads</a>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconCircleCheck, IconCircleX, IconEye, IconPencil, IconRefresh } from '@tabler/icons-vue';

useHead({ title: 'Info' });

const cardClass = 'rounded-lg bg-white px-4 py-5 shadow dark:bg-gray-900 sm:p-6';
const titleClass = 'text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50';
const rowClass = 'px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0';
const termClass = 'text-sm font-medium leading-6 text-gray-950 dark:text-white';
const valueClass = 'mt-1 text-sm leading-6 text-gray-700 dark:text-gray-400 sm:col-span-2 sm:mt-0';
const badgeClass = 'inline-flex items-center gap-x-1.5 rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-800 ring-1 ring-inset ring-primary-600/20 dark:bg-primary-500/10 dark:text-primary-400';

const config = useRuntimeConfig();
const snackbar = useSnackbar();
const statusStore = useStatusStore();
const { status } = storeToRefs(statusStore);
const loading = ref(false);

// The reference labels the auth source "Clients Auth Mode" too; it is shown with its own name here
const serverRows = computed(() => [
	{ key: 'clientsAuthMode', text: 'Clients Auth Mode', value: status.value?.clients_auth_mode },
	{ key: 'clientsAuthSource', text: 'Clients Auth Source', value: status.value?.clients_auth_source },
	{ key: 'clientsConnected', text: 'Clients connected', value: status.value?.clients_connected },
	{ key: 'clientsDisconnected', text: 'Clients disconnected', value: status.value?.clients_disconnected },
	{ key: 'usersAuthSource', text: 'Users Auth Source', value: status.value?.users_auth_source },
	{ key: 'twoFaEnabled', text: 'Two-factor authentication enabled', value: !!status.value?.two_fa_enabled },
	{
		key: 'twoFaDeliveryMethod',
		text: 'Two-factor authentication delivery method',
		value: status.value?.two_fa_delivery_method === 'totp_authenticator_app' ? 'TOTP Authenticator' : status.value?.two_fa_delivery_method || '-',
	},
	{ key: 'fingerprint', text: 'Fingerprint', value: status.value?.fingerprint },
	{ key: 'version', text: 'Version', value: status.value?.version },
]);

const load = async () => {
	loading.value = true;
	await statusStore.loadStatus();
	loading.value = false;
};

const reload = async () => {
	await load();
	snackbar.add({ type: 'success', text: 'Server info reloaded' });
};

onMounted(load);
</script>
