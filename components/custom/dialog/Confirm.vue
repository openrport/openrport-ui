<template>
	<Modal
		:is-active="is_active"
		title="Please confirm !"
		save-button-text="Ok"
		@close="cancel"
		@save="confirm"
	>
		<div
			class="tw-p-3 tw-overflow-y-auto tw-modal-height tw-relative tw-h-full tw-max-h-full tw-min-h-[280px] tw-transition-all dark:tw-text-gray-200"
		>
			<div
				class="tw-absolute tw-inset-0 tw-flex tw-h-full tw-min-h-[240px] tw-flex-col tw-items-center tw-justify-center tw-p-8 tw-text-center"
			>
				<slot />
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
const emit = defineEmits(['confirm', 'cancel']);

const confirm = () => {
	emit('confirm');
};

const cancel = () => {
	emit('cancel');
};
</script>
