<template>
	<div>
		<codemirror
			v-model="code"
			placeholder="Code goes here..."
			class="h-100 text-white"
			:autofocus="true"
			:indent-with-tab="true"
			:tab-size="2"
			@ready="handleReady"
			@change="log('change', $event)"
			@focus="log('focus', $event)"
			@blur="log('blur', $event)"
		/>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { IconPlayerPlayFilled, IconClock } from '@tabler/icons-vue';

export default defineComponent({
	components: {
		Codemirror,
		IconPlayerPlayFilled,
		IconClock,
	},
	props: {
		device: {
			type: Object,
		},
	},
	setup() {
		const code = '';

		// Codemirror EditorView instance ref
		const view = shallowRef();
		const handleReady = (payload) => {
			view.value = payload.view;
		};

		// Status is available at all times via Codemirror EditorView
		// const getCodemirrorStates = () => {
		//     const state = view.value.state
		//     const ranges = state.selection.ranges
		//     const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
		//     const cursor = ranges[0].anchor
		//     const length = state.doc.length
		//     const lines = state.doc.lines
		//     // more state info ...
		//     // return ...
		// }

		return {
			code,
			handleReady,
			// log: console.log To enable console.log of CommandEditor
		};
	},
});
</script>

<style>
.ͼ2 .cm-gutters {
    background-color: transparent;
    border-right: none;
}

.ͼ2 .cm-activeLine {
    background-color: transparent;
}

.ͼ2 .cm-activeLineGutter {
    background-color: #224a75;
    color: white
}
</style>
