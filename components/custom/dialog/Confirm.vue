<template>
	<Modal
		:is-active="is_active"
		title="Please confirm !"
		save-button-text="Ok"
		@close="cancel"
		@save="confirm"
	>
		<div
			class="p-3 overflow-y-auto modal-height relative h-full max-h-full min-h-[280px] transition-all dark:text-gray-200"
		>
			<div
				class="absolute inset-0 flex h-full min-h-[240px] flex-col items-center justify-center p-8 text-center"
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
