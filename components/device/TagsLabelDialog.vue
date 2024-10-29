<template>
	<Modal
		v-model="internalIsOpen"
		title="Tags & Labels"
		ok-text="Close"
		cancel-text="Cancel"
		:show-cancel="true"
		@close="close"
		@ok="save"
	>
		<div
			class="relative w-full"
		>
			<div
				v-if="isLoading"
				class="flex w-full justify-center border-theme-light-inverted absolute inset-0 z-30 flex items-center justify-center border-t bg-theme bg-opacity-70 py-6"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="36px"
					height="36px"
					viewBox="0 0 24 24"
					class="icon primary-text animate-[spin_0.6s_linear_infinite]"
				>
					<path
						fill="currentColor"
						d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
						opacity=".25"
					/>
					<path
						fill="currentColor"
						d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
					>
						<animateTransform
							attributeName="transform"
							dur="0.75s"
							repeatCount="indefinite"
							type="rotate"
							values="0 12 12;360 12 12"
						/>
					</path>
				</svg>
			</div>

			<div class="flex w-full flex-wrap items-start gap-5 md:flex-nowrap md:gap-6">
				<div class="flex w-full flex-wrap gap-y-0.5 md:w-1/2 lg:gap-y-1">
					<div class="flex w-full items-center gap-x-4 pb-4 text-sm font-medium text-primary">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								class="icon"
							>
								<g
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
								>
									<path
										d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"
									/><path
										d="M6 6h.008v.008H6V6Z"
									/></g>
							</svg> Tags
						</span>
						<button
							type="button"
							class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
						>
							<span
								class="flex items-center justify-center"
								style="width: 22px; height: 22px;"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 256 256"
								class="icon cursor-pointer"
							><path
								fill="currentColor"
								d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8Z"
							/></svg>
							</span>
						</button>
					</div>
					<div
						v-for="(tag, index) in modelValueClient?.tags"
						:key="index"
						class="flex w-full flex-wrap gap-1 text-sm font-normal lg:gap-1.5"
					>
						<div class="flex h-8 w-full items-center justify-between space-x-2">
							<span
								class="bg-vtd-primary-50 dark:bg-vtd-primary-500/10 text-vtd-primary-700 dark:text-vtd-primary-400 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"
							><!----><span>
									<svg

										xmlns="http://www.w3.org/2000/svg"
										width="16px"
										height="16px"
										viewBox="0 0 24 24"
										class="icon"
									>
										<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
										><path
											d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"
										/><path
											d="M6 6h.008v.008H6V6Z"
										/>
										</g>
									</svg>
								</span>
								<span>{{ tag }}</span>
								<!---->
							</span>
							<span
								class="flex items-center space-x-1 text-primary"
							>
								<button
									type="button"
									class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
									@click="editTag(tag)"
								>
									<span
										class="flex items-center justify-center"
										style="width: 16px; height: 16px;"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16px"
											height="16px"
											viewBox="0 0 24 24"
											class="icon cursor-pointer"
										><path
											fill="currentColor"
											d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
										/>
										</svg>
									</span>
								</button>
								<button
									type="button"
									class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
								>
									<span
										class="flex items-center justify-center"
										style="width: 16px; height: 16px;"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16px"
											height="16px"
											viewBox="0 0 24 24"
											class="icon cursor-pointer"
										>
											<g fill="none">
												<path
													d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
												/><path
													fill="currentColor"
													d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
												/>
											</g>
										</svg>
									</span>
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="flex w-full flex-wrap gap-y-0.5 md:w-1/2 lg:gap-y-1">
					<div class="flex w-full items-center gap-x-4 pb-4 text-sm font-medium text-primary">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								class="icon"
							>
								<g
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
								>
									<path
										d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"
									/><path
										d="M6 6h.008v.008H6V6Z"
									/></g></svg> Labels </span>
						<button
							type="button"
							class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
						>
							<span
								class="flex items-center justify-center"
								style="width: 22px; height: 22px;"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24px"
									height="24px"
									viewBox="0 0 256 256"
									class="icon cursor-pointer"
								><path
									fill="currentColor"
									d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8Z"
								/>
								</svg>
							</span>
						</button>
					</div>
					<div class="flex w-full flex-wrap gap-1 text-sm font-normal lg:gap-1.5">
						<div class="flex h-8 w-full items-center justify-between space-x-2">
							<span
								class="bg-vtd-primary-50 dark:bg-vtd-primary-500/10 text-vtd-primary-700 dark:text-vtd-primary-400 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 pr-2 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"
							><!----><span
								class="bg-vtd-primary-500 dark:bg-vtd-primary-500 text-vtd-primary-200 dark:text-vtd-primary-200 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 px-2 py-1 rounded-l"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								class="icon"
							>
								<g
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
								>
									<path
										d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"
									/><path
										d="M6 6h.008v.008H6V6Z"
									/></g></svg> city</span><span>Lille</span><!----></span><span
								class="flex items-center space-x-1 text-primary"
							><button
									type="button"
									class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
								>
									<span
										class="flex items-center justify-center"
										style="width: 16px; height: 16px;"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16px"
											height="16px"
											viewBox="0 0 24 24"
											class="icon cursor-pointer"
										>
											<path
												fill="currentColor"
												d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
											/>
										</svg>
									</span>
								</button>
								<button
									type="button"
									class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
								>
									<span
										class="flex items-center justify-center"
										style="width: 16px; height: 16px;"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16px"
											height="16px"
											viewBox="0 0 24 24"
											class="icon cursor-pointer"
										>
											<g fill="none">
												<path
													d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
												/><path
													fill="currentColor"
													d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
												/></g>
										</svg>
									</span>
								</button>
							</span>
						</div>
						<div class="flex h-8 w-full items-center justify-between space-x-2">
							<span
								class="bg-vtd-primary-50 dark:bg-vtd-primary-500/10 text-vtd-primary-700 dark:text-vtd-primary-400 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 pr-2 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"
							><!----><span
								class="bg-vtd-primary-500 dark:bg-vtd-primary-500 text-vtd-primary-200 dark:text-vtd-primary-200 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 px-2 py-1 rounded-l"
							><svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								class="icon"
							><g
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							><path
								d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"
							/><path
								d="M6 6h.008v.008H6V6Z"
							/></g></svg> country</span><span>France</span><!----></span><span
								class="flex items-center space-x-1 text-primary"
							><button
								type="button"
								class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
							><span
								class="flex items-center justify-center"
								style="width: 16px; height: 16px;"
							><svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								class="icon cursor-pointer"
							><path
								fill="currentColor"
								d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
							/></svg></span></button><button
								type="button"
								class="inline-flex items-center duration-200 focus:outline-none rounded-full p-0"
							><span
								class="flex items-center justify-center"
								style="width: 16px; height: 16px;"
							><svg
								data-v-ca945699=""
								xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								class="icon cursor-pointer"
							><g fill="none"><path
								d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
							/><path
								fill="currentColor"
								d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
							/></g></svg></span></button></span>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full py-8">
				<form
					v-if="isEdittingTag"
					class="flex w-full items-start gap-1"
				>
					<div class="flex flex-col -mt-1 w-full text-primary">
						<div class="relative mt-1 flex w-full flex-col">
							<input
								id="Vd20DgVXFS"
								v-model="currentTag"
								class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
								placeholder=" "
								type="text"
								autocomplete="off"
							><label
								class="absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
								for="Vd20DgVXFS"
							>Tag Name</label>
						</div><!----><!---->
					</div>
					<button
						class="bg-vtd-primary-500 hover:bg-vtd-primary-700 focus-visible:outline-vtd-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						type="submit"
					>
						<!----><!----><span class="flex items-center justify-center gap-x-2">{{ isEdittingTag ? 'Save' : 'Add' }}</span>
					</button>
				</form>
			</div>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import { useClientDetail } from '~/composables/useClientDetail';

const props = defineProps({
	modelValue: Boolean,
	modelValueClient: Object,
});
const emit = defineEmits(['update:modelValue', 'update:modelValueClient', 'save']);
const internalIsOpen = ref(props.modelValue);
const internalClient = ref(props.modelValueClient);
const isLoading = ref(false);
const currentTag = ref('');
const isUpdatingTag = ref(false);
const isEdittingTag = ref(false);

const editTag = (tag: string) => {
	currentTag.value = tag;
	isEdittingTag.value = true;
};

watch(() => props.modelValue, (newValue) => {
	internalIsOpen.value = newValue;
});

watch(() => props.modelValueClient, (newValue) => {
	internalClient.value = newValue;
});

watch(internalIsOpen, (newValue) => {
	emit('update:modelValue', newValue);
});
watch(internalClient, (newClient) => {
	emit('update:modelValueClient', newClient);
});
const save = () => {
	internalIsOpen.value = false;
};
const close = () => {
	internalIsOpen.value = false;
};
</script>

<style scoped>

</style>
