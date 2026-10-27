<template>
	<div class="flex h-[55px] items-center justify-between border-t border-[#133B66] bg-[#224A75] p-2 shadow-md">
		<div>
			<button
				:class="['px-4 py-2 text-sm text-black rounded inline-flex items-center duration-200 focus:outline-none bg-slate-100',
					disabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-80']"
				:disabled="disabled"
				type="button"
				@click="emit('schedule')"
			>
				<IconClock
					:size="24"
					class="mr-2"
				/>
				<span class="pr-2">Schedule</span>
			</button>
		</div>
		<div class="flex items-center">
			<div class="flex flex-col mr-6">
				<label class="flex cursor-pointer select-none items-center justify-start text-sm text-gray-200">
					<input
						v-model="abortOnError"
						type="checkbox"
						:class="checkboxClass"
					>Abort on error</label>
			</div>
			<div class="flex flex-col mr-6">
				<label class="flex cursor-pointer select-none items-center justify-start text-sm text-gray-200">
					<input
						v-model="executeConcurrently"
						type="checkbox"
						:class="checkboxClass"
					>Execute concurrently</label>
			</div>
			<span class="mr-4 text-xs text-gray-300">(CMD + ENTER)</span>
			<button
				:class="['px-4 py-2 text-sm text-black rounded inline-flex items-center duration-200 focus:outline-none bg-[#C6F94C]',
					disabled || loading ? 'cursor-not-allowed opacity-50' : 'hover:opacity-80']"
				:disabled="disabled || loading"
				type="button"
				@click="emit('execute')"
			>
				<IconLoader2
					v-if="loading"
					:size="24"
					class="mr-2 animate-spin"
				/>
				<IconCircleCaretRight
					v-else
					:size="24"
					class="mr-2"
				/>
				<span class="pr-2">Execute</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconCircleCaretRight, IconClock, IconLoader2 } from '@tabler/icons-vue';

defineProps<{
	disabled: boolean;
	loading: boolean;
}>();

const emit = defineEmits<{
	execute: [];
	schedule: [];
}>();

const abortOnError = defineModel<boolean>('abortOnError', { default: true });
const executeConcurrently = defineModel<boolean>('executeConcurrently', { default: false });

const checkboxClass = 'mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 text-transparent';
</script>
