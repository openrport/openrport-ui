<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="px-3">
						<div class="relative z-20 flex h-16 items-center justify-between">
							<div class="">
								<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
									Client Access
								</h3>
								<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
								</p>
							</div>
							<div class="flex-1" />
							<div class="ml-2 flex-shrink-0">
								<a
									href="https://kb.openrport.io/organize-clients-with-groups"
									rel="noopener noreferrer"
									target="_blank"
									class="cursor-pointer text-vtd-primary-500 underline transition-all duration-300 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400 text-sm"
								> Learn more </a>
								<button
									class="bg-vtd-primary-500 hover:bg-vtd-primary-700 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-4"
									type="button"
									@click="openAddClientModal"
								>
									<!----><!---->
									<span class="flex items-center justify-center gap-x-2"><!----> Add Access </span>
								</button><p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
								</p>
							</div>
						</div>
						<div class="py-8">
							<div class="relative flex max-w-screen-md items-center justify-between">
								<div class="flex flex-col w-full">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											v-model="filter"
											class="pr-10 primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
											placeholder=" "
											type="text"
											autocomplete="off"
											@keyup.enter="handleFilterList"
										><label
											class="absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
										>Search for a client ID</label>
									</div><!----><!---->
								</div>
								<button
									v-if="filter.length === 0"
									type="button"
									class="inline-flex items-center duration-200 focus:outline-none rounded-full py-0 px-3 absolute right-0 top-1 flex h-10 items-center justify-center"
								>
									<span
										class="flex items-center justify-center"
										style="width: 22px; height: 22px;"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										class="icon"
									><path
										fill="currentColor"
										d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
									/></svg></span>
								</button>

								<button
									v-else
									type="button"
									class="inline-flex items-center duration-200 focus:outline-none rounded-full py-0 px-3 absolute right-0 top-1 flex h-10 items-center justify-center"
									@click="filter = ''"
								>
									<span
										class="flex items-center justify-center"
										style="width: 22px; height: 22px;"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										class="icon"
									><path
										fill="currentColor"
										d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
									/></svg></span>
								</button>
							</div>
						</div>
						<div class="relative z-10 w-full">
							<div class="flow-root overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-slate-600 sm:rounded-lg">
								<div class="overflow-auto relative z-10 -mb-2">
									<div class="inline-block min-w-full align-middle">
										<div class="sm:rounded-t-lg overflow-hidden">
											<div>
												<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
													<thead class="rounded-lg bg-gray-50 dark:bg-slate-950">
														<tr>
															<th
																class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
																scope="col"
															>
																<button disabled="">
																	<span>ID</span><!---->
																</button>
															</th><th
																class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
																scope="col"
															>
																<button disabled="">
																	<span>Password</span><!---->
																</button>
															</th><th
																class="w-max text-right py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
																scope="col"
															>
																<button disabled="">
																	<span /><!---->
																</button>
															</th><th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6" /><!---->
														</tr>
													</thead>
													<tbody class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-slate-900">
														<tr
															v-for="client in response?.data"
															:key="client.id"
															class="border-t-1 group relative border-gray-200 transition-all duration-300"
														>
															<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
																<TooltipProvider>
																	<Tooltip>
																		<TooltipTrigger as-child>
																			<div
																				class="flex items-center"
																				@click="copy(client.id)"
																			>
																				<div class="inline-flex w-max cursor-pointer ml-3">
																					<span class="cursor-pointer">{{ client.id }}</span>
																				</div>
																			</div>
																		</TooltipTrigger>
																		<TooltipContent>
																			<span v-if="!copied">Copy to Clipboard</span>
																			<span v-else>Copied to Clipboard</span>
																		</TooltipContent>
																	</Tooltip>
																</TooltipProvider>
															</td>
															<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
																<TooltipProvider>
																	<Tooltip>
																		<TooltipTrigger as-child>
																			<div
																				class="inline-flex w-max cursor-pointer ml-3"
																				@click="copy(client.password)"
																			>
																				<span class="cursor-pointer">{{ client.password }}</span>
																			</div>
																		</TooltipTrigger>
																		<TooltipContent>
																			<span v-if="!copied">Copy to Clipboard</span>
																			<span v-else>Copied to Clipboard</span>
																		</TooltipContent>
																	</Tooltip>
																</TooltipProvider>
															</td>
															<td class="w-max text-right min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6" />
															<td class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
																<DropdownMenu>
																	<DropdownMenuTrigger as-child>
																		<button>
																			<div class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none">
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
																	<div class="z-20">
																		<div
																			class="fixed z-30"
																			style="top: 316px;"
																		>
																			<DropdownMenuContent class="absolute -right-8 -top-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-950">
																				<div class="px-1 py-1">
																					<DropdownMenuItem class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400">
																						<Wrench class="mr-2 h-4 w-4" />
																						<span>Install client</span>
																					</DropdownMenuItem>
																				</div>

																				<DropdownMenuSeparator />
																				<div class="px-1 py-1">
																					<DropdownMenuItem
																						class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400"
																						@click="triggerDelete(client)"
																					>
																						<Trash2 class="mr-2 h-4 w-4" />
																						<span>Delete</span>
																					</DropdownMenuItem>
																				</div>
																			</DropdownMenuContent>
																		</div>
																	</div>
																</DropdownMenu>
															</td><!----><!---->
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div><div class="relative z-0 -mx-4 mt-2 sm:-mx-6 lg:-mx-8">
									<div class="inline-block min-w-full align-middle sm:px-6 lg:px-8">
										<div class="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950">
											<div>
												<div
													colspan="5"
													class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6"
												>
													<div class="flex w-full items-center justify-between">
														<div class="flex items-center justify-between">
															<span class="text-xs text-gray-500"> Showing <span class="font-medium">{{ 1 + (page*20) }}</span> to <span class="font-medium">{{ 1 + (page*20) }}</span> to <span class="tw-font-medium">{{ response?.data?.length + (page*20) }}</span> of <span class="font-medium">{{ response?.meta?.count }}</span> results </span>
														</div>
														<div class="flex-1" />
														<div class="flex w-full max-w-[90px] items-center justify-between">
															<button
																:disabled="page === 0"
																class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-vtd-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
																@click="previous"
															>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																	class="h-6 w-6"
																><path
																	fill-rule="evenodd"
																	d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
																	clip-rule="evenodd"
																/></svg>
															</button>
															<button
																:disabled="disabledNext"
																class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-vtd-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
																@click="next"
															>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																	class="h-6 w-6"
																><path
																	fill-rule="evenodd"
																	d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
																	clip-rule="evenodd"
																/></svg>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <Confirm
			v-if="activeClient"
			:is_active="delConfirm"
			@close="() => delConfirm = false"
		>
			<div>Are you sure you want to delete #{{ activeClient?.id }}?</div>
		</Confirm> -->
		<Modal
			v-model="delConfirm"
			title="Please confirm!"
			ok-text="Ok"
			cancel-text="Cancel"
			:show-cancel="true"
			@ok="deleteClientAccess(activeClient.id)"
		>
			<div class="absolute inset-0 flex h-full min-h-[240px] flex-col items-center justify-center p-8 text-center">
				<div>Do you want to delete #{{ activeClient?.id }}</div>
			</div>
		</Modal>
		<Modal
			v-model="forceDeleteConfirm"
			title="Please confirm!"
			ok-text="Ok"
			cancel-text="Cancel"
			:show-cancel="true"
			@ok="forceDelete(activeClient.id, true)"
		>
			<div class="absolute inset-0 flex h-full min-h-[240px] flex-col items-center justify-center p-8 text-center">
				<div><p>These credentials are currently in use by a connected client.</p><p>Deleting them will disconnect the client immediately. Do you want to proceed?</p></div>
			</div>
		</Modal>
		<AddClientModal
			ref="addClientModal"
			@save="createClientAccess"
		/>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { Wrench, Trash2 } from 'lucide-vue-next';
