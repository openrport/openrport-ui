<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div>
				<div class="relative z-20 flex h-16 items-center justify-between">
					<div class="">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							Audit Logs
						</h3>
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
						</p>
					</div>
					<div class="flex-1" />
					<div class="ml-2 flex-shrink-0">
						<div class="relative flex items-center justify-end p-2">
							<div
								class="min-w-[400px]"
								style="display: none;"
							>
								<div class="fixed inset-0 z-30 bg-black bg-opacity-25" />
								<div
									class="absolute right-2 top-full z-40 w-full max-w-[400px] rounded border border-gray-50 bg-white shadow-lg"
								>
									<div class="p-5">
										<div class="mb-2">
											<label
												class="block bg-theme pb-1 pl-1 text-sm font-medium text-theme-label"
												for="autoStart"
											>Audit starting date (UTC) </label>
											<div
												id="autoStart"
												data-headlessui-state=""
												class="relative w-full"
											>
												<!----><label
													id="headlessui-popover-button-6"
													class="relative block"
													aria-expanded="false"
													data-headlessui-state=""
												><input
														id="autoStart"
														type="text"
														class="relative block w-full h-10 border text-sm border-disabled rounded focus:border-primary focus:border-2 focus:ring-0"
														autocomplete="off"
														data-lpignore="true"
														data-form-type="other"
														placeholder="Audit starting date (UTC)"
													>
													<div
														class="absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden"
													>
														<button
															type="button"
															class="px-2 py-1 mr-1 focus:outline-none text-secondary-400 dark:text-opacity-70 rounded-md"
														><svg
															class="w-5 h-5"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="1.5"
																d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
															/>
														</svg></button>
													</div>
												</label><!----><!---->
											</div>
										</div>
										<div class="mb-2">
											<div class="flex flex-col">
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="rjYMTIuN8V"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="text"
														autocomplete="off"
													><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
														for="rjYMTIuN8V"
													>Username</label>
												</div><!----><!---->
											</div>
										</div>
										<div>
											<div>
												<div class="relative mt-1 flex w-full flex-col">
													<select
														id="0P59e94FP9"
														class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
													>
														<option
															disabled=""
															hidden=""
															value=""
														/>
														<option value="auth.user">
															Auth user
														</option>
														<option value="auth.user.me">
															Auth user me
														</option>
														<option value="auth.user.me.token">
															Auth user me token
														</option>
														<option value="auth.user.totp">
															Auth user totp
														</option>
														<option value="auth.user.group">
															Auth user group
														</option>
														<option value="client">
															Client
														</option>
														<option value="client.acl">
															Client ACL
														</option>
														<option value="client.auth">
															Client auth
														</option>
														<option value="client.group">
															Client group
														</option>
														<option value="client.tunnel">
															Client tunnel
														</option>
														<option value="client.command">
															Client command
														</option>
														<option value="client.script">
															Client script
														</option>
														<option value="library.command">
															Library command
														</option>
														<option value="library.script">
															Library script
														</option>
														<option value="vault">
															Vault
														</option>
														<option value="schedule">
															Schedule
														</option>
														<option value="uploads">
															Uploads
														</option>
													</select><label
														class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
														for="0P59e94FP9"
													>Application</label>
												</div><!----><!---->
											</div>
										</div>
									</div>
									<div class="flex items-center justify-end border-t border-solid border-gray-50 p-5">
										<button
											class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none mr-2 text-sm uppercase text-muted hover:bg-muted-light hover:bg-opacity-10"
											type="button"
										>
											<!---->Clear
										</button><button
											class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none primary text-sm uppercase"
											type="button"
										>
											<!---->Apply
										</button>
									</div>
								</div>
							</div><button
								class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-700 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								type="button"
							>
								<!----><!----><span
									class="flex items-center justify-center gap-x-2"
								><!----> Filters </span>
							</button>
						</div>
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
&nbsp;
						</p>
					</div>
				</div><!---->
				<div class="relative overflow-visible">
					<div class="my-8 flex items-center justify-start gap-4 px-2" />
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
															class="group-hover:bg-gray-table-tr-hover text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Client</span><!---->
															</button>
														</th>
														<th
															class="group-hover:bg-gray-table-tr-hover text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Username</span><!---->
															</button>
														</th>
														<th
															class="w-52 group-hover:bg-gray-table-tr-hover text-center py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Application</span><!---->
															</button>
														</th>
														<th
															class="w-52 group-hover:bg-gray-table-tr-hover text-center py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Action</span><!---->
															</button>
														</th>
														<th
															class="w-52 group-hover:bg-gray-table-tr-hover text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
															scope="col"
														>
															<button
																disabled=""
															>
																<span>Date</span><!---->
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
													<tr class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10">
														<td
															colspan="7"
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
									<div
										class="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950"
									>
										<div>
											<div
												colspan="7"
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
			</div>
		</div>
		<!-- <div class="container mt-4">
            <page-header title="Audit logs" hasAction="true" actionName="Filters" />
            <div class="card table-responsive">
                <table class="table table-vcenter">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Username</th>
                            <th>Application</th>
                            <th>Action</th>
                            <th>Date</th>
                            <th class="w-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>My raspberry</td>
                            <td class="text-secondary">
                                192.168.0.1
                            </td>
                            <td class="text-secondary">
                                <a href="#" class="text-reset">27000</a>
                            </td>
                            <td class="text-secondary">
                                <span class="badge">Disabled</span>
                            </td>
                            <td>tcp:ssh</td>
                            <td>
                                <div class="dropdown">
                                    <a href="#" class="btn dropdown-toggle border-0" data-bs-toggle="dropdown">...</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Copy</a>
                                        <a class="dropdown-item" href="#">Launch</a>
                                        <a class="dropdown-item" href="#">Terminate</a>
                                    </div>
                                </div>

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
export default {
	// Lógica de la página
};
</script>

<style scoped>
/* Estilos de la página (opcional) */
</style>
