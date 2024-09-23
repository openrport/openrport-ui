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
								@click.prevent="addUser"
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
																	class="bg-primary-50 dark:bg-primary-500/10 text-primary-800 dark:text-primary-400 ring-primary-600/20 dark:ring-primary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"
																><span />
																	<span
																		v-for="(group, key) in user.groups"
																		:key="key"
																	>{{ group }}
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
																					class="z-20 tw-inline-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-full tw-bg-opacity-20 tw-p-1 tw-text-gray-600 tw-transition-all tw-duration-300 hover:tw-bg-primary-500 hover:tw-bg-opacity-30 hover:tw-text-gray-200 focus:outline-none"
																				>
																					<svg
																						data-v-ca945699=""
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
																		<DropdownMenuContent
																			class="tw-absolute tw-w-56 -tw-right-3 tw-mt-2"
																		>
																			<div class="tw-px-1 tw-py-1">
																				<DropdownMenuItem
																					class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
																				>
																					<Pencil
																						class="tw-mr-2 tw-h-4 tw-w-4"
																					/>
																					<span>Edit</span>
																				</DropdownMenuItem>
																			</div>
																			<div class="tw-px-1 tw-py-1">
																				<DropdownMenuItem
																					class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
																					@click="copy(user.username)"
																				>
																					<Copy
																						class="tw-mr-2 tw-h-4 tw-w-4"
																					/>
																					<span>Copy username</span>
																				</DropdownMenuItem>
																			</div>
																			<div class="tw-px-1 tw-py-1">
																				<DropdownMenuItem
																					class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
																				>
																					<Laptop
																						class="tw-mr-2 tw-h-4 tw-w-4"
																					/>
																					<span>Manage Session</span>
																				</DropdownMenuItem>
																			</div>
																			<DropdownMenuSeparator />
																			<div class="tw-px-1 tw-py-1">
																				<DropdownMenuItem
																					class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
																					@click="triggerDelete(user)"
																				>
																					<Trash2
																						class="tw-mr-2 tw-h-4 tw-w-4"
																					/>
																					<span>Delete</span>
																				</DropdownMenuItem>
																			</div>
																		</DropdownMenuContent>
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
							<div class="relative z-0 -mx-4 mt-2 sm:-mx-6 lg:-mx-8">
								<div class="inline-block min-w-full align-middle sm:px-6 lg:px-8">
									<div
										class="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950"
									>
										<div>
											<div
												colspan="5"
												class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6"
											>
												<div class="flex w-full items-center justify-between">
													<div class="flex items-center justify-between">
														<span
															class="text-xs text-gray-500"
														> Showing <span
															class="font-medium"
														>1</span> to <span
															class="font-medium"
														>1</span> of <span
															class="font-medium"
														>1</span> results </span>
													</div>
													<div class="flex-1" />
													<div class="flex w-full max-w-[90px] items-center justify-between">
														<button
															disabled=""
															class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																aria-hidden="true"
																class="h-6 w-6"
															>
																<path
																	fill-rule="evenodd"
																	d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
																	clip-rule="evenodd"
																/>
															</svg>
														</button><button
															disabled=""
															class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																aria-hidden="true"
																class="h-6 w-6"
															>
																<path
																	fill-rule="evenodd"
																	d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
																	clip-rule="evenodd"
																/>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="h-12 w-full" />
					</div>
				</div>
			</div>
		</div>
		<div class="container mt-4">
			<page-header
				title="Users"
				has-action="{true}"
				action-name="Add user"
				@action="addUser"
			/>
			<div class="card table-responsive">
				<table class="table table-vcenter">
					<thead class="rounded bg-gray-50">
						<tr>
							<th class="py-3 ps-4 pe-4 text-sm-start fw-semibold">
								User
							</th>
							<th class="py-3 ps-4 pe-4 text-sm-start fw-semibold">
								Groups
							</th>
							<th class="w-1" />
						</tr>
					</thead>
					<tbody class="bg-white">
						<tr
							v-for="user in users"
							:key="user.username"
						>
							<td class="text-left py-3 ps-4 pe-4 min-h-[42px] whitespace-nowrap">
								{{ user.username }}
							</td>
							<td class="text-left py-3 ps-4 pe-4 min-h-[42px] whitespace-nowrap">
								<div class="d-flex align-items-center space-x-0.5">
									<span
										v-for="(group, key) in user.groups"
										:key="key"
										class="tag bg-azure-lt border-azure"
									>{{ group }}</span>
								</div>
							</td>
							<td>
								!-- <a href="#">Edit</a>--
								<dropdown-menu>
									<dropdown-menu-trigger as-child>
										<button>
											<div
												class="z-20 tw-inline-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-full tw-bg-opacity-20 tw-p-1 tw-text-gray-600 tw-transition-all tw-duration-300 hover:tw-bg-primary-500 hover:tw-bg-opacity-30 hover:tw-text-gray-200 focus:outline-none"
											>
												<svg
													data-v-ca945699=""
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
									</dropdown-menu-trigger>
									<dropdown-menu-content class="tw-absolute tw-w-56 -tw-right-3 tw-mt-2">
										<div class="tw-px-1 tw-py-1">
											<dropdown-menu-item
												class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
											>
												<Pencil class="tw-mr-2 tw-h-4 tw-w-4" />
												<span>Edit</span>
											</dropdown-menu-item>
										</div>
										<div class="tw-px-1 tw-py-1">
											<dropdown-menu-item
												class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
												@click="copy(user.username)"
											>
												<Copy class="tw-mr-2 tw-h-4 tw-w-4" />
												<span>Copy username</span>
											</dropdown-menu-item>
										</div>
										<div class="tw-px-1 tw-py-1">
											<dropdown-menu-item
												class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
											>
												<Laptop class="tw-mr-2 tw-h-4 tw-w-4" />
												<span>Manage Session</span>
											</dropdown-menu-item>
										</div>
										<dropdown-menu-separator />
										<div class="tw-px-1 tw-py-1">
											<dropdown-menu-item
												class="focus:tw-text-white focus:tw-bg-gray-500 tw-text-xs"
												@click="triggerDelete(user)"
											>
												<Trash2 class="tw-mr-2 tw-h-4 tw-w-4" />
												<span>Delete</span>
											</dropdown-menu-item>
										</div>
									</dropdown-menu-content>
								</dropdown-menu>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="row">
					<div class="col">
						<div class="bg-gray-50">
							<div>
								<div class="py-4 ps-4 pe-3 text-sm-start fw-semibold">
									<div class="d-flex w-100 align-items-center justify-content-between">
										<div class="d-flex text-xs align-items-center justify-content-between">
											Showing 1 to 0 of 0 results
										</div>
										<div class="flex-1" />
										<div
											class="d-flex w-100 max-w-[90px] align-items-center justify-content-between"
										>
											<button
												disabled
												class="btn-direction"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													width="24"
													height="24"
												>
													<path
														fill-rule="evenodd"
														d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
														clip-rule="evenodd"
													/>
												</svg>
											</button>
											<button
												disabled
												class="btn-direction"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													width="24"
													height="24"
												>
													<path
														fill-rule="evenodd"
														d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
														clip-rule="evenodd"
													/>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Button
				variant="destructive"
				@click="testSnack"
			>
				Click me
			</Button>
		</div>
		<AddUser
			:is_active="userModal"
			:groups="userGroups"
			@close="closeModal"
			@save="createUser"
		/>
		<Confirm
			:is_active="delConfirm"
			@close="closeModal"
			@save="deleteUser"
		>
			<div>Are you sure you want to delete the user {{ activeUser?.username }}?</div>
		</Confirm>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { Pencil, Copy, Laptop, Trash2 } from 'lucide-vue-next';
