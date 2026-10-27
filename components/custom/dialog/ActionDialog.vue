<template>
	<BaseModal
		:model-value="open"
		@update:model-value="open = $event"
	>
		<div
			:class="['mx-auto flex h-full max-h-full w-full items-center justify-center', size]"
			@keydown.esc="open = false"
		>
			<div class="relative flex max-h-full w-full transform flex-col rounded bg-theme text-left text-theme-inverted shadow-xl transition-all">
				<div class="flex items-center justify-between border-b border-theme-light bg-theme p-3">
					<h3 class="mr-2 font-medium leading-6 text-theme-inverted">
						{{ title }}
					</h3>
					<button
						type="button"
						class="inline-flex items-center rounded-full p-1 primary-text duration-200 focus:outline-none"
						title="Close"
						@click="open = false"
					>
						<IconX :size="18" />
					</button>
				</div>
				<slot name="toolbar" />
				<div class="overflow-y-auto">
					<slot />
				</div>
				<div class="flex items-center justify-end bg-theme-dark px-3 py-2">
					<button
						class="px-4 py-2 text-sm rounded inline-flex items-center duration-200 focus:outline-none primary-text hover:opacity-80"
						type="button"
						@click="open = false"
					>
						Cancel
					</button>
					<slot name="actions" />
				</div>
			</div>
		</div>
	</BaseModal>
</template>

<script setup lang="ts">
import { IconX } from '@tabler/icons-vue';
import { BaseModal } from '~/components/ui/base-modal';

withDefaults(defineProps<{
	title: string;
	size?: string;
}>(), {
	size: 'sm:w-[70%]',
});

const open = defineModel<boolean>({ required: true });
</script>
