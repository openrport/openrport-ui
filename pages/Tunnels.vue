<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div class="relative z-20 flex h-16 items-center justify-between">
				<div class="">
					<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
						Tunnels
					</h3>
					<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
					</p>
				</div>
				<div class="flex-1" />
				<div class="ml-2 flex-shrink-0">
					<button
						class="bg-primary-800 hover:bg-primary-700 focus-visible:outline-blue-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						type="button"
					>
						<!----><!----><span class="flex items-center justify-center gap-x-2"><!---->
							Reload</span>
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
													<button disabled="">
														<span /><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Client</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Allowed
															clients</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Exposed
															port</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>HTTP
															proxy</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button
														disabled=""
													>
														<span>Protocol</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button
														disabled=""
													>
														<span>Destination</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Port</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Name</span><!---->
													</button>
												</th>
												<th
													class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
													scope="col"
												>
													<button disabled="">
														<span>Created
															at</span><!---->
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
										<tbody
											class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900"
										>
											<tr
												v-if="updatedTunnels?.length === 0"
												class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
											>
												<td
													colspan="12"
													class="w-full flex-1 text-center text-gray-800 dark:text-gray-200"
												>
													No results
												</td>
											</tr>
											<tr
												v-for="tunnel in updatedTunnels"
												v-if="updatedTunnels?.length !== undefined && updatedTunnels?.length > 0"
												:key="tunnel.id"
												class="cursor-pointer hover:bg-vtd-primary-600/30 border-t-1 group relative border-gray-200 transition-all duration-300"
											>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6" />
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<a
														:href="`/dashboard/${tunnel.client_id}`"
														class=""
													>{{ tunnel.client_name }}</a>
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.acl }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.lport }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<span class="bg-vtd-secondary-50 dark:bg-vtd-secondary-500/10 text-vtd-secondary-700 dark:text-vtd-secondary-400 ring-vtd-secondary-600/20 dark:ring-vtd-secondary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"><!----><span><!----> </span><span>Disabled</span><!----></span>
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<span class="text-center">{{ tunnel.protocol }}<span>:{{ tunnel.scheme }}</span></span>
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.rhost }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													{{ tunnel.rport }}
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<a
														:href="`/dashboard/${tunnel.client_id}`"
														class=""
													>{{ tunnel.name }}</a>
												</td>
												<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
													<div class="inline-flex w-max cursor-pointer">
														{{ useTimeAgo(new Date(tunnel.created_at)).value }}
													</div>
												</td>
												<td class="pr-1 sm:pr-1 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
													<!--													<div -->
													<!--														data-headlessui-state="" -->
													<!--														class="text-blue-600 hover:text-blue-900" -->
													<!--													> -->
													<!--														<div> -->
													<!--															<button -->
													<!--																id="headlessui-menu-button-13" -->
													<!--																type="button" -->
													<!--																aria-haspopup="menu" -->
													<!--																aria-expanded="false" -->
													<!--																data-headlessui-state="" -->
													<!--															> -->
													<!--																<div class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-vtd-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300"> -->
													<!--																	<svg -->
													<!--																		data-v-ca945699="" -->
													<!--																		xmlns="http://www.w3.org/2000/svg" -->
													<!--																		width="20px" -->
													<!--																		height="20px" -->
													<!--																		viewBox="0 0 24 24" -->
													<!--																		class="icon" -->
													<!--																	><path -->
													<!--																		fill="currentColor" -->
													<!--																		d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z" -->
													<!--																	/></svg> -->
													<!--																</div> -->
													<!--															</button> -->
													<!--														</div><div class="z-20"> -->
													<!--															<div -->
													<!--																class="fixed z-30" -->
													<!--																style="top: 208px;" -->
													<!--															> -->
													<!--																&lt;!&ndash;&ndash;&gt; -->
													<!--															</div> -->
													<!--														</div> -->
													<!--													</div> -->
												</td>
												<td class="pl-1 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
													<span class="absolute inset-y-0 right-0 flex w-6 items-center justify-center pr-2"><svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
														class="h-6 w-6 text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:text-gray-700 group-hover:dark:text-gray-200"
													><path
														fill-rule="evenodd"
														d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
														clip-rule="evenodd"
													/></svg></span>
												</td>
												<!--												<div class="inline-flex w-max cursor-pointer"> -->
												<!--													<button class="absolute inset-y-0 left-0 right-16 z-10 w-[90%]" /><button class="absolute inset-y-0 right-0 z-10 w-8" /><button class="absolute inset-y-0 left-0 right-16 z-10 w-12" />&lt;!&ndash;&ndash;&gt; -->
												<!--												</div> -->
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="relative z-0 -mx-4 mt-2 sm:-mx-6 lg:-mx-8">
						<div class="inline-block min-w-full align-middle sm:px-6 lg:px-8">
							<div class="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950">
								<div>
									<div
										colspan="12"
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
												>0</span> of <span
													class="font-medium"
												>0</span> results </span>
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
	</new-page-wrapper>
</template>

<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core';

const { $api } = useNuxtApp();

const tunnels = ref([]);
const clients = ref([]);

const { data: fetchedTunnels } = useAsyncData('tunnels', () => $api.tunnels.index());
const ids = computed(() => fetchedTunnels.value?.map(item => item.client_id));

watchEffect(() => {
	if (ids.value) {
		$api.clients.getClientsName(ids.value as Array<string>).then((response) => {
			clients.value = response.data;
		});
	}
});

const updatedTunnels = computed(() => {
	if (fetchedTunnels.value && clients.value.length) {
		return fetchedTunnels.value.map((tunnel) => {
			const client = clients.value.find(client => client.id === tunnel.client_id);
			return {
				...tunnel,
				client_name: client?.name || tunnel.name, // Update tunnel name with client name if found
			};
		});
	}
	return fetchedTunnels.value;
});
</script>

<style scoped>
/* Estilos de la página (opcional) */
</style>
