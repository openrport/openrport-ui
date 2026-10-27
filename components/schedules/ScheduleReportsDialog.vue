<template>
	<ActionDialog
		v-model="open"
		title="Manage schedule"
		size="w-full max-w-screen-xl"
	>
		<div class="max-h-[80vh] overflow-y-auto p-4">
			<div
				v-if="loading && !executions.length"
				class="flex justify-center py-6"
			>
				<IconLoader2
					:size="32"
					class="primary-text animate-spin"
				/>
			</div>
			<div
				v-else-if="!executions.length"
				class="flex items-center bg-primary px-5 py-2 text-sm text-white"
			>
				<IconInfoCircle
					:size="34"
					class="pr-2"
				/>
				No schedule reports found
			</div>
			<div
				v-else
				class="rounded border border-gray-200 text-sm text-gray-600 dark:text-gray-300"
			>
				<ScheduleExecutionRow
					v-for="execution in executions"
					:key="execution.jid"
					:execution="execution"
					:title="title"
				/>
				<div
					v-if="executions.length < total"
					class="flex justify-center border-t border-gray-200"
				>
					<button
						class="my-5 rounded border border-gray-200 bg-gray-50 px-5 py-1.5 text-sm uppercase text-gray-700 hover:bg-gray-100"
						:disabled="loading"
						type="button"
						@click="load(true)"
					>
						Load More
					</button>
				</div>
			</div>
		</div>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconInfoCircle, IconLoader2 } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import ScheduleExecutionRow from '~/components/schedules/ScheduleExecutionRow.vue';
import { scheduleTargetKind, scheduleTargetValues } from '~/composables/useScheduleTimingForm';
import type { Schedule, ScheduleExecution } from '~/types';

const PAGE_LIMIT = 20;

const props = defineProps<{
	schedule: Schedule | null;
}>();

const open = defineModel<boolean>({ required: true });
const executions = ref<ScheduleExecution[]>([]);
const total = ref(0);
const loading = ref(false);

const title = computed(() => {
	if (!props.schedule) {
		return '';
	}
	const count = scheduleTargetValues(props.schedule).length;
	return {
		client_ids: `List (${count})`,
		group_ids: count > 1 ? `Groups(${count})` : `Group(${count})`,
		tags: `Tags (${count})`,
	}[scheduleTargetKind(props.schedule)];
});

const load = async (more = false) => {
	if (!props.schedule) {
		return;
	}
	const { $api } = useNuxtApp();
	loading.value = true;
	try {
		const response = await $api.schedules.executions(props.schedule.id, more ? executions.value.length : 0, PAGE_LIMIT);
		executions.value = more ? [...executions.value, ...response.data] : response.data;
		total.value = response.meta?.count || executions.value.length;
	}
	finally {
		loading.value = false;
	}
};

watch(open, (isOpen) => {
	executions.value = [];
	total.value = 0;
	if (isOpen) {
		load();
	}
});
</script>
