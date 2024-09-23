<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<div class="relative z-20 flex h-16 items-center justify-between">
						<div class="">
							<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
								User groups
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
																<span>Permissions</span><!---->
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
												<tbody class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
													<tr
														v-for="(group, key) in userGroups"
														:key="key"
														class="border-t-1 group relative border-gray-200 transition-all duration-300"
													>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
															{{ group.name }}
														</td>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6">
															<div class="flex items-center space-x-0.5">
																<template v-for="permission in Object.keys(group.permissions).map(id => [id, group.permissions[id]])">
																	<span
																		v-if="permission[1]"
																		class="bg-primary-50 dark:bg-primary-500/10 text-primary-800 dark:text-primary-400 ring-primary-600/20 dark:ring-primary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"
																	>
																		<!---->
																		<span>
																			<!---->
																		</span>
																		<span>{{ permission[0] }}</span>
																		<!---->
																	</span>
																</template>
															</div>
														</td>
														<td class="text-left min-h-[42px] whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-normal text-gray-800 dark:text-white sm:pl-6" />
														<td class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right text-sm font-normal">
															<div class="text-blue-600 hover:text-blue-900">
																<HeadlessMenu as="div">
																	<HeadlessMenuButton>
																		<div class="z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-opacity-20 p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-gray-300">
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
																	</HeadlessMenuButton>
																	<HeadlessMenuItems>
																		<div class="z-20">
																			<div
																				class="fixed z-30"
																				:style="{ top: 208 }"
																			>
																				<HeadlessMenuItem v-slot="{ active }">
																					<div class="absolute -right-8 -top-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-950">
																						<div
																							class="px-1 py-1"
																							role="none"
																						>
																							<button :class="[active ? 'bg-primary-600 text-white': 'text-gray-800 dark:text-gray-100', 'group flex w-full items-center rounded-md px-2 py-2 text-xs transition-all duration-300 disabled:text-gray-400']">
																								<svg
																									xmlns="http://www.w3.org/2000/svg"
																									width="24px"
																									height="24px"
																									viewBox="0 0 24 24"
																									class="icon mr-2 h-4 w-4"
																									aria-hidden="true"
																								>
																									<path
																										fill="currentColor"
																										d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
																									/>
																								</svg>
																								<span>Edit</span>
																							</button>
																						</div>
																					</div>
																				</HeadlessMenuItem>
																			</div>
																		</div>
																	</HeadlessMenuItems>
																</HeadlessMenu>
															</div>
														</td><!----><!---->
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
						<p class="mt-3 px-1.5 py-5 text-sm text-theme-inverted-light">
							New user groups are created from
							the
							user administration. On conflicting permissions, authorization wins over the denial. <a
								href="https://kb.openrport.io/manage-users-and-permissions"
								rel="noopener noreferrer"
								target="_blank"
								class="cursor-pointer text-primary-500 underline transition-all duration-300 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400"
							>
								Learn more </a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="container mt-4">
            <page-header title="User groups" />
            <div class="card table-responsive">

                <table class="table table-vcenter">
                    <thead class="rounded-circle bg-gray-50">
                        <tr>
                            <th class="py-3 ps-4 pe-4 text-sm-start fw-semibold">Name</th>
                            <th class="py-3 ps-4 pe-4 text-sm-start fw-semibold">Permissions</th>
                            <th class="w-1"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr v-for="(group, key) in userGroups" :key="key">
                            <td class="text-left py-3 ps-4 pe-4 min-h-[42px] whitespace-nowrap">{{ group.name }}</td>
                            <td class="text-left py-3 ps-4 pe-4 min-h-[42px] whitespace-nowrap">
                              <div class="d-flex align-items-center space-x-0.5">
                                <template  v-for="permission in Object.keys(group.permissions).map(id => [id, group.permissions[id]])">
                                  <span v-if="permission[1]" class="tag bg-azure-lt border-azure">{{ permission[0]}}</span>
                                </template>

</div>
</td>
<td>
    <a href="#">Edit</a>
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
                        <div class="d-flex text-xs align-items-center justify-content-between">Showing 1 to 0 of 0
                            results</div>
                        <div class="flex-1"></div>
                        <div class="d-flex w-100 max-w-[90px] align-items-center justify-content-between">
                            <button disabled class="btn-direction">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" width="24" height="24">
                                    <path fill-rule="evenodd"
                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <button disabled class="btn-direction">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" width="24" height="24">
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
</div> -->
	</new-page-wrapper>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp();

const { data: userGroups } = useAsyncData(('user-groups'), () => $api.userGroups.all());
</script>
