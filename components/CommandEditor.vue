<template>
	<!--	<div> -->
	<!--		<codemirror -->
	<!--			v-model="code" -->
	<!--			placeholder="Code goes here..." -->
	<!--			class="h-100 text-white" -->
	<!--			:autofocus="true" -->
	<!--			:indent-with-tab="true" -->
	<!--			:tab-size="2" -->
	<!--			@ready="handleReady" -->
	<!--			@change="log('change', $event)" -->
	<!--			@focus="log('focus', $event)" -->
	<!--			@blur="log('blur', $event)" -->
	<!--		/> -->
	<prism-editor
		v-model="codeEdit"
		class="my-editor p-2"
		:highlight="highlighter"
		line-numbers
	/>
<!--	</div> -->
</template>

<script setup lang="ts">
import { PrismEditor } from 'vue-prism-editor';
import { highlight } from 'prismjs/components/prism-core';
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
	return highlight(code, prism.languages.text);
};
// export default defineComponent({
// 	components: {
// 		PrismEditor,
// 		Codemirror,
// 		IconPlayerPlayFilled,
// 		IconClock,
// 	},
// 	props: {
// 		device: {
// 			type: Object,
// 		},
// 	},
// 	setup() {
// 		const code = '';
//
// 		// Codemirror EditorView instance ref
// 		const view = shallowRef();
// 		const handleReady = (payload) => {
// 			view.value = payload.view;
// 		};
//
// 		// Status is available at all times via Codemirror EditorView
// 		// const getCodemirrorStates = () => {
// 		//     const state = view.value.state
// 		//     const ranges = state.selection.ranges
// 		//     const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
// 		//     const cursor = ranges[0].anchor
// 		//     const length = state.doc.length
// 		//     const lines = state.doc.lines
// 		//     // more state info ...
// 		//     // return ...
// 		// }
//
// 		return {
// 			code,
// 			handleReady,
// 			// log: console.log To enable console.log of CommandEditor
// 		};
// 	},
// });
</script>

<style>
.my-editor {
  font-family: Fira code,Fira Mono,Consolas,Menlo,Courier,monospace
}

.prism-editor-wrapper {
  overflow: visible
}

.prism-editor-wrapper .prism-editor__editor,.prism-editor-wrapper .prism-editor__textarea {
  white-space: pre
}

.prism-editor-wrapper .prism-editor__container {
  overflow-x: auto
}

.prism-editor__textarea:focus {
  outline: none
}
</style>
