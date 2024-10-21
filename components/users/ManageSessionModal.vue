<template>
	<Modal
		v-model="isOpen"
		title="Manage Sessions"
		ok-text="Close"
		cancel-text="Cancel"
		:show-cancel="true"
	>
		<div
			v-if="userSession?.length===0"
			class="relative max-h-[20vh]"
		>
			<div class="bg-cyan-50 dark:bg-cyan-500/10 rounded-md p-4">
				<div class="flex items-end justify-center gap-x-3">
					<!---->
					<span>
						<span class="text-cyan-700 dark:text-cyan-400">User test has no active sessions currently.</span>

					</span><!---->
				</div>
			</div>
		</div>
		<div v-else class="relative max-h-[70vh]">
			<div class="bg-red-50 dark:bg-red-500/10 rounded-md p-4">
				<div class="flex items-end justify-center gap-x-3">
					<!---->
					<span>
						<span class="text-red-700 dark:text-red-400">On sessions deletion the user will be forced to re-authenticate immediately.</span>
					</span><!---->
				</div>
			</div>
			<div class="my-4 flex items-start justify-between">
				<span>For simplicity, you can remove all session at once</span>
				<button
					class="bg-red-500 hover:bg-red-300 focus-visible:outline-red-600 disabled:bg-red-500/30 disabled:hover:bg-red-500/30 disabled:focus-visible:outline-red-500/30 text-white disabled:text-gray-600 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					type="button"
				>
					<!----><!---->
					<span class="flex items-center justify-center gap-x-2"><!---->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							class="icon"
						>
							<g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
								<path
									fill="currentColor"
									d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
								/>

							</g>

						</svg>
						<span>Remove All sessions Session</span>

					</span>
				</button>
			</div>
			<div
				v-for="session in userSessions"
				:key="session.id"
				class="flex flex-1 flex-col divide-y divide-slate-50 overflow-hidden rounded-lg bg-white shadow dark:divide-slate-700 dark:bg-slate-900 mb-12 w-full">
				<!---->
				<div class="flex-1 px-4 py-5 text-slate-950 dark:text-slate-50 sm:p-6">
					<div class="h-full w-full">
						<div class="grid w-full grid-cols-12">
							<div class="col-span-9 flex w-full flex-col items-start justify-start gap-4">
								<div class="flex w-full items-center justify-start gap-2">
									<div class="w-1/3 text-slate-600 dark:text-slate-400">
										IP Address:
									</div>
									<div class="w-2/3 font-bold text-black dark:text-white">
										{{ session.ip_address }}
									</div>
								</div>
								<div class="flex w-full items-center justify-start gap-2">
									<div class="w-1/3 text-slate-600 dark:text-slate-400">
										Last access at:
									</div>
									<div class="w-2/3 font-bold text-black dark:text-white">
										{{ session.last_access_at }}
									</div>
								</div>
								<div class="flex w-full items-center justify-start gap-2">
									<div class="w-1/3 text-slate-600 dark:text-slate-400">
										Expires at:
									</div>
									<div class="w-2/3 font-bold text-black dark:text-white">
										{{ session.expires_at }}
									</div>
								</div>
								<div class="flex w-full items-start justify-start gap-2">
									<div class="w-1/3 text-slate-600 dark:text-slate-400">
										User Agent:
									</div>
									<div class="w-2/3 font-bold text-black dark:text-white">
										{{ session.user_agent }}
									</div>
								</div>
							</div>
							<div class="col-span-3 flex items-start justify-end">
								<button
									class="bg-red-500 hover:bg-red-300 focus-visible:outline-red-600 disabled:bg-red-500/30 disabled:hover:bg-red-500/30 disabled:focus-visible:outline-red-500/30 text-white disabled:text-gray-600 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									type="button"
								>
									<!----><!----><span class="flex items-center justify-center gap-x-2"><!----><svg
										data-v-ca945699=""
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										class="icon"
									><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path
										fill="currentColor"
										d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
									/></g></svg><span>Remove Session</span></span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<!---->
			</div>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import type { UserSession } from "~/types";

const { $api } = useNuxtApp();
const isOpen = ref(false);

const props = defineProps({
	username: {
		type: String,
	},
	userSessions: {
		type: Array<UserSession>,
	},
});

const open = () => {
	isOpen.value = true;
};

const close = () => {
	isOpen.value = false;
};
defineExpose({ open, close });
</script>
