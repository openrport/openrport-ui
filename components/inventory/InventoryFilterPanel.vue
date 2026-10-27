<template>
	<div v-if="open">
		<div
			class="fixed inset-0 z-30"
			@click="open = false"
		/>
		<div class="absolute right-0 top-full z-40 mt-1 w-[360px] rounded bg-white text-left shadow-lg dark:bg-gray-900">
			<p class="m-0 px-4 pt-4 text-sm">
				Filter clients on the inventory where values <b>start</b> with a search term. To add more filter fields,
				<span
					class="cursor-pointer font-bold text-primary underline"
					@click="emit('customize')"
				>add the column</span>
				to the table first. Multiple criteria are applied with a <b>logical AND</b>.
			</p>
			<div class="flex max-h-[60vh] flex-col space-y-4 overflow-y-auto p-4">
				<input
					v-for="column in columns"
					:key="column.key"
					v-model="draft[column.key]"
					class="primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
					:placeholder="column.label"
					:aria-label="column.label"
					type="text"
					autocomplete="off"
					@keyup.enter="apply"
				>
			</div>
			<div class="flex items-center justify-end gap-4 border-t border-gray-200 p-4">
				<button
					class="rounded px-4 py-2 text-sm uppercase primary-text hover:bg-gray-100"
					type="button"
					@click="clear"
				>
					Clear
				</button>
				<button
					class="rounded bg-primary px-4 py-2 text-sm uppercase text-white hover:opacity-80"
					type="button"
					@click="apply"
				>
					Apply
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { InventoryColumn } from '~/composables/useInventoryColumns';

defineProps<{
	columns: InventoryColumn[];
}>();

const open = defineModel<boolean>('open', { required: true });
const filters = defineModel<Record<string, string>>({ required: true });

const emit = defineEmits<{
	apply: [];
	customize: [];
}>();

// Edits stay local until Apply
const draft = ref<Record<string, string>>({});
watch(open, (isOpen) => {
	if (isOpen) {
		draft.value = { ...filters.value };
	}
});

const apply = () => {
	filters.value = Object.fromEntries(Object.entries(draft.value).filter(([, value]) => value?.trim()));
	open.value = false;
	emit('apply');
};

const clear = () => {
	draft.value = {};
	apply();
};
</script>
