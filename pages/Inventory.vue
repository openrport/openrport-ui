<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div class="relative z-20 flex h-16 items-center justify-between">
				<div class="">
					<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
						Inventory
					</h3>
					<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
					</p>
				</div>
				<div class="flex-1" />
				<div class="ml-2 flex-shrink-0">
					<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
					</p>
				</div>
			</div><!---->
			<div class="my-4 flex items-center justify-between gap-2">
				<div class="relative flex w-full">
					<div class="flex w-full items-center justify-between rounded">
						<!---->
						<input
							class="h-full w-full rounded-l border-none py-0 focus:outline-none focus:outline-0 focus:ring-0"
							placeholder="Filter clients by name or IP Address"
							type="text"
						>
						<button
							class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shrink-0 rounded-l-none"
							type="button"
						>
							<!----><!----><span
								class="flex items-center justify-center gap-x-2"
							><!----><span>More
								Filters</span><svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon"
							>
								<path
									fill="currentColor"
									d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4v2Z"
								/>
							</svg></span>
						</button>
					</div><!----><!---->
				</div>
				<div class="shrink-0">
					<button
						class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						type="button"
					>
						<!----><!----><span class="flex items-center justify-center gap-x-2"><!----><svg
							data-v-ca945699=""
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							class="icon"
						>
							<path
								fill="currentColor"
								d="M20 21H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h15q.825 0 1.413.588T22 5v14q0 .825-.588 1.413T20 21ZM5 8h15V5H5v3Zm3 2H5v9h3v-9Zm9 0v9h3v-9h-3Zm-2 0h-5v9h5v-9Z"
							/>
						</svg><span>Customize Table</span></span>
					</button>
				</div>
			</div><!---->
			<div class="w-full">
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
														class="w-10 text-right py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
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
														<button><span>Client</span><!----></button>
													</th>
													<th
														class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
														scope="col"
													>
														<button><span>ID</span><!----></button>
													</th>
													<th
														class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
														scope="col"
													>
														<button><span>OS</span><!----></button>
													</th>
													<th
														class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
														scope="col"
													>
														<button><span>IPs</span><!----></button>
													</th>
													<th
														class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
														scope="col"
													>
														<button><span>IPv4</span><!----></button>
													</th>
													<th
														class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
														scope="col"
													>
														<button><span>Client Version</span><!----></button>
													</th>
													<th
														class="text-center py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
														scope="col"
													>
														<button
															disabled=""
														>
															<span>Updates</span><!---->
														</button>
													</th>
													<th
														class="text-center py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
														scope="col"
													>
														<button disabled="">
															<span>Security
																Updates</span><!---->
														</button>
													</th><!----><!---->
												</tr>
											</thead>
											<tbody
												class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900"
											>
												<tr class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10">
													<td
														colspan="10"
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
											colspan="10"
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
														class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
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
														class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-primary disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
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
				<div />
			</div>
		</div>
		<!-- <div class="container mt-4">
            <page-header title="Inventory" />
            <div class="row">
                <div class="col">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Filter clients by name or IP Address"
                            aria-label="Filter clients by name or IP Address" aria-describedby="button-addon2">

                        <button class="btn btn-primary" type="button" id="button-addon2">
                            More filters
                            <IconFilter :size="20" stroke-width="1" class="ps-1" />
                        </button>
                    </div>
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-primary rounded" @click="showOptions = true">
                        <IconTable :size="20" stroke-width="1" class="pe-1" />
                        Customize Table
                    </button>
                </div>
            </div>
             -- <page-table /> --
            <div v-show="showOptions">
                <div class="card table-responsive mb-3">
                    <div class="card-header bg-body border-0">
                        <IconTable :size="20" stroke-width="1" class="pe-1" />
                        Customize table
                    </div>
                    <div class="card-body bg-body">
                        <div class="row">
                            <div class="col">
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Connection State</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">OS</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">OS Kernel</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">CPU Model</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Memory</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Client Version</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Client groups</span>
                                </label>
                            </div>
                            <div class="col">
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Name</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">OS Arch.</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">OS Version</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">CPU Model Name</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">IPs</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Tags</span>
                                </label>
                            </div>
                            <div class="col">
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Client</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">OS Family</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">OS Virt. Role</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">CPU Vendor</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">IPv4</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Updates</span>
                                </label>
                            </div>
                            <div class="col">
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">ID</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">OS Full Name</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">CPU Family</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">No. of CPUs</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">IPv6</span>
                                </label>
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked="">
                                    <span class="form-check-label">Security Updates</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-body border-0 mb-3">
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary align-items-end" @click="showOptions = false">Apply</button>
                    </div>
                </div>
            </div>
            <div class="card table-responsive">
                <table class="table table-vcenter">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>ID</th>
                            <th>OS</th>
                            <th>IPs</th>
                            <th>IPv4</th>
                            <th>Client version</th>
                            <th>Updates</th>
                            <th>Security updates</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>My raspberry</td>
                            <td class="text-secondary">
                                1234-abcd-5678-efgh
                            </td>
                            <td class="text-secondary">
                                <a href="#" class="text-reset">Linux raspberry</a>
                            </td>
                            <td class="text-secondary">
                                192.168.0.1 aa11::bb22::cc33::dd44::ee55
                            </td>
                            <td>192.168.0.1</td>
                            <td>
                                <span class="badge">0.9.14</span>
                            </td>
                            <td>
                                <span class="badge">30</span>
                            </td>
                            <td>
                                <span class="badge">0</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col">
                        <div class="p-2">Showing 1 to 0 of 0 results</div>
                    </div>
                </div>
            </div>
        </div> -->
	</new-page-wrapper>
</template>

<script>
import { IconTable, IconFilter } from '@tabler/icons-vue';

export default {
	components: {
		IconTable,
		IconFilter,
	},
	data() {
		return {
			showOptions: false,
		};
	},
};
</script>

<style scoped></style>
