<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center justify-between">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							API Tokens
						</h3>
						<button
							:class="primaryButtonClass"
							type="button"
							@click="openForm()"
						>
							<span class="flex items-center gap-x-2">
								<IconPlus :size="16" />
								Add API Token
							</span>
						</button>
					</div>
					<div class="mt-4 flow-root overflow-clip border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg">
						<div class="overflow-auto">
							<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead class="bg-gray-50 dark:bg-gray-950">
									<tr>
										<th
											v-for="header in HEADERS"
											:key="header"
											class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
											scope="col"
										>
											{{ header }}
										</th>
										<th class="w-16" />
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
									<tr
										v-for="token in tokens"
										:key="token.prefix"
										class="text-sm text-gray-800 dark:text-white"
									>
										<td :class="cellClass">
											<button
												class="flex items-center gap-2"
												type="button"
												:title="copiedPrefix === token.prefix ? 'It\'s in your clipboard' : 'Copy to clipboard'"
												@click="copyPrefix(token.prefix)"
											>
												{{ token.prefix }}
												<span class="rounded-full bg-blue-50 p-1 primary-text">
													<IconCheck
														v-if="copiedPrefix === token.prefix"
														:size="16"
													/>
													<IconCopy
														v-else
														:size="16"
													/>
												</span>
											</button>
										</td>
										<td :class="cellClass">
											{{ token.scope }}
										</td>
										<td :class="cellClass">
											{{ token.name }}
										</td>
										<td :class="cellClass">
											{{ formatUtc(token.created_at) }}
										</td>
										<td :class="cellClass">
											{{ formatUtc(token.expires_at) }}
										</td>
										<td class="pr-4 text-right sm:pr-6">
											<DropdownMenu>
												<DropdownMenuTrigger as-child>
													<button
														class="inline-flex h-8 w-8 items-center justify-center rounded-full p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 focus:outline-none"
														type="button"
														title="Actions"
													>
														<IconDots :size="20" />
													</button>
												</DropdownMenuTrigger>
												<DropdownMenuContent class="w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-950">
													<DropdownMenuItem
														:class="menuItemClass"
														@click="openForm(token)"
													>
														<IconPencil class="mr-2 h-4 w-4" />
														<span>Edit</span>
													</DropdownMenuItem>
													<DropdownMenuItem
														:class="menuItemClass"
														@click="deleting = token"
													>
														<IconTrash class="mr-2 h-4 w-4" />
														<span>Delete</span>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</td>
									</tr>
									<tr v-if="!tokens.length">
										<td
											:colspan="HEADERS.length + 1"
											class="h-[210px] text-center text-sm text-gray-800 dark:text-gray-200"
										>
											{{ pending ? 'Loading...' : 'No results' }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>

		<ActionDialog
			v-model="formOpen"
			:title="editing ? 'Edit APIToken' : 'New APIToken'"
			size="sm:w-[560px]"
		>
			<div class="space-y-4 p-6">
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="tokenExpiration"
					>Token Expiration date (UTC)</label>
					<input
						id="tokenExpiration"
						v-model="form.expiresOn"
						:class="inputClass"
						type="date"
					>
				</div>
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="tokenName"
					>Token Name (required)</label>
					<input
						id="tokenName"
						v-model="form.name"
						:class="inputClass"
						maxlength="250"
						type="text"
						autocomplete="off"
					>
					<p
						v-if="submitted && errors.name"
						:class="errorClass"
					>
						{{ errors.name }}
					</p>
				</div>
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="tokenScope"
					>Scope</label>
					<select
						id="tokenScope"
						v-model="form.scope"
						:class="inputClass"
						:disabled="!!editing"
					>
						<option
							v-for="scope in SCOPES"
							:key="scope.value"
							:value="scope.value"
						>
							{{ scope.text }}
						</option>
					</select>
					<p
						v-if="submitted && errors.scope"
						:class="errorClass"
					>
						{{ errors.scope }}
					</p>
				</div>
			</div>
			<template #actions>
				<button
					class="ml-2 inline-flex items-center gap-2 rounded bg-primary px-5 py-2 text-sm text-white hover:opacity-80 disabled:opacity-50"
					:disabled="saving"
					type="button"
					@click="save"
				>
					<IconLoader2
						v-if="saving"
						:size="16"
						class="animate-spin"
					/>
					Save
				</button>
			</template>
		</ActionDialog>

		<ActionDialog
			:model-value="!!deleting"
			title="Are you sure?"
			size="sm:w-[480px]"
			@update:model-value="deleting = null"
		>
			<div class="space-y-4 p-6 text-sm">
				<p>A previously generated token will be deleted. Clients and scripts might stop working. Do you want to continue?</p>
				<p class="flex items-center gap-2 rounded bg-red-50 p-3 text-red-700">
					<IconAlertTriangle :size="18" />
					Be careful! This can not be undone!
				</p>
			</div>
			<template #actions>
				<button
					class="ml-2 rounded bg-red-600 px-4 py-2 text-sm text-white hover:opacity-80"
					type="button"
					@click="remove"
				>
					Yes, delete token
				</button>
			</template>
		</ActionDialog>

		<ActionDialog
			:model-value="!!newToken"
			title="API Token"
			size="sm:w-[560px]"
			@update:model-value="newToken = ''"
		>
			<div class="space-y-4 p-6 text-sm">
				<p class="flex items-center gap-2 rounded bg-sky-50 p-3 text-sky-800">
					<IconInfoCircle :size="18" />
					Save your token in a secure place.
				</p>
				<p class="flex items-center gap-2 rounded bg-red-50 p-3 text-red-700">
					<IconAlertTriangle :size="18" />
					It's shown only once. If you lose the token, you must generate a new one.
				</p>
				<div class="flex items-center gap-2">
					<input
						:value="newToken"
						:class="inputClass"
						readonly
						type="text"
					>
					<button
						class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
						type="button"
						:title="tokenCopied ? 'It\'s in your clipboard' : 'Copy to clipboard'"
						@click="copyToken"
					>
						<IconCheck
							v-if="tokenCopied"
							:size="16"
						/>
						<IconCopy
							v-else
							:size="16"
						/>
					</button>
				</div>
			</div>
		</ActionDialog>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconAlertTriangle, IconCheck, IconCopy, IconDots, IconInfoCircle, IconLoader2, IconPencil, IconPlus, IconTrash } from '@tabler/icons-vue';
