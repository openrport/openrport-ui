<template>
	<div class="relative">
		<div
			v-if="disabled"
			class="absolute inset-0 z-20 bg-white bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-60"
		/>
		<div ref="editorEl" />
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { Editor } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const props = defineProps<{
	disabled?: boolean;
	height?: string;
}>();

const markdown = defineModel<string>({ default: '' });

const editorEl = ref<HTMLElement | null>(null);
let editor: Editor | null = null;
let unmounted = false;

// Loaded on demand so the editor stays out of the device page bundle
onMounted(async () => {
	const { default: ToastEditor } = await import('@toast-ui/editor');
	if (unmounted || !editorEl.value) {
		return;
	}
	editor = new ToastEditor({
		el: editorEl.value,
		height: props.height || '80vh',
		initialValue: markdown.value,
		initialEditType: 'markdown',
		previewStyle: 'vertical',
		usageStatistics: false,
		autofocus: false,
		toolbarItems: [
			['heading', 'bold', 'italic', 'strike'],
			['hr', 'quote'],
			['ul', 'ol', 'task', 'indent', 'outdent'],
			['table', 'link'],
			['code', 'codeblock'],
			['scrollSync'],
		],
		events: {
			change: () => {
				markdown.value = editor?.getMarkdown() ?? '';
			},
		},
	});
});

onBeforeUnmount(() => {
	unmounted = true;
	editor?.destroy();
	editor = null;
});

// Replaces the content without going through the model, e.g. when another document is opened
const setMarkdown = (value: string) => {
	editor?.setMarkdown(value, false);
};

defineExpose({ setMarkdown });
</script>
