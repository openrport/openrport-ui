<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center justify-between">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							Users
						</h3>
						<button
							class="rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-800"
							type="button"
							@click="openForm(null)"
						>
							<span class="flex items-center gap-x-2">
								<IconPlus :size="16" />
								Add user
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
										v-for="user in users"
										:key="user.username"
										class="text-sm text-gray-800 dark:text-white"
									>
										<td :class="cellClass">
											{{ user.username }}
										</td>
										<td :class="cellClass">
											<div class="flex flex-wrap items-center gap-1">
												<span
													v-for="group in user.groups"
													:key="group"
													class="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
												>{{ group }}</span>
											</div>
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
												<DropdownMenuContent class="w-44 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-950">
													<DropdownMenuItem
														:class="menuItemClass"
														@click="openForm(user)"
													>
														<IconPencil class="mr-2 h-4 w-4" />
														<span>Edit</span>
													</DropdownMenuItem>
													<DropdownMenuItem
														:class="menuItemClass"
														@click="copyUsername(user.username)"
													>
														<IconCopy class="mr-2 h-4 w-4" />
														<span>Copy username</span>
													</DropdownMenuItem>
													<DropdownMenuItem
														:class="menuItemClass"
														@click="openSessions(user.username)"
													>
														<IconDevices class="mr-2 h-4 w-4" />
														<span>Manage Sessions</span>
													</DropdownMenuItem>
													<DropdownMenuItem
														:class="menuItemClass"
														@click="deleting = user"
													>
														<IconTrash class="mr-2 h-4 w-4" />
														<span>Delete</span>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</td>
									</tr>
									<tr v-if="!users.length">
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
						<Pagination
							:current-page-item-count="users.length"
							:total-items="total"
							:items-per-page="ITEMS_PER_PAGE"
							:page="page"
							@previous="page--"
							@next="page++"
						/>
					</div>
				</div>
			</div>
		</div>

		<UserFormDialog
			v-model="formOpen"
			:user="editing"
			@saved="onSaved"
		/>

		<UserSessionsDialog
			v-model="sessionsOpen"
			:username="sessionsUser"
		/>

		<ActionDialog
			:model-value="!!deleting"
			title="Are you sure?"
			size="sm:w-[480px]"
			@update:model-value="deleting = null"
		>
			<p class="p-6 text-sm">
				Are you sure you want to delete the user {{ deleting?.username }}?
			</p>
			<template #actions>
				<button
					class="ml-2 rounded bg-primary px-4 py-2 text-sm text-white hover:opacity-80"
					type="button"
					@click="remove"
				>
					Yes
				</button>
			</template>
		</ActionDialog>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconCopy, IconDevices, IconDots, IconPencil, IconPlus, IconTrash } from '@tabler/icons-vue';
import { useClipboard } from '@vueuse/core';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { Pagination } from '~/components/ui/pagination';
import UserFormDialog from '~/components/users/UserFormDialog.vue';
import UserSessionsDialog from '~/components/users/UserSessionsDialog.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { User } from '~/types';

useHead({ title: 'Users' });

const ITEMS_PER_PAGE = 20;
const HEADERS = ['User', 'Groups'];
const cellClass = 'whitespace-nowrap py-3.5 pl-4 pr-3 sm:pl-6';
const menuItemClass = 'group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-xs';

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const { copy } = useClipboard({ legacy: true });
const page = ref(0);
const formOpen = ref(false);
const editing = ref<User | null>(null);
const sessionsOpen = ref(false);
const sessionsUser = ref('');
const deleting = ref<User | null>(null);

const { data: response, pending, refresh } = useLazyAsyncData(
	'users',
	() => $api.users.list(page.value * ITEMS_PER_PAGE, ITEMS_PER_PAGE),
	{ watch: [page] },
);
const users = computed(() => response.value?.data || []);
const total = computed(() => response.value?.meta?.count ?? users.value.length);

// Closing first makes the dialog reload its form even if it was left open
const openForm = async (user: User | null) => {
	formOpen.value = false;
	await nextTick();
	editing.value = user;
	formOpen.value = true;
};

const openSessions = (username: string) => {
	sessionsUser.value = username;
	sessionsOpen.value = true;
};

const copyUsername = async (username: string) => {
	await copy(username);
	snackbar.add({ type: 'success', text: 'Username copied to clipboard' });
};

const onSaved = async (message: string) => {
	snackbar.add({ type: 'success', text: message });
	await refresh();
};

const remove = async () => {
	const user = deleting.value;
	deleting.value = null;
	if (!user) {
		return;
	}
	try {
		await $api.users.delete(user.username);
		snackbar.add({ type: 'success', text: `User ${user.username} deleted successfully.` });
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'The user could not be deleted.' });
	}
};
</script>
