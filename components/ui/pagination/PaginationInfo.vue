<template>
	<div class="flex items-center justify-between">
		<span class="text-xs text-gray-500">
			Showing <span class="font-medium">{{ startItem }}</span> to
			<span class="font-medium">{{ endItem }}</span> of
			<span class="font-medium">{{ totalItems }}</span> results
		</span>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	page: {
		type: Number,
		required: true,
	},
	itemsPerPage: {
		type: Number,
		required: true,
	},
	totalItems: {
		type: Number,
		required: true,
	},
	currentPageItemCount: {
		type: Number,
		required: true,
	},
});
const startItem = computed(() => 1 + (props.page * props.itemsPerPage));
const endItem = computed(() => Math.min(startItem.value + props.currentPageItemCount - 1, props.totalItems));
</script>
