<template>
	<div class="h-full flex-1">
		<div class="mt-8 w-full shrink-0">
			<div class="relative z-10 w-full">
				<div class="sm:flex sm:items-center">
					<div class="sm:flex-auto">
						<h1 class="text-base font-semibold leading-6 text-gray-800 dark:text-gray-50">
							Tunnels
						</h1>
						<p class="mt-2 text-sm text-gray-700 dark:text-gray-500" />
					</div>
					<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
						<button
							class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							type="button"
							@click="$emit('addtunnel')"
						>
							<span class="flex items-center justify-center gap-x-2"> Add Tunnel</span>
						</button>
					</div>
				</div>
				<div class="mt-8 flow-root overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg">
					<div class="overflow-auto relative z-10 -mb-2">
						<div class="inline-block min-w-full align-middle">
							<div class="sm:rounded-lg overflow-hidden">
								<div>
									<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
										<thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
											<tr>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Allowed clients</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Exposed port</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>HTTP proxy</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Destination</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Port</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Protocol</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Name</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Created at</span>
													</button>
												</th>
												<th
													class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-800 sm:pl-6"
												/>
												<th
													class="relative w-6 whitespace-nowrap py-3.5 pl-3 pr-2 text-right text-sm font-medium sm:pr-2"
												/>
											</tr>
										</thead>
										<tbody class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
											<tr
												v-if="tunnels?.tunnels?.length <= 0"
												class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
											>
												<td
													colspan="10"
													class="w-full flex-1 text-center text-gray-800 dark:text-gray-200"
												>
													No results
												</td>
											</tr>
											<tr
												v-for="tunnel in tunnels?.tunnels"
												class="cursor-pointer hover:bg-vtd-primary-600/30 border-t-1 group relative border-gray-200 transition-all duration-300"
											>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.acl }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<div class="inline-flex w-max cursor-pointer">
														<span>{{ tunnel.lport }}</span>
													</div>
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.http_proxy ? 'Enabled': 'Disabled' }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.rhost }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.rport }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<span class="text-center">{{ tunnel.protocol }}<span>:{{ tunnel.scheme }}</span></span>
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													-
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<div class="inline-flex w-max cursor-pointer">
														{{ useTimeAgo(new Date(tunnel.created_at)).value }}
													</div>
												</td>
												<td class="pr-1 sm:pr-1 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
													<div
														data-headlessui-state=""
														class="text-blue-600 hover:text-blue-900"
													>
														<div>
															<button
																id="headlessui-menu-button-4"
																type="button"
																aria-haspopup="menu"
																aria-expanded="false"
																data-headlessui-state=""
															>
																<div class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-vtd-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300">
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
														</div>
														<div class="z-20">
															<div
																class="fixed z-30"
																style="top: 368px;"
															>
															<!---->
															</div>
														</div>
													</div>
												</td>
												<td class="pl-1 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
													<span class="absolute inset-y-0 right-0 flex w-6 items-center justify-center pr-2">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
															class="h-6 w-6 text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:text-gray-700 group-hover:dark:text-gray-200"
														>
															<path
																fill-rule="evenodd"
																d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												</td>
												<div class="inline-flex w-max cursor-pointer">
													<button class="absolute inset-y-0 left-0 right-16 z-10 w-[90%]" />
													<button class="absolute inset-y-0 right-0 z-10 w-8" />
													<button class="absolute inset-y-0 left-0 right-16 z-10 w-12" />
													<!---->
												</div>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="h-12 w-full" />
			</div>
		</div>
		<div class="mt-32">
			<div class="relative z-10 w-full">
				<div class="sm:flex sm:items-center">
					<div class="sm:flex-auto">
						<h1 class="text-base font-semibold leading-6 text-gray-800 dark:text-gray-50">
							Stored tunnels and service forwarding
						</h1>
						<p class="mt-2 text-sm text-gray-700 dark:text-gray-500" />
					</div>
					<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none" />
				</div>
				<div class="mt-8 flow-root overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg">
					<div class="overflow-auto relative z-10 -mb-2">
						<div class="inline-block min-w-full align-middle">
							<div class="sm:rounded-lg overflow-hidden">
								<div>
									<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
										<thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
											<tr>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Allowed clients</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Scheme</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Destination</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Port</span>
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Name</span>
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
												<th
													class="relative w-6 whitespace-nowrap py-3.5 pl-3 pr-2 text-right text-sm font-medium sm:pr-2"
												/>
											</tr>
										</thead>
										<tbody class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
											<tr
												v-if="storedTuns?.length <= 0"
												class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
											>
												<td
													colspan="9"
													class="w-full flex-1 text-center text-gray-800 dark:text-gray-200"
												>
													No results
												</td>
											</tr>
											<tr
												v-for="tun in storedTuns"
												class="cursor-pointer hover:bg-vtd-primary-600/30 border-t-1 group relative border-gray-200 transition-all duration-300"
											>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													92.154.49.249
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<span>{{ tun.scheme }}</span>
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													localhost
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tun.remote_port }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tun.name }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ String(tun.further_options.is_service_forwarding) }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6" />
												<td class="pr-1 sm:pr-1 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
													<div
														data-headlessui-state=""
														class="text-blue-600 hover:text-blue-900"
													>
														<div>
															<button
																id="headlessui-menu-button-18"
																type="button"
																aria-haspopup="menu"
																aria-expanded="false"
																data-headlessui-state=""
															>
																<div class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-vtd-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300">
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
														</div>
														<div class="z-20">
															<div
																class="fixed z-30"
																style="top: 641px;"
															>
																<!---->
															</div>
														</div>
													</div>
												</td>
												<td class="pl-1 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
													<span class="absolute inset-y-0 right-0 flex w-6 items-center justify-center pr-2">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
															class="h-6 w-6 text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:text-gray-700 group-hover:dark:text-gray-200"
														>
															<path
																fill-rule="evenodd"
																d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												</td>
												<div class="inline-flex w-max cursor-pointer">
													<button class="absolute inset-y-0 left-0 right-16 z-10 w-[90%]" />
													<button class="absolute inset-y-0 right-0 z-10 w-8" />
													<button class="absolute inset-y-0 left-0 right-16 z-10 w-12" />
													<!---->
												</div>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="h-12 w-full" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTimeAgo } from '@vueuse/core';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

defineEmits(['addtunnel']);
const { $api } = useNuxtApp();

const { data: tunnels } = useAsyncData(`tunnels_${props.id}`, () => $api.clients.tunnels(props.id));
const { data: storedTuns } = useAsyncData(`stored_tunnels_${props.id}`, () => $api.clients.storedTunnels(props.id));
</script>
