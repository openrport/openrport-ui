<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div>
						<div class="relative z-20 flex h-16 items-center justify-between">
							<div class="">
								<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
									Client groups
								</h3>
								<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
								</p>
							</div>
							<div class="flex-1" />
							<div class="ml-2 flex-shrink-0">
								<a
									href="https://chrome.google.com/webstore/detail/secure-shell-app/iodihamcpbpeioajjeobimgagajmlibd/organize-clients-with-groups"
									rel="noopener noreferrer"
									target="_blank"
									class="cursor-pointer text-vtd-primary-500 underline transition-all duration-300 hover:text-vtd-primary-500 dark:text-vtd-primary-400 dark:hover:text-vtd-primary-400 text-sm"
								>
									Learn more </a>
								<button
									class="bg-vtd-primary-500 hover:bg-vtd-primary-700 focus-visible:outline-vtd-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ml-4"
									type="button"
								>
									<!----><!---->
									<span
										class="flex items-center justify-center gap-x-2"
									><!----> Add group
									</span>
								</button>
								<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
								</p>
							</div>
						</div><!---->
						<div class="relative z-10 w-full">
							<!---->
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
																<button
																	disabled=""
																>
																	<span>ID</span><!---->
																</button>
															</th>
															<th
																class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
																scope="col"
															>
																<button
																	disabled=""
																>
																	<span>Description</span><!---->
																</button>
															</th>
															<th
																class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
																scope="col"
															>
																<button disabled="">
																	<span>Allowed user
																		groups</span><!---->
																</button>
															</th>
															<th
																class="text-center py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
																scope="col"
															>
																<button
																	disabled=""
																>
																	<span /><!---->
																</button>
															</th>
															<th
																class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6"
															/><!---->
														</tr>
													</thead>
													<tbody
														class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-slate-900"
													>
														<tr
															v-for="group in response?.data"
															:key="group.id"
															class="border-t-1 group relative border-gray-200 transition-all duration-300"
														>
															<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
																<div class="flex items-center">
																	<svg
																		data-v-ca945699=""
																		xmlns="http://www.w3.org/2000/svg"
																		xmlns:xlink="http://www.w3.org/1999/xlink"
																		aria-hidden="true"
																		role="img"
																		class="icon"
																		width="18px"
																		height="18px"
																		viewBox="0 0 24 24"
																	><path
																		fill="currentColor"
																		d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16z"
																	/></svg>
																	<span class="ml-2">{{ group.id }}</span>
																</div>
															</td>
															<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
																<div class="max-w-sm truncate">
																	<div class="inline-flex w-max cursor-pointer">
																		<span>{{ group.description }}</span>
																	</div>
																</div>
															</td>
															<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
																<div class="max-w-sm truncate">
																	<div class="inline-flex w-max cursor-pointer">
																		<span>{{ group.allowed_user_groups?.join(', ') }}</span>
																	</div>
																</div>
															</td>
															<td class="text-center min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6"></td>
															<td class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
																<DropdownMenu>
																	<DropdownMenuTrigger as-child>
																		<button>
																			<div class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none">
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
																			style="top: 316px;"
																		>
																			<DropdownMenuContent class="absolute -right-8 -top-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-950">
																				<div class="px-1 py-1">
																					<DropdownMenuItem class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400">
																							<Pencil
																								class="mr-2 h-4 w-4"
																							/>
																						<span>Edit</span>
																					</DropdownMenuItem>
																				</div>

																				<DropdownMenuSeparator />
																				<div class="px-1 py-1">
																					<DropdownMenuItem
																						class="focus:bg-vtd-primary-600 focus:text-white disabled:bg-transparent group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400"

																					>
																						<Trash2 class="mr-2 h-4 w-4" />
																						<span>Delete</span>
																					</DropdownMenuItem>
																				</div>
																			</DropdownMenuContent>
																		</div>
																	</div>
																</DropdownMenu>
															</td>
														</tr>
														<tr
															v-if="!response?.data"
															class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
														>
															<td
																colspan="6"
																class="w-full flex-1 text-center text-gray-800 dark:text-gray-200"
															>
																No results
															</td><!---->
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<Pagination
									:current-page-item-count="response?.data?.length"
									:total-items="response?.meta?.count"
									:page="page"
									@previous="handlePrevious"
									@next="handleNext"
								/>
							</div>
							<div class="h-12 w-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { Pencil, Trash2 } from 'lucide-vue-next';
import { Pagination } from '~/components/ui/pagination';

const { $api } = useNuxtApp();
const ITEMS_PER_PAGE = 20;
const page = ref(0);

const { data: response, pending, refresh } = useLazyAsyncData(`clients-group`, () => $api.groups.paginate(page.value, ITEMS_PER_PAGE), {
	watch: [page],
});

const handlePrevious = async () => {
	if (!page.value === 0) {
		page.value--;
		await refresh();
	}
};

const handleNext = async () => {
	page.value++;
	await refresh();
};
</script>
