<template>
	<div class="flex flex-col">
		<label
			class="pb-1 pl-1 text-sm text-theme-label"
			for="scheduleTargets"
		>{{ label }}</label>
		<input
			id="scheduleTargets"
			v-model="targets"
			class="primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
			type="text"
			autocomplete="off"
		>
	</div>
</template>

<script setup lang="ts">
import type { ScheduleTargetKind } from '~/composables/useScheduleTimingForm';

const props = defineProps<{
	kind: ScheduleTargetKind;
}>();

// Comma separated, like the reference UI
const targets = defineModel<string>({ required: true });

const label = computed(() => ({
	client_ids: 'Targets for client IDs',
	group_ids: 'Targets for group IDs',
	tags: 'Targets for Tags',
})[props.kind]);
</script>
