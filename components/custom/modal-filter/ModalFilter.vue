<template>
	<BaseModal v-model="internalIsOpen">
		<div
			class="relative z-20 w-full max-w-screen-xl items-center rounded border border-slate-400 bg-gray-100 px-5 py-10 text-theme-inverted-lighter shadow dark:bg-slate-800"
		>
			<form>
				<div
					class="relative z-50 flex w-full gap-2"
				>
					<div
						class="flex flex-col toolbar-search w-full md:w-2/3"
					>
						<div class="relative mt-1 flex w-full flex-col">
							<input
								id="ZmCZSffyDh"
								class="input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
								placeholder=" "
								type="text"
								autocomplete="off"
							><label
								class="bg-theme-light text-theme-inverted-lighter focus:bg-theme-lighter absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-sm font-normal"
								for="ZmCZSffyDh"
							>Search clients by name, ip4 or ID</label>
						</div><!----><!---->
					</div>
					<div
						class="flex w-full items-center rounded border border-slate-400 bg-theme-dark px-2 text-primary md:w-1/3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20px"
							height="20px"
							viewBox="0 0 24 24"
							class="icon mr-1 text-current"
						><path
							fill="currentColor"
							d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z"
						/></svg>
						<span>All</span>
					</div>
				</div>
				<div
					class="mt-0.5 px-0 pt-2.5"
				>
					<div
						class="flex items-center gap-4 py-2 pr-4"
					>
						<div>
							Connection state
						</div>
						<div
							class="flex items-center gap-2"
						>
							<input
								id="connection_state-any"
								type="radio"
								name="connection_state"
								class="h-4 w-4 border-theme-border focus:ring-2 focus:ring-blue-300"
								value="any"
							><label
								for="connection_state-any"
								class="block text-sm font-medium text-gray-900 dark:text-slate-200"
							>any</label>
						</div>
						<div
							class="flex items-center gap-2"
						>
							<input
								id="connection_state-connected"
								type="radio"
								name="connection_state"
								class="h-4 w-4 border-theme-border focus:ring-2 focus:ring-blue-300"
								value="connected"
							><label
								for="connection_state-connected"
								class="block text-sm font-medium text-gray-900 dark:text-slate-200"
							>connected</label>
						</div>
						<div
							class="flex items-center gap-2"
						>
							<input
								id="connection_state-disconnected"
								type="radio"
								name="connection_state"
								class="h-4 w-4 border-theme-border focus:ring-2 focus:ring-blue-300"
								value="disconnected"
							><label
								for="connection_state-disconnected"
								class="block text-sm font-medium text-gray-900 dark:text-slate-200"
							>disconnected</label>
						</div>
					</div>
					<div
						class="flex items-center gap-4 py-2 pr-4"
					>
						<div>
							Match by
						</div>
						<div
							class="flex items-center gap-2"
						>
							<input
								id="match_by-begins_with"
								type="radio"
								name="match_by"
								class="h-4 w-4 border-theme-border focus:ring-2 focus:ring-blue-300"
								value="begins_with"
							>
							<label
								for="match_by-begins_with"
								class="block text-sm font-medium text-gray-900 dark:text-slate-200"
							>begins with</label>
						</div>
						<div
							class="flex items-center gap-2"
						>
							<input
								id="match_by-ends_with"
								type="radio"
								name="match_by"
								class="h-4 w-4 border-theme-border focus:ring-2 focus:ring-blue-300"
								value="ends_with"
							><label
								for="match_by-ends_with"
								class="block text-sm font-medium text-gray-900 dark:text-slate-200"
							>ends with</label>
						</div>
						<div
							class="flex items-center gap-2"
						>
							<input
								id="match_by-exact"
								type="radio"
								name="match_by"
								class="h-4 w-4 border-theme-border focus:ring-2 focus:ring-blue-300"
								value="exact"
							><label
								for="match_by-exact"
								class="block text-sm font-medium text-gray-900 dark:text-slate-200"
							>exact</label>
						</div>
						<div
							class="flex items-center gap-2"
						>
							<input
								id="match_by-word_in_word"
								type="radio"
								name="match_by"
								class="h-4 w-4 border-theme-border focus:ring-2 focus:ring-blue-300"
								value="word_in_word"
							><label
								for="match_by-word_in_word"
								class="block text-sm font-medium text-gray-900 dark:text-slate-200"
							>word in word</label>
						</div>
					</div>
					<div
						class="flex items-center justify-end gap-2 pt-3"
					>
						<button
							class="bg-vtd-secondary-600 hover:bg-vtd-secondary-400 focus-visible:outline-vtd-secondary-600 disabled:bg-vtd-secondary-600/40 disabled:hover:bg-vtd-secondary-600/40 disabled:focus-visible:outline-vtd-secondary-600/40 text-white disabled:text-gray-600 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							type="button"
							@click="close"
						>
							<!----><!----><span class="flex items-center justify-center gap-x-2"><!----> Cancel </span>
						</button>
						<button
							class="bg-vtd-primary-500 hover:bg-vtd-primary-700 focus-visible:outline-vtd-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							type="submit"
						>
							<!----><!----><span class="flex items-center justify-center gap-x-2"><!----> Apply </span>
						</button>
					</div>
				</div>
			</form>
		</div>
	</BaseModal>
</template>

<script setup lang="ts">
import { BaseModal } from '~/components/ui/base-modal';

const props = defineProps({
	modelValue: Boolean,
});
const emit = defineEmits(['update:modelValue']);
const internalIsOpen = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
	internalIsOpen.value = newValue;
});

const save = () => {
	internalIsOpen.value = false;
};
const close = () => {
	internalIsOpen.value = false;
};
</script>

<style scoped>
.info {
  max-width: calc(100% - 30px)
}

.toolbar-search>div {
  margin-top: 0
}

.toolbar-search .input-text {
  --tw-border-opacity: 1;
  border-color: #94a3b8;
  border-color: rgb(148 163 184/var(--tw-border-opacity));
  border-radius: .25rem
}
</style>
