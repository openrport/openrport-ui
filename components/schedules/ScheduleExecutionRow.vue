<template>
	<div class="border-b border-gray-200 last:border-b-0">
		<div
			class="flex cursor-pointer items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-slate-800"
			@click="toggle"
		>
			<span>{{ title }}</span>
			<div class="flex items-center">
				<span>Execution started at: {{ formatScheduleDate(execution.started_at) }}</span>
				<IconChevronDown
					:size="16"
					:class="['ml-6 transition-transform', { 'rotate-180': expanded }]"
				/>
			</div>
		</div>
		<div
			v-if="expanded"
			class="border-t border-gray-200 px-10 py-6"
		>
			<div
				v-if="loading && !jobs.length"
				class="flex justify-center py-2"
			>
				<IconLoader2
					:size="24"
					class="primary-text animate-spin"
				/>
			</div>
			<div
				v-else
				class="rounded border border-gray-200"
			>
				<ScheduleJobRow
					v-for="job in jobs"
					:key="job.jid"
					:job="job"
				/>
				<div
					v-if="jobs.length < total"
					class="flex justify-center border-t border-gray-200"
				>
					<button
						class="my-3 rounded border border-gray-200 bg-gray-50 px-5 py-1 text-xs uppercase text-gray-700 hover:bg-gray-100"
						:disabled="loading"
						type="button"
						@click="load(true)"
					>
						Load More
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconChevronDown, IconLoader2 } from '@tabler/icons-vue';
import ScheduleJobRow, { type ScheduleJobWithClient } from '~/components/schedules/ScheduleJobRow.vue';
import { formatScheduleDate } from '~/composables/useScheduleTimingForm';
import type { ScheduleExecution } from '~/types';

const PAGE_LIMIT = 20;

const props = defineProps<{
	execution: ScheduleExecution;
	title: string;
}>();

const expanded = ref(false);
const loading = ref(false);
const jobs = ref<ScheduleJobWithClient[]>([]);
const total = ref(0);

// Jobs only carry the client id; names are looked up once per client like the reference
const load = async (more = false) => {
	const { $api } = useNuxtApp();
	loading.value = true;
	try {
		const response = await $api.schedules.executionJobs(props.execution.jid, more ? jobs.value.length : 0, PAGE_LIMIT);
		const clientIds = [...new Set(response.data.map(job => job.client_id))];
		const names = Object.fromEntries(await Promise.all(clientIds.map(async (id) => {
			try {
				const { data } = await $api.clients.show(id);
				return [id, data.name];
			}
			catch {
				return [id, ''];
			}
		})));
		const page = response.data.map(job => ({ ...job, clientName: names[job.client_id] || job.client_id }));
		jobs.value = more ? [...jobs.value, ...page] : page;
		total.value = response.meta?.count || jobs.value.length;
	}
	finally {
		loading.value = false;
	}
};

const toggle = () => {
	expanded.value = !expanded.value;
	if (expanded.value && !jobs.value.length) {
		load();
	}
};
</script>