import { useClipboard } from '@vueuse/core';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { APIToken } from '~/types';

useHead({ title: 'API Tokens' });

const HEADERS = ['Prefix', 'Scope', 'Name', 'Created', 'Expires'];
const SCOPES = [
	{ text: 'Read only', value: 'read' },
	{ text: 'Read / Write', value: 'read+write' },
	{ text: 'Clients Auth', value: 'clients-auth' },
];
const cellClass = 'whitespace-nowrap py-3.5 pl-4 pr-3 sm:pl-6';
const menuItemClass = 'group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-xs';
const labelClass = 'pb-1 pl-1 text-sm font-normal text-theme-label';
const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 disabled:opacity-50 dark:text-gray-100 dark:[&>option]:bg-gray-900 sm:text-sm';
const errorClass = 'mt-1 pl-1 text-sm text-red-600';
const primaryButtonClass = 'rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-800';

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const { copy } = useClipboard({ legacy: true });

const { data: response, pending, refresh } = useLazyAsyncData('api-tokens', () => $api.profile.apiTokens());
const tokens = computed(() => response.value?.data || []);

const formOpen = ref(false);
const saving = ref(false);
const submitted = ref(false);
const editing = ref<APIToken | null>(null);
const deleting = ref<APIToken | null>(null);
const newToken = ref('');
const tokenCopied = ref(false);
const copiedPrefix = ref<string | null>(null);
const form = reactive({ name: '', scope: '', expiresOn: '' });

const errors = computed(() => ({
	name: form.name.trim() ? '' : 'API Token Name is a required field',
	scope: form.scope ? '' : 'Please select the scope of this APIToken',
}));

const formatUtc = (date?: string | null) => {
	const parsed = date ? new Date(date) : null;
	return parsed && !Number.isNaN(parsed.getTime()) ? `${parsed.toISOString().slice(0, 16).replace('T', ' ')} UTC` : '-';
};

const openForm = (token?: APIToken) => {
	editing.value = token || null;
	Object.assign(form, {
		name: token?.name || '',
		scope: token?.scope || '',
		expiresOn: token?.expires_at ? new Date(token.expires_at).toISOString().slice(0, 10) : '',
	});
	submitted.value = false;
	formOpen.value = true;
};

const save = async () => {
	submitted.value = true;
	if (errors.value.name || errors.value.scope) {
		return;
	}
	// The date is picked as a UTC day, so the token expires at its start in UTC
	const payload = {
		name: form.name.trim(),
		scope: form.scope,
		expires_at: form.expiresOn ? `${form.expiresOn}T00:00:00+00:00` : undefined,
	};
	saving.value = true;
	try {
		if (editing.value) {
			await $api.profile.update({ ...payload, prefix: editing.value.prefix });
			snackbar.add({ type: 'success', text: 'APIToken updated successfully' });
		}
		else {
			const { data } = await $api.profile.create(payload);
			snackbar.add({ type: 'success', text: 'APIToken created successfully' });
			tokenCopied.value = false;
			newToken.value = data?.token || '';
		}
		formOpen.value = false;
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'The API token could not be saved.' });
	}
	finally {
		saving.value = false;
	}
};

const remove = async () => {
	const token = deleting.value;
	deleting.value = null;
	if (!token) {
		return;
	}
	try {
		await $api.profile.delete(token.prefix);
		snackbar.add({ type: 'success', text: 'Item deleted successfully' });
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'The API token could not be deleted.' });
	}
};

const copyPrefix = async (prefix: string) => {
	await copy(prefix);
	copiedPrefix.value = prefix;
	setTimeout(() => {
		copiedPrefix.value = null;
	}, 1000);
};

const copyToken = async () => {
	await copy(newToken.value);
	tokenCopied.value = true;
};
</script>
