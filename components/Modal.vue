<template>
	<Teleport to="body">
		<div
			v-if="modelValue"
			class="fixed inset-0 z-[100] bg-slate-100/75 backdrop-blur-sm transition-opacity dark:bg-slate-800/90"
		/>
		<div
			v-if="modelValue"
			class="fixed inset-0 z-[200] flex items-center justify-center rounded-lg py-5 transition"
		>
			<div
				class="sm:max-w-2xl mx-auto flex h-full max-h-full w-full items-center justify-center rounded-md"
				@click.stop
			>
				<div
					class="relative max-h-full transform rounded-lg border border-gray-300 bg-white text-left shadow-xl ring-1 ring-black ring-opacity-5 transition-all dark:border-gray-700 dark:bg-slate-900 sm:w-full sm:rounded-lg"
				>
					<div
						class="flex items-center justify-between rounded-t-md border-b border-gray-300 p-3 dark:border-gray-700 dark:bg-slate-950"
					>
						<h3
							class="mr-2 text-2xl font-medium leading-6 text-theme-inverted"
						>
							{{ title }}
						</h3>
						<button
							class="bg-vtd-primary-200/20 dark:bg-primary-800/20 hover:bg-vtd-primary-200/80 dark:hover:bg-vtd-primary-800/80  focus-visible:outline-vtd-primary-600/80 disabled:bg-gray-400/80 disabled:hover:bg-gray-400/80 disabled:focus-visible:outline-gray-400/80 text-primary-600 hover:textprimary-800 dark:hover:text-primary-600 disabled:text-gray-500 cursor-pointer rounded-full p-2.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							type="button"
							@click="closeModal"
						>
							<!----><!----><span class="flex items-center justify-center gap-x-2"><!----><svg
								xmlns="http://www.w3.org/2000/svg"
								width="18px"
								height="18px"
								viewBox="0 0 24 24"
								class="icon"
							><path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"
							/></svg></span>
						</button>
					</div>
					<div
						class="p-3 overflow-y-auto modal-height relative h-full max-h-full min-h-[280px] transition-all dark:text-slate-200"
					>
						<slot />
					</div>
					<div
						class="flex items-center justify-end rounded-b-md border-t border-gray-300 bg-gray-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-950"
					>
						<button
							v-if="showCancel"
							class="bg-vtd-secondary-600 hover:bg-vtd-secondary-400 focus-visible:outline-vtd-secondary-600 disabled:bg-vtd-secondary-600/40 disabled:hover:bg-vtd-secondary-600/40 disabled:focus-visible:outline-vtd-secondary-600/40 text-white disabled:text-gray-600 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							type="button"
							@click="onCancel"
						>
							<!----><!----><span class="flex items-center justify-center gap-x-2"><!---->{{ cancelText }}</span>
						</button>
						<div
							class="flex-1"
						/>
						<button
							class="bg-vtd-primary-500 hover:bg-vtd-primary-700 focus-visible:outline-vtd-primary-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							type="button"
							@click="onOk"
						>
							<!----><!----><span class="flex items-center justify-center gap-x-2"><!---->{{ okText }}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
	modelValue: boolean;
	title: string;
	okText?: string;
	cancelText?: string;
	showCancel?: boolean;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
	(e: 'ok'): void;
	(e: 'cancel'): void;
	(e: 'close'): void;
}>();

const closeModal = () => {
	emit('update:modelValue', false);
	emit('close');
};

const onOk = () => {
	emit('ok');
};

const onCancel = () => {
	emit('cancel');
	closeModal();
};
</script>

