<template>
	<div class="h-full w-full flex-1">
		<div class="relative">
			<ScriptEditor
				:is-loading="isLoading"
				@script-data="handleScriptData"
			/>
			<CommandResult
				v-if="results.length > 0"
				language="vim"
				:results="results"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import ScriptEditor from '~/components/scripts/ScriptEditor.vue';
import { useScriptExecution } from '~/composables/useScriptExecution';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const { executeScript, isLoading, results } = useScriptExecution();

const handleScriptData = (data: {
	scriptName: string;
	tagsValue: string[];
	workingDirectory: string;
	timeoutInSecond: number;
	scriptContent: string;
	useSudo: boolean;
}) => {
	executeScript(data.scriptContent, [props.id], [], data.workingDirectory, false, data.useSudo, data.timeoutInSecond);
};
</script>
