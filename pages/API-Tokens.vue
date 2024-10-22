<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center justify-between">
						<div class="">
							<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
								API Tokens
							</h3>
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
							</p>
						</div>
						<div class="flex-1" />
						<div class="ml-2 flex-shrink-0">
							<button
								class="bg-vtd-primary-500 hover:bg-vtd-primary-700 focus-visible:outline-vtdprimary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								type="button"
							>
								<!----><!----><span
									class="flex items-center justify-center gap-x-2"
								><!---->
									Add API Token</span>
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
																<span>Prefix</span><!---->
															</button>
														</th>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Scope</span><!---->
															</button>
														</th>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Name</span><!---->
															</button>
														</th>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Created</span><!---->
															</button>
														</th>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Expires</span><!---->
															</button>
														</th>
														<th
															class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
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
													class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900"
												>
													<tr
														v-for="token in tokens?.data"
														:key="token.prefix"
														class="border-t-1 group relative border-gray-200 transition-all duration-300"
													>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
															<div class="inline-flex w-max cursor-pointer">
																<div class="flex w-28 cursor-pointer items-center justify-between">
																	{{ token.prefix }}
																	<TooltipProvider>
																		<Tooltip>
																			<TooltipTrigger>
																				<button
																					type="button"
																					class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 primary-text ml-2 bg-blue-50"
																					@click="copyToClipboard(token)"
																				>
																					<span
																						class="flex items-center justify-center"
																						style="width: 6px; height: 6px;"
																					>
																						<div>
																							<svg
																								xmlns="http://www.w3.org/2000/svg"
																								width="18px"
																								height="18px"
																								viewBox="0 0 24 24"
																								class="icon"
																							><path
																								fill="currentColor"
																								d="M5 22q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"
																							/></svg>

																						</div>
																					</span>
																				</button>
																			</TooltipTrigger>
																			<TooltipContent>
																				<p v-if="lastCopiedPrefix === token.prefix">
																					It's in your clipboard
																				</p>
																				<p v-else>
																					Copy to clipboard
																				</p>
																			</TooltipContent>
																		</Tooltip>
																	</TooltipProvider>
																</div>
															</div>
														</td>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
															{{ token.scope }}
														</td>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
															<span>{{ token.name }}</span>
														</td>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
															<span>{{ useDateFormat(token.created_at, 'YYYY-MM-DD HH:mm UTC', { locales: 'en-US', timezone: 'UTC' }).value }}</span>
														</td>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
															<span>{{ useDateFormat(token.expires_at, 'YYYY-MM-DD HH:mm UTC', { locales: 'en-US', timezone: 'UTC' }).value }}</span>
														</td>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6" />
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
														</td><!----><!---->
													</tr>
													<tr
														v-if="!tokens?.data"
														class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
													>
														<td
															colspan="8"
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
								:current-page-item-count="tokens?.data?.length as number"
								:total-items="tokens?.data?.length"
								:page="0"
							/>
						</div>
						<div class="h-12 w-full" />
					</div><!---->
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { useDateFormat, useClipboard } from '@vueuse/core';
import { Pencil, Trash2 } from 'lucide-vue-next';
import type { APIToken } from '~/types';
import { Pagination } from '~/components/ui/pagination';

const { $api } = useNuxtApp();

const { data: tokens, pending, refresh } = useLazyAsyncData('api-tokens', () => $api.profile.apiTokens());
const { copy, isSupported } = useClipboard();
const lastCopiedPrefix = ref<string | null>(null);

const copyToClipboard = (token: APIToken) => {
	if (!isSupported) {
		alert('Clipboard is not supported in your browser');
		return;
	}
	copy(token.prefix);
	lastCopiedPrefix.value = token.prefix;
	setTimeout(() => {
		lastCopiedPrefix.value = null;
	}, 1000);
};
</script>
