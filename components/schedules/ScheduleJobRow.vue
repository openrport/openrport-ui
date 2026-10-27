<template>
	<div class="border-b border-gray-200 last:border-b-0">
		<div
			class="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-50 dark:hover:bg-slate-800"
			@click="toggle"
		>
			<span class="w-56 truncate">{{ job.clientName }}</span>
			<span :class="['rounded px-2 py-1 text-xs text-white', statusClass]">{{ job.status }}</span>
			<div class="flex-1" />
			<span>Execution started at: {{ formatScheduleDate(job.started_at) }}</span>
			<IconChevronDown
				:size="16"
				:class="['ml-6 transition-transform', { 'rotate-180': expanded }]"
			/>
		</div>
		<div
			v-if="expanded"
			class="bg-gray-50 px-6 py-4 dark:bg-slate-900"
		>
			<div
				v-if="!details.length"
				class="flex justify-center py-2"
			>
				<IconLoader2
					:size="24"
					class="primary-text animate-spin"
				/>
			</div>
			<table
				v-else
				class="w-full border border-gray-200 bg-white text-left dark:bg-black"
			>
				<tbody>
					<tr
						v-for="row in details"
						:key="row.key"
						class="border-t border-gray-200 align-top"
					>
						<td class="w-48 px-3 py-2 font-medium">
							{{ row.label }}
						</td>
						<td class="px-3 py-2 break-all">
							<pre
								v-if="row.code"
								class="whitespace-pre-wrap font-mono text-xs"
							>{{ row.value }}</pre>
							<span v-else>{{ row.value }}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconChevronDown, IconLoader2 } from '@tabler/icons-vue';
import { formatScheduleDate } from '~/composables/useScheduleTimingForm';
import type { ScheduleExecutionJob } from '~/types';

export interface ScheduleJobWithClient extends ScheduleExecutionJob {
	clientName: string;
}

const props = defineProps<{
	job: ScheduleJobWithClient;
}>();

const expanded = ref(false);
const details = ref<Array<{ key: string; label: string; value: string; code: boolean }>>([]);

const statusClass = computed(() => {
	if (props.job.status === 'successful') {
		return 'bg-green-600';
	}
	return props.job.status === 'failed' ? 'bg-red-600' : 'bg-yellow-500';
});

const CODE_KEYS = ['command', 'stdout', 'stderr', 'summary'];

// Same flattening as the reference: every non-empty field, nested objects inlined, arrays joined
const flatten = (value: Record<string, unknown>, rows: typeof details.value = []) => {
	Object.entries(value).forEach(([key, entry]) => {
		if (entry === null || entry === undefined || entry === '' || entry === false) {
			return;
		}
		if (Array.isArray(entry)) {
			rows.push({ key, label: humanize(key), value: entry.join(' '), code: false });
		}
		else if (typeof entry === 'object') {
			flatten(entry as Record<string, unknown>, rows);
		}
		else {
			rows.push({ key, label: humanize(key), value: String(entry), code: CODE_KEYS.includes(key) });
		}
	});
	return rows;
};

const humanize = (key: string) => {
	const text = key.replace(/_/g, ' ');
	return text[0].toUpperCase() + text.slice(1);
};

const toggle = async () => {
	expanded.value = !expanded.value;
	if (expanded.value && !details.value.length) {
		const { $api } = useNuxtApp();
		const { data } = await $api.schedules.clientJob(props.job.client_id, props.job.jid);
		details.value = flatten(data as unknown as Record<string, unknown>);
	}
};
</script>
