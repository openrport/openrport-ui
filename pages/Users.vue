<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center justify-between">
						<div class="">
							<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
								Users
							</h3>
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
							</p>
						</div>
						<div class="flex-1" />
						<div class="ml-2 flex-shrink-0">
							<button
								class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								type="button"
								@click.prevent="openAddUserModal"
							>
								<span class="flex items-center justify-center gap-x-2">
									Add user</span>
							</button>
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
							</p>
						</div>
					</div>
					<div class="relative z-10 w-full">
						<div
							class="flow-root overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg"
						>
							<div class="overflow-auto relative z-10 -mb-2">
								<div class="inline-block min-w-full align-middle">
									<div class="sm:rounded-t-lg overflow-hidden">
										<div>
											<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
												<thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
													<tr>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button disabled="">
																<span>User</span>
															</button>
														</th>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button disabled="">
																<span>Groups</span>
															</button>
														</th>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button disabled="">
																<span />
															</button>
														</th>
														<th
															class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6"
														/>
													</tr>
												</thead>
												<tbody
													class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900"
												>
													<tr
														v-for="user in users"
														:key="user.username"
														class="border-t-1 group relative border-gray-200 transition-all duration-300"
													>
														<td
															class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
														>
															{{ user.username }}
														</td>
														<td
															class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
														>
															<div class="flex items-center space-x-0.5">
																<span
																	v-for="(group, key) in user.groups"
																	:key="key"
																	class="bg-vtd-primary-50 dark:bg-vtd-primary-500/10 text-vtd-primary-700 dark:text-vtd-primary-400 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"
																><span />
																	<span>{{ group }}
																	</span>
																</span>
															</div>
														</td>
														<td
															class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"
														/>
														<td
															class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal"
														>
															<div
																data-headlessui-state=""
																class="text-blue-600 hover:text-blue-900"
															>
																<div>
																	<DropdownMenu>
																		<DropdownMenuTrigger as-child>
																			<button>
																				<div
																					class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none"
																				>
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 24 24"
																						class="icon"
																					>
																						<path
																							fill="currentColor"
																							d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
																						/>
																					</svg>
																				</div>
																			</button>
																		</DropdownMenuTrigger>
																		<div class="z-20">
																			<div
																				class="fixed z-30"
																				style="top: 316px"
																			>
																				<DropdownMenuContent
																					class="absolute -right-8 -top-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-950"
																				>
																					<div class="px-1 py-1">
																						<DropdownMenuItem
																							class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400"
																						>
																							<Pencil
																								class="mr-2 h-4 w-4"
																							/>
																							<span>Edit</span>
																						</DropdownMenuItem>
																					</div>
																					<div class="px-1 py-1">
																						<DropdownMenuItem
																							class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400"
																							@click="copy(user.username)"
																						>
																							<Copy
																								class="mr-2 h-4 w-4"
																							/>
																							<span>Copy username</span>
																						</DropdownMenuItem>
																					</div>
																					<div class="px-1 py-1">
																						<DropdownMenuItem
																							class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400"
																							@click="openManageSessionModal(user)"
																						>
																							<Laptop
																								class="mr-2 h-4 w-4"
																							/>
																							<span>Manage Session</span>
																						</DropdownMenuItem>
																					</div>
																					<DropdownMenuSeparator />
																					<div class="px-1 py-1">
																						<DropdownMenuItem
																							class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400"
																							@click="triggerDelete(user)"
																						>
																							<Trash2
																								class="mr-2 h-4 w-4"
																							/>
																							<span>Delete</span>
																						</DropdownMenuItem>
																					</div>
																				</DropdownMenuContent>
																			</div>
																		</div>
																	</DropdownMenu>
																</div>
																<div class="z-20">
																	<div
																		style="top: 208px;"
																		class="fixed z-30"
																	/>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<Pagination
								:current-page-item-count="users?.length"
								:page="0"
								:total-items="users?.length"
							/>
						</div>
						<div class="h-12 w-full" />
					</div>
				</div>
			</div>
		</div>
		<AddUser
			ref="addUserModal"
			:groups="userGroups"
			@save="createUser"
		/>
		<!-- <Confirm
			:is_active="delConfirm"
			@close="closeModal"
			@save="deleteUser"
		>
			<div>Are you sure you want to delete the user {{ activeUser?.username }}?</div>
		</Confirm> -->
		<Modal
			v-model="delConfirm"
			title="Please confirm!"
			ok-text="Ok"
			cancel-text="Cancel"
			:show-cancel="true"
			@ok="deleteUser(activeUser?.username)"
		>
			<div class="absolute inset-0 flex h-full min-h-[240px] flex-col items-center justify-center p-8 text-center">
				<div>Do you want to delete the user {{ activeUser?.username }}?</div>
			</div>
		</Modal>
		<ManageSessionModal
			ref="manageSessionModal"
			:username="activeUser"
			:user-sessions="userSessions"
		/>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { Pencil, Copy, Laptop, Trash2 } from 'lucide-vue-next';
import { useClipboard } from '@vueuse/core';
import AddUser from '@/components/users/AddUser.vue';
import type { UserPayload, UserSession } from '~/types';
import Modal from '~/components/Modal.vue';
import ManageSessionModal from '~/components/users/ManageSessionModal.vue';
import { Pagination } from '~/components/ui/pagination';

const { copy } = useClipboard();
const { $api } = useNuxtApp();
const snackbar = useSnackbar();

const { data: users, pending, refresh } = useLazyAsyncData('users', () => $api.users.getAll());
const { data: userGroups } = useLazyAsyncData(('user-groups'), () => $api.userGroups.all());

const delConfirm = ref(false);
const activeUser = ref<UserPayload | null>(null);
const userSessions = ref<UserSession[]>([]);

const addUserModal = ref<InstanceType<typeof AddUser> | null>(null);
const manageSessionModal = ref<InstanceType<typeof ManageSessionModal> | null>(null);

const openAddUserModal = () => {
	addUserModal.value?.open();
};
const closeAddUserModal = () => {
	addUserModal.value?.close();
};

const openManageSessionModal = async (active: UserPayload) => {
	activeUser.value = active;
	try {
		const sessions = await $api.users.getSessions(active?.username as string);
		userSessions.value = sessions.data as UserSession[];
		manageSessionModal.value?.open();
	}
	catch (error) {
		snackbar.add({
			type: 'error',
			text: 'Failed to fetch user sessions',
		});
	}
};
const createUser = async (data: UserPayload) => {
	await $api.users.create(data);
	try {
		await refresh();
		closeAddUserModal();
		snackbar.add({
			type: 'success',
			text: 'User created successfully',
		});
	}
	catch (e) {
		snackbar.add({
			type: 'error',
			text: 'Failed to create user',
		});
	}
};

const closeModal = async () => {
	delConfirm.value = false;
};

const triggerDelete = (user) => {
	activeUser.value = user;
	delConfirm.value = true;
};
const deleteUser = async (activeUsername: string) => {
	try {
		delConfirm.value = false;
		await $api.users.delete(activeUsername);
		await refresh();
		snackbar.add({
			type: 'success',
			text: 'User deleted successfully',
		});
	}
	catch (e) {
		snackbar.add({
			type: 'error',
			text: 'Something went wrong user not deleted',
		});
	}
};
</script>
