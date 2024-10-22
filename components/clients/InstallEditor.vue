<template>
	<div class="core-code-editor line-numbers my-0 min-h-[42px] bg-gray-700">
		<prism-editor
			v-model="codeEdit"
			class="my-editor p-2"
			:highlight="highlighter"
			line-numbers
		/>
	</div>
</template>

<script setup lang="ts">
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const props = defineProps({
	code: {
		type: String,
	},
});
const codeEdit = ref(props.code);

watch(() => props.code, (newData) => {
	codeEdit.value = newData;
}, { deep: true });
const highlighter = (code: string) => {
	return highlight(code, prism.languages.plain);
};
</script>

<style scoped>
.my-editor {
    font-family: Fira code,Fira Mono,Consolas,Menlo,Courier,monospace
}

.prism-editor__textarea:focus {
    outline: none
}
.core-code-editor {
    --tw-text-opacity: 1;
    color: #fff;
    color: rgb(255 255 255/var(--tw-text-opacity));
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: .5rem;
    padding-top: .5rem
}
</style>
