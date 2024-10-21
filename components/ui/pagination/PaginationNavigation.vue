<template>
	<div class="flex w-full max-w-[90px] items-center justify-between">
		<button
			:disabled="page === 0"
			class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-vtd-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
			@click="$emit('previous')"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
				class="h-6 w-6"
			>
				<path
					fill-rule="evenodd"
					d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<button
			:disabled="disabledNext"
			class="rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-vtd-primary-600 disabled:cursor-not-allowed disabled:text-gray-300 hover:disabled:bg-transparent hover:dark:bg-gray-900 disabled:dark:text-gray-700 hover:dark:disabled:bg-transparent"
			@click="$emit('next')"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
				class="h-6 w-6"
			>
				<path
					fill-rule="evenodd"
					d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</template>

<script setup>
defineProps({
	page: {
		type: Number,
		required: true,
	},
	disabledNext: {
		type: Boolean,
		required: true,
	},
});

defineEmits(['previous', 'next']);
</script>
