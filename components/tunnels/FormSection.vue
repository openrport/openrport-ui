<template>
	<div
		class="flex items-center"
		:class="{ 'mt-6': !isFirst }"
	>
		<div
			class="primary flex h-7 w-7 items-center justify-center rounded-full text-sm text-white"
		>
			{{ number }}
		</div>
		<p class="ml-3 text-sm text-slate-800 dark:text-slate-50">
			{{ title }}
		</p>
	</div>
	<div class="ml-9 mt-1">
		<slot />
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	number: string | number;
	title: string;
	isFirst?: boolean;
}>();
</script>

<style scoped>

</style>
