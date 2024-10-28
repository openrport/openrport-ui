<template>
	<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
		<div class="flex max-h-16 flex-1 content-center items-center">
			<h3
				class="text-xl font-semibold leading-7 text-slate-900 dark:text-slate-50"
			>
				Add tunnel
			</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-500" />
		</div>
		<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
			<button
				class="bg-vtd-secondary-600 hover:bg-vtd-secondary-400 focus-visible:outline-vtd-secondary-600 disabled:bg-vtd-secondary-600/40 disabled:hover:bg-vtd-secondary-600/40 disabled:focus-visible:outline-vtd-secondary-600/40 text-white disabled:text-gray-600 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				type="button"
				@click="handleCancel"
			>
				<!----><!----><span class="flex items-center justify-center gap-x-2"><!---->
					<!----> Cancel</span>
			</button><!---->
		</div>
	</div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
	cancel: [];
}>();
const handleCancel = () => {
	emits('cancel');
};
</script>

<style scoped>

</style>