import { useClipboard, useDebounceFn } from '@vueuse/core';
import NewPageWrapper from '~/components/NewPageWrapper.vue';
import AddClientModal from '~/components/clients/AddClientModal.vue';

const { copy, copied } = useClipboard();
const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const route = useRoute();

const ITEMS_PER_PAGE = 20;

const page = ref(0);
const filter = ref('');
const activeClient = ref(null);
const delConfirm = ref(false);
const forceDeleteConfirm = ref(false);

const addClientModal = ref<InstanceType<typeof AddClientModal> | null>(null);

filter.value = route.hash.slice(1);
const { data: response, pending, refresh } = useLazyAsyncData(`clients-auth`, () => $api.clientAuth.paginate(page.value, filter.value), {
	watch: [page, filter],
});

const openAddClientModal = () => {
	addClientModal.value?.open();
};

const closeAddClientModal = () => {
	addClientModal.value?.close();
};
const triggerDelete = (client) => {
	activeClient.value = client;
	delConfirm.value = true;
};
const disabledNext = computed(() => {
	return Math.ceil((response?.value?.meta?.count ?? 0) / ITEMS_PER_PAGE) === page.value + 1;
});
const disabledPrevious = computed(() => page.value === 0);
const next = async () => {
	if (!disabledNext.value) {
		page.value++;
		await refresh();
	}
};

const previous = async () => {
	if (!disabledPrevious.value) {
		page.value--;
		await refresh();
	}
};

const handleFilterList = useDebounceFn(() => {
	page.value = 0;
	refresh();
}, 300);

const createClientAccess = async (data) => {
	const authClient: ClientAuth = {
		id: data.id,
		password: data.password,
	};
	await $api.clientAuth.create(authClient);
	closeAddClientModal();
	await refresh();
};

const deleteClientAccess = async (client_auth_id: string) => {
	await $api.clientAuth.delete(client_auth_id, false).catch((error) => {
		if (error.status === 409) {
			delConfirm.value = false;
			activeClient.value = client_auth_id;
			forceDeleteConfirm.value = true;
		}
	});
	delConfirm.value = false;
	snackbar.add({
		type: 'success',
		text: 'Client Auth ID deleted successfully',
	});
	await refresh();
};

const forceDelete = async (client_auth_id: string, force: boolean) => {
	await $api.clientAuth.delete(client_auth_id, force);
	forceDeleteConfirm.value = false;
	snackbar.add({
		type: 'success',
		text: 'Client Auth ID deleted successfully',
	});
};

watch([page, filter], () => {
	refresh();
});
</script>
