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
							:class="[selectedTab == 0 ? 'primary-text hover:primary-text border-primary hover:border-primary' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700', 'cursor-pointer whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium']"
							@click="switchTab(0)"
						>Commands</span>
						<span
							:class="[selectedTab == 1 ? 'primary-text hover:primary-text border-primary hover:border-primary' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700', 'cursor-pointer whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium']"
							@click="switchTab(1)"
						>Scripts</span>
					</nav>
				</div>
				<h3 class="mt-4 text-gray-800">
					Browse {{ selectedTab == 0 ? 'Commands': 'Scripts' }}
				</h3>
				<p class="mt-2 text-sm text-gray-500">
					Use drag'n drop to move items between folders
				</p>
				<div class="mt-4 flex items-center">
					<svg
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
								:placeholder="`Search ${selectedTab == 0 ? 'commands': 'scripts'}`"
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
						<div
							v-if="!commands"
							class="mt-1 rounded p-2.5 bg-blue-50"
						>
							<div
								class="flex items-center"
							>
								<div class="flex-shrink-0">
									<svg
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

						<div
							v-for="cmd in commands"
							v-if="selectedTab == 0"
							:key="cmd.id"
						>
							<div
								:id="cmd.id"
								class="hover:bg-gray-50 hover:dark:bg-slate-900 group flex cursor-pointer items-center justify-between rounded-md p-2"
								:data-name="cmd.name"
								data-parentname=""
								draggable="true"
							>
								<div class="flex flex-1 items-center overflow-hidden">
									<!----><div class="pl-1 ml-2 flex max-w-full flex-wrap items-center">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18px"
												height="18px"
												viewBox="0 0 256 256"
												class="icon primary-text"
											>
												<path
													fill="currentColor"
													d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z"
												/>
											</svg>
										</div>
										<span class="ml-2 text-sm text-gray-800 dark:text-slate-100">{{ cmd.name }}</span>
										<div class="flex max-w-full">
											<div class="inline-flex w-max cursor-pointer ml-3 flex flex-wrap">
												<span
													v-for="(tag, key) in cmd.tags"
													:key="key"
													class="inline-flex items-center bg-gray-100 px-2 py-0.5 text-sm text-gray-800 rounded ml-1"
												>{{ tag }}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="ml-2 flex flex-shrink-0 items-center">
									<div class="inline-flex w-max cursor-pointer">
										<p class="text-xs text-gray-400">
											{{ cmd.created_by }} / {{ useTimeAgo(new Date(cmd.created_at)) }}
										</p>
									</div>
									<button
										type="button"
										class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 primary-text ml-4 cursor-pointer bg-blue-50 hover:bg-blue-100 dark:bg-slate-900 dark:group-hover:bg-slate-800"
									>
										<span
											class="flex items-center justify-center"
											style="width: 6px; height: 6px;"
										><div class="-mt-1"><svg
											data-v-ca945699=""
											xmlns="http://www.w3.org/2000/svg"
											width="17px"
											height="17px"
											viewBox="0 0 24 24"
											class="icon"
										><path
											fill="currentColor"
											d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
										/></svg></div></span>
									</button>
									<button
										type="button"
										class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 ml-1 cursor-pointer bg-red-50 text-red-600 hover:bg-red-100 dark:bg-slate-900 dark:group-hover:bg-slate-800"
									>
										<span
											class="flex items-center justify-center"
											style="width: 6px; height: 6px;"
										>
											<div class="-mt-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18px"
													height="18px"
													viewBox="0 0 24 24"
													class="icon"
												>
													<g fill="none">
														<path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path
															fill="currentColor"
															d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
														/>
													</g>
												</svg>
											</div>
										</span>
									</button>
								</div>
							</div><!---->
						</div>

						<div
							v-for="script in scripts"
							v-if="selectedTab == 1"
							:key="script.id"
						>
							<div
								:id="script.id"
								class="hover:bg-gray-50 hover:dark:bg-slate-900 group flex cursor-pointer items-center justify-between rounded-md p-2"
								:data-name="script.name"
								data-parentname=""
								draggable="true"
							>
								<div class="flex flex-1 items-center overflow-hidden">
									<!----><div class="pl-1 ml-2 flex max-w-full flex-wrap items-center">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18px"
												height="18px"
												viewBox="0 0 256 256"
												class="icon primary-text"
											>
												<path
													fill="currentColor"
													d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z"
												/>
											</svg>
										</div>
										<span class="ml-2 text-sm text-gray-800 dark:text-slate-100">{{ script.name }}</span>
										<div class="flex max-w-full">
											<div class="inline-flex w-max cursor-pointer ml-3 flex flex-wrap">
												<span
													v-for="(tag, key) in script.tags"
													:key="key"
													class="inline-flex items-center bg-gray-100 px-2 py-0.5 text-sm text-gray-800 rounded ml-1"
												>{{ tag }}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="ml-2 flex flex-shrink-0 items-center">
									<div class="inline-flex w-max cursor-pointer">
										<p class="text-xs text-gray-400">
											{{ script.created_by }} / {{ useTimeAgo(new Date(script.created_at)) }}
										</p>
									</div>
									<button
										type="button"
										class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 primary-text ml-4 cursor-pointer bg-blue-50 hover:bg-blue-100 dark:bg-slate-900 dark:group-hover:bg-slate-800"
									>
										<span
											class="flex items-center justify-center"
											style="width: 6px; height: 6px;"
										><div class="-mt-1"><svg
											data-v-ca945699=""
											xmlns="http://www.w3.org/2000/svg"
											width="17px"
											height="17px"
											viewBox="0 0 24 24"
											class="icon"
										><path
											fill="currentColor"
											d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
										/></svg></div></span>
									</button>
									<button
										type="button"
										class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 ml-1 cursor-pointer bg-red-50 text-red-600 hover:bg-red-100 dark:bg-slate-900 dark:group-hover:bg-slate-800"
									>
										<span
											class="flex items-center justify-center"
											style="width: 6px; height: 6px;"
										>
											<div class="-mt-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18px"
													height="18px"
													viewBox="0 0 24 24"
													class="icon"
												>
													<g fill="none">
														<path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path
															fill="currentColor"
															d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
														/>
													</g>
												</svg>
											</div>
										</span>
									</button>
								</div>
							</div><!---->
						</div>
					</div>
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core';

const { $api } = useNuxtApp();
const selectedTab = ref(0);

let { data: commands } = await $api.library.listCommand();
const scripts = ref([]);
const switchTab = async (index: number) => {
	selectedTab.value = index;
	if (index == 0) {
		await loadCommands();
	}
	else {
		await loadScripts();
	}
};

const loadScripts = async () => {
	scripts.value = (await $api.library.listScripts()).data;
};

const loadCommands = async () => {
	commands = (await $api.library.listCommand()).data;
};
</script>

<style scoped></style>