import { useClipboard } from '@vueuse/core';
import { Button } from '@/components/ui/button';
import AddUser from '@/components/users/AddUser.vue';
import type { UserPayload } from '~/types';
import Confirm from '@/components/custom/dialog/Confirm.vue';

const { copy } = useClipboard();
const { $api } = useNuxtApp();
const snackbar = useSnackbar();

const { data: users } = useAsyncData('users', () => $api.users.getAll());
const { data: userGroups } = useAsyncData(('user-groups'), () => $api.userGroups.all());

const userModal = ref(false);
const delConfirm = ref(false);
const activeUser = ref(null);
const addUser = () => {
	userModal.value = true;
};

const createUser = async (data) => {
	const userpayload: UserPayload = {
		username: data.username,
		password: data.password,
		groups: data.groups,
	};
	await $api.users.create(userpayload);
	try {
		const { data: users } = useAsyncData('users', () => $api.users.getAll());
		users.value = users;
		snackbar.add({
			type: 'success',
			text: 'User created successfully',
		});
	}
	catch (e) {

	}

	userModal.value = false;
};

const closeModal = async () => {
	userModal.value = false;
	delConfirm.value = false;
};

const triggerDelete = (user) => {
	activeUser.value = user;
	delConfirm.value = true;
};
const deleteUser = async () => {
	try {
		delConfirm.value = false;
		await $api.users.delete(activeUser?.value.username);
		const { data: users } = useAsyncData('users', () => $api.users.getAll());
		users.value = users;
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
const testSnack = () => {
	snackbar.add({
		type: 'success',
		text: 'This is a snackbar message',
	});
};
</script>
