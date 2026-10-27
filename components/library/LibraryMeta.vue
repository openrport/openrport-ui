<template>
	<div class="mt-4 text-xs text-gray-300">
		<div class="flex flex-col">
			<span>Created by</span>
			<p class="text-white">
				{{ createdBy }} at {{ formatUtc(createdAt) }}
			</p>
		</div>
		<div class="mt-1.5 flex flex-col">
			<span>Updated by</span>
			<p class="text-white">
				{{ updatedBy }} at {{ formatUtc(updatedAt) }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	createdBy: string;
	createdAt: string;
	updatedBy: string;
	updatedAt: string;
}>();

// Same "YYYY-MM-DD HH:mm UTC" format as the reference UI
const formatUtc = (date: string) => {
	const parsed = new Date(date);
	return Number.isNaN(parsed.getTime()) ? '' : `${parsed.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
};
</script>
