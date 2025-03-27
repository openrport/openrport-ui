<template>
	<div
		class="flex flex-col mt-1"
	>
		<label
			class="text-sm font-normal text-white"
		>Tags</label>
		<TagsInput
			:model-value="modelValue"
			class="mt-1 flex min-h-[40px] flex-wrap overflow-hidden rounded border border-white"
			@update:model-value="$emit('update:modelValue', $event)"
		>
			<TagsInputItem
				v-for="item in modelValue"
				:key="item"
				class="inline-flex items-center bg-gray-100 px-2 py-0.5 text-sm text-gray-800 rounded m-1 flex w-max"
				:value="item"
			>
				<TagsInputItemText />
			</TagsInputItem>
			<TagsInputInput
				class="flex-auto border-none bg-transparent p-2 text-sm text-white placeholder-gray-300 outline-none"
				placeholder="Add a tag by typing"
				@input="handleInput"
			/>
		</TagsInput><!---->
		<p
			v-if="currentInput.length > 0 && modelValue.length == 0"
			class="mt-1 pl-1 text-xs text-gray-300"
		>
			Press ENTER to add this tag
		</p>
		<p
			v-if="modelValue.length > 0"
			class="mt-1 pl-1 text-xs text-gray-300"
		>
			Press BACKSPACE to remove the last tag
		</p>
		<!---->
	</div>
</template>

<script setup lang="ts">
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemText } from '~/components/ui/tags-input';

const props = defineProps({
	modelValue: {
		type: Array as () => string[],
		default: () => [],
	},
});
const emit = defineEmits(['update:modelValue']);

const currentInput = ref<string>('');
const handleInput = (event: Event) => {
	currentInput.value = (event.target as HTMLInputElement).value;
};
</script>
