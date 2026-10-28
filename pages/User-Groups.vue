<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							User groups
						</h3>
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
										v-for="group in groups"
										:key="group.name"
										class="text-sm text-gray-800 dark:text-white"
									>
										<td class="whitespace-nowrap py-3.5 pl-4 pr-3 sm:pl-6">
											{{ group.name }}
										</td>
										<td class="py-3.5 pl-4 pr-3 sm:pl-6">
											<div
												v-if="grantedPermissions(group).length"
												class="flex flex-wrap items-center gap-1"
											>
												<span
													v-for="permission in grantedPermissions(group)"
													:key="permission"
													class="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
												>{{ permission }}</span>
											</div>
											<span v-else>-</span>
										</td>
										<td class="pr-4 text-right sm:pr-6">
											<button
												class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs primary-text hover:bg-primary-500 hover:bg-opacity-10"
												type="button"
												@click="openEditor(group)"
											>
												<IconPencil :size="16" />
												Edit
											</button>
										</td>
									</tr>
									<tr v-if="!groups.length">
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
					<p class="mt-3 px-1.5 py-5 text-sm text-gray-600 dark:text-gray-400">
						New user groups are created from the user administration. On conflicting permissions, authorization wins over the denial.
						<a
							class="primary-text hover:underline"
							href="https://kb.openrport.io/manage-users-and-permissions"
							target="_blank"
							rel="noopener"
						>Learn more</a>
					</p>
				</div>
			</div>
		</div>

		<ActionDialog
			v-model="editorOpen"
			title="Edit user group permissions"
			size="w-full max-w-3xl"
		>
			<div class="flex border-b border-gray-200 px-4 dark:border-gray-700">
				<button
					v-for="tab in tabs"
					:key="tab"
					:class="['-mb-px border-b-2 px-4 py-2 text-lg', activeTab === tab ? 'border-primary primary-text' : 'border-transparent hover:border-primary']"
					type="button"
					@click="activeTab = tab"
				>
					{{ tab }}
				</button>
			</div>
			<div
				v-if="editing"
				class="min-h-[320px] p-6 text-sm"
			>
				<template v-if="activeTab === 'Base'">
					<h4 class="font-bold">
						Base permissions
					</h4>
					<p class="py-2">
						User of group <span class="font-bold italic">{{ editing.name }}</span> will have permission to access the following functions
						<a
							class="primary-text underline"
							href="https://kb.openrport.io/manage-users-and-permissions"
							target="_blank"
							rel="noopener"
						>Read more</a>
					</p>
					<div class="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
						<label
							v-for="(_, permission) in permissions"
							:key="permission"
							class="flex cursor-pointer select-none items-center rounded px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							<input
								v-model="permissions[permission]"
								type="checkbox"
								class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
							>
							{{ permission }}
						</label>
					</div>
				</template>
				<template v-else>
					<h4 class="font-bold">
						{{ activeTab }} permissions
					</h4>
					<!-- The extended permissions only exist with the closed-source Rport-plus plugin; whatever is set is kept on save -->
					<p class="mt-4 flex items-center gap-2 rounded bg-sky-50 p-4 text-sky-800 dark:bg-sky-900/30 dark:text-sky-200">
						<IconInfoCircle :size="18" />
						This feature requires the Rport-plus plugin loaded.
					</p>
					<pre
						v-if="activeTab === 'Tunnels' && editing.tunnels_restricted"
						class="mt-4 overflow-auto rounded bg-gray-50 p-3 text-xs dark:bg-gray-950"
					>{{ JSON.stringify(editing.tunnels_restricted, null, 2) }}</pre>
					<pre
						v-if="activeTab === 'Commands' && editing.commands_restricted"
						class="mt-4 overflow-auto rounded bg-gray-50 p-3 text-xs dark:bg-gray-950"
					>{{ JSON.stringify(editing.commands_restricted, null, 2) }}</pre>
				</template>
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
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconInfoCircle, IconLoader2, IconPencil } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { Permissions, UserGroup } from '~/types';

type Tab = 'Base' | 'Tunnels' | 'Commands';

useHead({ title: 'User groups' });

const HEADERS = ['Name', 'Permissions'];

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const editorOpen = ref(false);
const saving = ref(false);
const activeTab = ref<Tab>('Base');
const editing = ref<UserGroup | null>(null);
const permissions = ref<Permissions>({} as Permissions);

const { data, pending, refresh } = useLazyAsyncData('user-groups', () => $api.userGroups.all());
const groups = computed(() => data.value || []);

const grantedPermissions = (group: UserGroup) => Object.entries(group.permissions || {})
	.filter(([, granted]) => granted)
	.map(([permission]) => permission);

// Like the reference, the extended tabs show when the server returns those fields
const tabs = computed<Tab[]>(() => editing.value?.tunnels_restricted !== undefined ? ['Base', 'Tunnels', 'Commands'] : ['Base']);

const openEditor = (group: UserGroup) => {
	editing.value = group;
	permissions.value = { ...group.permissions };
	activeTab.value = 'Base';
	editorOpen.value = true;
};

const save = async () => {
	if (!editing.value) {
		return;
	}
	saving.value = true;
	try {
		await $api.userGroups.update({ ...editing.value, permissions: permissions.value });
		snackbar.add({ type: 'success', text: `User group ${editing.value.name} updated successfully.` });
		editorOpen.value = false;
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'The user group could not be saved.' });
	}
	finally {
		saving.value = false;
	}
};
</script>
