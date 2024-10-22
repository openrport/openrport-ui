<template>
	<div
		class="flex w-auto bg-white flex-col py-0"
	>
		<div
			class="flex max-w-full flex-wrap"
		>
			<div
				class="w-full max-w-full"
			>
				<div
					class="flex items-center justify-between px-2 py-2"
				>
					<span
						class="text-sm font-bold capitalize text-black-087"
					>linux</span>
					<div class="inline-flex w-max cursor-pointer ml-3">
						<button
							class="hover:opacity-80 px-4 py-2 text-sm text-primary rounded inline-flex items-center duration-200 focus:outline-none hover:bg-primary-plain-hover focus:border-none focus:outline-none"
							type="button"
						>
							<!---->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="icon"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
							/></svg>
							<span
								class="ml-2 text-sm uppercase"
							>Copy to Clipboard</span>
						</button>
					</div>
				</div>
				<div
					class="max-w-full"
				>
					<InstallEditor
						:code="linuxCode"
						language="bash"
						:disabled="disabled"
					/>
				</div>
			</div>
			<div
				class="w-full max-w-full"
			>
				<div
					class="flex items-center justify-between px-2 py-2"
				>
					<span
						class="text-sm font-bold capitalize text-black-087"
					>windows</span>
					<div class="inline-flex w-max cursor-pointer ml-3">
						<button
							class="hover:opacity-80 px-4 py-2 text-sm text-primary rounded inline-flex items-center duration-200 focus:outline-none hover:bg-primary-plain-hover focus:border-none focus:outline-none"
							type="button"
						>
							<!---->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								class="icon"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
							/></svg>
							<span
								class="ml-2 text-sm uppercase"
							>Copy to Clipboard</span>
						</button>
					</div>
				</div>
				<div
					class="max-w-full"
				>
					<InstallEditor :code="windowsCode" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import InstallEditor from '~/components/clients/InstallEditor.vue';

interface Props {
	linuxCode: string;
	windowsCode: string;
	disabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	disabled: false,
});

const emit = defineEmits<{
	'copy-linux': [code: string];
	'copy-windows': [code: string];
}>();
</script>
