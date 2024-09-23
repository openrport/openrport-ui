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
											<tr class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10">
												<td
													colspan="12"
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

		<!-- <div class="container mt-4">
            <page-header title="Tunnels" hasAction={true} actionName="Reload" />
            <page-table />

            <div class="tw-relative tw-z-10 tw-w-full">
                <div
                    class="tw-flow-root tw-overflow-hidden tw-border tw-border-[#f3f4f6] tw-ring-1 tw-ring-[#000000] tw-ring-opacity-10 dark:tw-border-gray-600 sm:tw-rounded-lg">
                    <div class="tw-overflow-auto tw-relative tw-z-10 -tw-mb-2">
                        <div class="tw-inline-block tw-min-w-full tw-align-middle">
                            <div class="sm:tw-rounded-t-lg tw-overflow-hidden">
                                <div>
                                    <table
                                        class="tw-min-w-full tw-divide-y tw-divide-[#e5e7eb] dark:tw-divide-gray-700">
                                        <thead class="tw-rounded-lg tw-bg-gray-50 dark:tw-bg-gray-950">
                                            <tr>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled></button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Client</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Allowed clients</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Exposed port</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>HTTP proxy</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Protocol</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Destination</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Port</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Name</span>
                                                    </button>
                                                </th>
                                                <th class="tw-text-left tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 dark:tw-text-gray-200 sm:tw-pl-6"
                                                    scope="col">
                                                    <button disabled>
                                                        <span>Created at</span>
                                                    </button>
                                                </th>
                                                <th
                                                    class="tw-py-3.5 tw-pl-4 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600 sm:tw-pl-6">

                                                </th>
                                                <th
                                                    class="tw-relative tw-w-6 tw-whitespace-nowrap tw-py-3.5 tw-pl-3 tw-pr-2 tw-text-right tw-font-medium sm:tw-pr-2">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="tw-z-10 tw-divide-y tw-divide-gray-200 tw-bg-white dark:tw-divide-gray-700 dark:tw-bg-gray-900">
                                            <tr v-if="tunnels?.length === 0"
                                                class="tw-h-[210px] tw-bg-white/10 tw-backdrop-blur-sm dark:tw-bg-black/10">
                                                <td colspan="11"
                                                    class="tw-w-full tw-flex-1 tw-text-center tw-text-gray-800 dark:tw-text-gray-200">
                                                    No results</td>
                                            </tr>
                                            <tr v-if="tunnels?.length !== undefined && tunnels?.length > 0"
                                                v-for="(tunnel, key) in tunnels" :key="tunnel.id"
                                                class="tw-cursor-pointer hover:tw-bg-gray-200 tw-border-t-1 tw-group tw-relative tw-border-gray-200 tw-transition-all tw-duration-300">
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                </td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    <a :href="`/dashboard/${tunnel.client_id}`" class="">{{
                                                        tunnel.client_id }}</a>
                                                </td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    {{ tunnel.acl }}</td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    {{ tunnel.lport }}</td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    Disabled</td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    {{ tunnel.protocol }}:{{ tunnel.scheme }}</td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    {{ tunnel.rhost }}</td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    {{ tunnel.rport }}</td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    {{ tunnel.name }}</td>
                                                <td
                                                    class="tw-text-left tw-min-h-[42px] tw-whitespace-nowrap tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-normal tw-text-gray-800 dark:tw-text-white sm:tw-pl-6">
                                                    {{ useTimeAgo(new Date(tunnel.created_at)).value }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tw-relative tw-z-0 -tw-mx-4 tw-mt-2 sm:-tw-mx-6 lg:-tw-mx-8">
                        <div class="tw-inline-block tw-min-w-full tw-align-middle sm:tw-px-6 lg:tw-px-8">
                            <div
                                class="tw-border-t tw-border-[#e5e7eb] tw-bg-gray-50 dark:tw-border-gray-700 dark:tw-bg-gray-950">
                                <div>
                                    <div colspan="11"
                                        class="tw-py-3.5 tw-pl-4 tw-pr-3 tw-text-sm tw-font-semibold tw-text-gray-600 sm:tw-pl-6">
                                        <div class="tw-flex tw-w-full tw-items-center tw-justify-center">
                                            <div class="tw-flex tw-items-center tw-justify-center">
                                                <span class="tw-text-xs tw-text-gray-500">
                                                    Showing
                                                    <span class="tw-font-medium">1</span>
                                                    to
                                                    <span class="tw-font-medium">0</span>
                                                    of
                                                    <span class="tw-font-medium">0</span>
                                                    results
                                                </span>
                                            </div>
                                            <div class="flex-1"></div>
                                            <div
                                                class="tw-flex tw-w-full tw-max-w-[90px] tw-items-center tw-justify-between">
                                                <button disabled
                                                    class="tw-rounded-full tw-p-1 tw-text-gray-500 tw-transition-all tw-duration-300 hover:tw-bg-gray-300 hover:tw-text-primary-600 disabled:tw-cursor-not-allowed disabled:tw-text-gray-300 hover:disabled:tw-bg-transparent hover:dark:tw-bg-gray-900 disabled:dark:tw-ext-gray-700 hover:dark:disabled:tw-bg-transparent">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6">
                                                        <path fill-rule="evenodd"
                                                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </button>
                                                <button disabled
                                                    class="tw-rounded-full tw-p-1 tw-text-gray-500 tw-transition-all tw-duration-300 hover:tw-bg-gray-300 hover:tw-text-primary-600 disabled:tw-cursor-not-allowed disabled:tw-text-gray-300 hover:disabled:tw-bg-transparent hover:dark:tw-bg-gray-900 disabled:dark:tw-ext-gray-700 hover:dark:disabled:tw-bg-transparent">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6">
                                                        <path fill-rule="evenodd"
                                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                            clip-rule="evenodd"></path>
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
            </div>
        </div> -->
	</new-page-wrapper>
</template>

<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core';

const { $api } = useNuxtApp();

const { data: tunnels } = useAsyncData('tunnels', () => $api.tunnels.index());
</script>

<style scoped>
/* Estilos de la página (opcional) */
</style>
