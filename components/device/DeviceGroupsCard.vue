<template>
	<div
		class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900"
	>
		<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
			<div class="flex max-h-16 flex-1 content-center items-center">
				<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
					Groups
				</h3>
				<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500" />
			</div>
		</div>
		<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
			<div class="h-full w-full">
				<div class="flex flex-wrap gap-0.5 lg:gap-1">
					<span
						v-for="group in groups"
						class="bg-primary-50 dark:bg-primary-500/10 text-primary-800 dark:text-primary-400 ring-primary-800/20 dark:ring-primary-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset"
					><span><svg
							data-v-ca945699=""
							xmlns="http://www.w3.org/2000/svg"
							width="16px"
							height="16px"
							viewBox="0 0 2048 2048"
							class="icon"
						>
							<path
								fill="currentColor"
								d="M1664 1536h-128v-128h128v128zm-256 0h-128v-128h128v128zm256-512h-128V896h128v128zm-256 0h-128V896h128v128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15h1408zm64 1152H256v384h1536v-384zm0-512H256v384h1536V768zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320h1536zm-256-256h128v128h-128V384zm-256 0h128v128h-128V384z"
							/>
						</svg>
						</span>
						<span>{{ group }}</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { IconTag, IconServer } from '@tabler/icons-vue';

const props = defineProps({
	groups: {
		type: Array,
	},
});
</script>

<style></style>
