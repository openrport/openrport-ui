<template>
	<Modal
		:is-active="is_active"
		title="Add Client Access"
		save-button-text="Add Client Access"
		@close="closeModal"
		@save="save"
	>
		<div
			class="p-3 overflow-y-auto modal-height relative h-full max-h-full min-h-[280px] transition-all dark:text-gray-200"
		>
			<div class="-m-3">
				<div class="flex w-auto flex-col p-3">
					<div class="my-2 flex w-full bg-white p-3 text-sm text-black-087">
						<div class="flex w-1/2 items-center justify-start">
							<div class="inline-flex w-max cursor-pointer ml-3">
								<div class="flex gap-1">
									<span class="font-bold">ID</span>
									<span>b34d52860573481da87b04c06635a6e0</span>
								</div>
							</div>
							<div class="inline-flex w-max cursor-pointer ml-3">
								<button
									class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										class="icon"
										width="16px"
										height="16px"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="flex w-1/2 items-center justify-end">
							<div class="inline-flex w-max cursor-pointer ml-3">
								<div class="flex gap-1">
									<span class="font-bold">Password</span>
									<span>b34d5286-0573-481d-a87b-04c06635a6e0</span>
								</div>
							</div>
							<div class="inline-flex w-max cursor-pointer ml-3">
								<button
									class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										class="icon"
										width="16px"
										height="16px"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div class="mt-3 flex items-end">
						<div class="w-1/2">
							<p class="pb-2">
								How does the client connect?
							</p>
						</div>
						<div
							data-v-298c7968=""
							class="w-1/2"
						>
							<div data-v-298c7968="">
								<div class="relative mt-1 flex w-full flex-col">
									<select
										id="IZAqaQiLSK"
										class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
									>
										<option
											disabled=""
											hidden=""
											value=""
										/>
										<option value="http://rport.viziosense.ai:80">
											http://rport.viziosense.ai:80
										</option>
									</select>
									<label
										class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
										for="IZAqaQiLSK"
									>Connect URL</label>
								</div><!----><!---->
							</div>
						</div>
					</div>
					<div
						data-v-298c7968=""
						class="mt-3"
					>
						<div
							data-v-298c7968=""
							class="flex flex-col mt-2"
						>
							<label
								class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
							>
								<input
									type="checkbox"
									class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								>Enable
								remote script and command execution</label>
						</div>
						<div
							data-v-298c7968=""
							class="flex flex-col mt-2"
						>
							<label
								class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
							>
								<input
									type="checkbox"
									class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								>Give
								remote scripts and commands sudo rights (Linux only)</label>
						</div>
						<div
							data-v-298c7968=""
							class="flex flex-col mt-2"
						>
							<label
								class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
							>
								<input
									type="checkbox"
									class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								>Enable
								file transfer</label>
						</div>
						<div
							data-v-298c7968=""
							class="flex flex-col mt-2"
						>
							<label
								class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
							>
								<input
									type="checkbox"
									class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								>Enable
								file transfer sudo rights (Linux only)</label>
						</div>
						<div
							data-v-298c7968=""
							class="flex flex-col mt-2"
						>
							<label
								class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
							>
								<input
									type="checkbox"
									class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								>
								<div data-v-298c7968=""> Install
									<a
										data-v-298c7968=""
										href="https://kb.rport.io/digging-deeper/commands-and-scripts/tacoscript"
										class="text-primary underline"
										target="_blank"
									>Tacoscript</a> along with the
									RPort client
								</div>
							</label><!---->
						</div>
					</div>
					<div
						data-v-298c7968=""
						class="mt-3 pl-6"
					>
						<p
							data-v-298c7968=""
							class="pb-4 text-sm text-gray-700"
						>
							The pairing service is free and
							secure. No data is stored. There are a lot more options and parameters. <a
								data-v-298c7968=""
								href="https://kb.rport.io/connecting-clients"
								class="text-primary underline"
								target="_blank"
							>Learn more</a>
						</p>
					</div>
				</div>
				<div
					data-v-298c7968=""
					class="flex w-auto bg-white py-0"
				>
					<div
						data-v-298c7968=""
						class="flex max-w-full flex-wrap"
					>
						<div
							data-v-298c7968=""
							class="w-full max-w-full"
						>
							<div
								data-v-298c7968=""
								class="flex items-center justify-between px-2 py-2"
							>
								<span
									data-v-298c7968=""
									class="text-sm font-bold capitalize text-black-087"
								>linux</span>
								<div class="inline-flex w-max cursor-pointer ml-3">
									<button
										data-v-298c7968=""
										class="hover:opacity-80 px-4 py-2 text-sm text-primary rounded inline-flex items-center duration-200 focus:outline-none hover:bg-primary-plain-hover focus:border-none focus:outline-none"
										type="button"
									>
										<!---->
										<svg
											data-v-ca945699=""
											data-v-298c7968=""
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											class="icon"
											width="16px"
											height="16px"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
											/>
										</svg>
										<span
											data-v-298c7968=""
											class="ml-2 text-sm uppercase"
										>Copy to Clipboard</span>
									</button>
								</div>
							</div>
							<div
								data-v-298c7968=""
								class="max-w-full"
							>
								<div
									data-v-298c7968=""
									class="core-code-editor line-numbers my-0 min-h-[42px] bg-gray-700"
								>
									<!--- EDITOR --->
								</div>
							</div>
						</div>
						<div
							data-v-298c7968=""
							class="w-full max-w-full"
						>
							<div
								data-v-298c7968=""
								class="flex items-center justify-between px-2 py-2"
							>
								<span
									data-v-298c7968=""
									class="text-sm font-bold capitalize text-black-087"
								>windows</span>
								<div class="inline-flex w-max cursor-pointer ml-3">
									<button
										data-v-298c7968=""
										class="hover:opacity-80 px-4 py-2 text-sm text-primary rounded inline-flex items-center duration-200 focus:outline-none hover:bg-primary-plain-hover focus:border-none focus:outline-none"
										type="button"
									>
										<!---->
										<svg
											data-v-ca945699=""
											data-v-298c7968=""
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											aria-hidden="true"
											role="img"
											class="icon"
											width="16px"
											height="16px"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
											/>
										</svg>
										<span
											data-v-298c7968=""
											class="ml-2 text-sm uppercase"
										>Copy to Clipboard</span>
									</button>
								</div>
							</div>
							<div
								data-v-298c7968=""
								class="max-w-full"
							>
								<div
									data-v-298c7968=""
									class="core-code-editor line-numbers my-0 min-h-[42px] bg-gray-700"
								>
									<!---- EDITOR --->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Modal>
</template>

<script setup lang="ts">
const props = defineProps({
	is_active: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['close', 'save']);

const closeModal = () => {
	emit('close');
};
const save = () => {
	emit('save', client.value);
};
</script>
