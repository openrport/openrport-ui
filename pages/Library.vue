<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div>
				<div class="relative z-20 flex h-16 items-center justify-between">
					<div class="">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							Library
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
				<div class="border-b border-gray-200 mt-6">
					<nav
						class="-mb-px flex space-x-6"
						aria-label="Tabs"
					>
						<span
							class="cursor-pointer whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium primary-text hover:primary-text border-primary hover:border-primary"
						>Commands</span><span
							class="cursor-pointer whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
						>Scripts</span>
					</nav>
				</div>
				<h3 class="mt-4 text-gray-800">
					Browse Commands
				</h3>
				<p class="mt-2 text-sm text-gray-500">
					Use drag'n drop to move items between folders
				</p>
				<div class="mt-4 flex items-center">
					<svg
						data-v-ca945699=""
						xmlns="http://www.w3.org/2000/svg"
						width="30px"
						height="30px"
						viewBox="0 0 24 24"
						class="icon primary-text mr-2 mt-1.5"
					>
						<path
							fill="currentColor"
							d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
						/>
					</svg>
					<div class="flex flex-col flex flex-1">
						<div class="relative mt-1 flex w-full flex-col">
							<input
								id="2nbSPIaZaY"
								class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
								placeholder="Search commands"
								type="text"
								autocomplete="off"
							><label
								class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
								for="2nbSPIaZaY"
							/>
						</div><!----><!---->
					</div>
				</div>
				<div class="mt-6 rounded-md border p-4 pl-0">
					<div class="select-none ml-6">
						<div class="mt-1 rounded p-2.5 bg-blue-50">
							<div class="flex items-center">
								<div class="flex-shrink-0">
									<svg
										data-v-ca945699=""
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										class="icon text-blue-400"
									>
										<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
										>
											<circle
												cx="12"
												cy="12"
												r="9"
											/>
											<path d="M12 15v-3m0-3v0" />
										</g>
									</svg>
								</div>
								<div class="ml-3 mt-1 flex-grow">
									<p class="text-sm font-medium text-blue-800">
										No data found
									</p>
								</div><!---->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="container mt-4">
            <page-header title="Library" />
            <tabs :tabs="tabs" :default-tab-index="0" v-slot:default="{ activeTabIndex }">
                <tab :key="0" :is-active="activeTabIndex === 0">
                    <div class="row mt-3">
                        <div class="col">

                            <p>Browse Commands</p>
                            <p>Use drag'n drop to move items between folders</p>
                            <label class="form-label">Icon input</label>
                            <div class="input-icon mb-3">
                                <span class="input-icon-addon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="10" cy="10" r="7" />
                                        <line x1="21" y1="21" x2="15" y2="15" />
                                    </svg>
                                </span>
                                <input type="text" value="" class="form-control" placeholder="Search commands" />
                            </div>
                        </div>
                    </div>

                </tab>
                <tab :key="1" :is-active="activeTabIndex === 1">
                    <div class="row mt-3">
                        <div class="col">

                            <p>Browse Scripts</p>
                            <p>Use drag'n drop to move items between folders</p>
                            <label class="form-label">Icon input</label>
                            <div class="input-icon mb-3">
                                <span class="input-icon-addon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx="10" cy="10" r="7" />
                                        <line x1="21" y1="21" x2="15" y2="15" />
                                    </svg>
                                </span>
                                <input type="text" value="" class="form-control" placeholder="Search scripts" />
                            </div>
                        </div>
                    </div>
                </tab>
            </tabs>
        </div> -->
	</new-page-wrapper>
</template>

<script>
import { IconPlus } from '@tabler/icons-vue';

export default {
	components: {
		IconPlus,
	},
	data() {
		return {
			tabs: [
				{ title: 'Commands' },
				{ title: 'Scripts' },
			],
		};
	},
};
</script>

<style scoped></style>
