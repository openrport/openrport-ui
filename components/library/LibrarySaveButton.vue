<template>
	<div
		ref="root"
		class="relative inline-flex rounded-l-md"
	>
		<button
			:class="[buttonClass, { 'rounded-r-none': !saveOnly }]"
			:disabled="disabled"
			type="button"
			@click="emit('save')"
		>
			Save
		</button>
		<button
			v-if="!saveOnly"
			:class="[buttonClass, 'rounded-l-none border-l border-black/20 !px-1']"
			:disabled="disabled"
			type="button"
			title="More save options"
			@click="menuOpen = !menuOpen"
		>
			<IconChevronDown :size="16" />
		</button>
		<div
			v-if="menuOpen"
			class="absolute left-0 top-full z-30 mt-1 flex w-36 flex-col rounded bg-white py-1 text-sm text-gray-800 shadow-lg"
		>
			<button
				class="px-3 py-1.5 text-left hover:bg-gray-100"
				type="button"
				@click="select('save')"
			>
				Save
			</button>
			<button
				class="px-3 py-1.5 text-left hover:bg-gray-100"
				type="button"
				@click="select('saveAsNew')"
			>
				Save as new
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconChevronDown } from '@tabler/icons-vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps<{
	disabled: boolean;
	saveOnly: boolean;
}>();

const emit = defineEmits<{
	save: [];
	saveAsNew: [];
}>();

const root = ref<HTMLElement | null>(null);
const menuOpen = ref(false);
onClickOutside(root, () => {
	menuOpen.value = false;
});

const buttonClass = computed(() => [
	'px-4 py-2 text-sm text-black rounded inline-flex items-center justify-center duration-200 focus:outline-none secondary',
	props.disabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-80',
]);

const select = (action: 'save' | 'saveAsNew') => {
	menuOpen.value = false;
	if (action === 'save') {
		emit('save');
	}
	else {
		emit('saveAsNew');
	}
};
</script>
