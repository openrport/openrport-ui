<template>
	<div class="px-1 pb-12">
		<div class="flex w-full flex-col items-start justify-between gap-3 lg:flex-row lg:items-end">
			<div class="flex w-full flex-col gap-3 lg:flex-row">
				<div class="flex flex-col">
					<label
						class="pb-1 pl-1 text-sm font-medium text-theme-label"
						for="monitoringDate"
					>Date & time (UTC)</label>
					<input
						id="monitoringDate"
						v-model="graphDate"
						:class="inputClass"
						class="min-w-[250px]"
						type="datetime-local"
					>
				</div>
				<div class="flex flex-col">
					<label
						class="pb-1 pl-1 text-sm font-medium text-theme-label"
						for="monitoringPeriod"
					>Period</label>
					<select
						id="monitoringPeriod"
						v-model="period"
						:class="inputClass"
						class="lg:w-24"
					>
						<option
							v-for="hours in PERIODS"
							:key="hours"
							:value="hours"
						>
							{{ hours }}h
						</option>
					</select>
				</div>
			</div>
			<div class="hidden overflow-hidden rounded border border-gray-200 bg-gray-50 text-gray-400 shadow-sm lg:inline-flex dark:border-gray-700 dark:bg-gray-800">
				<button
					v-for="option in LAYOUTS"
					:key="option.value"
					:class="['p-2', { 'bg-gray-200 text-gray-600 dark:bg-gray-900': layout === option.value }]"
					:title="option.title"
					type="button"
					@click="layout = option.value"
				>
					<component
						:is="option.icon"
						:size="20"
					/>
				</button>
			</div>
		</div>

		<div :class="['mt-5 grid grid-cols-1 gap-5', { 'lg:grid-cols-2': layout === 'grid' }]">
			<MonitoringChart
				v-for="graph in graphs"
				:key="graph.key"
				:title="graph.title"
				:series="series[graph.key] || []"
				:colors="graph.colors"
				:min="0"
				:max="graph.max"
				:since="range.since"
				:until="range.until"
				:loading="graphsPending"
			/>
		</div>

		<div class="mt-12 flex w-full flex-col gap-2">
			<div class="flex w-[250px] flex-col">
				<label
					class="pb-1 pl-1 text-sm font-medium text-theme-label"
					for="processesDate"
				>Date (UTC)</label>
				<input
					id="processesDate"
					v-model="processDay"
					:class="inputClass"
					type="date"
				>
			</div>
			<div class="w-full rounded-lg bg-white shadow dark:bg-gray-900">
				<div class="border-b border-gray-100 p-4 dark:border-gray-700">
					<h6 class="text-sm font-bold primary-text">
						Processes
					</h6>
				</div>
				<div class="max-h-[600px] overflow-auto">
					<table class="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700">
						<thead class="sticky top-0 bg-gray-50 dark:bg-gray-950">
							<tr>
								<th
									v-for="header in PROCESS_HEADERS"
									:key="header"
									class="py-3 pl-4 pr-3 text-left font-semibold primary-text"
									scope="col"
								>
									{{ header }}
								</th>
								<th class="w-12" />
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-100 dark:divide-gray-800">
							<template
								v-for="process in processes"
								:key="process.pid"
							>
								<tr class="text-gray-800 dark:text-gray-100">
									<td :class="cellClass">
										{{ process.pid }}
									</td>
									<td :class="cellClass">
										{{ process.name }}
									</td>
									<td :class="cellClass">
										{{ process.parent_pid }}
									</td>
									<td :class="cellClass">
										{{ process.state }}
									</td>
									<td :class="cellClass">
										{{ process.memory_usage_percent.toFixed(2) }}
									</td>
									<td :class="cellClass">
										<span
											v-if="process.cmdline"
											class="inline-block max-w-[150px] truncate align-bottom"
										>{{ process.cmdline }}</span>
										<span v-else>-</span>
									</td>
									<td class="pr-2 text-right">
										<button
											v-if="process.cmdline"
											class="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
											type="button"
											:title="expanded.has(process.pid) ? 'Hide command line' : 'Show command line'"
											@click="toggle(process.pid)"
										>
											<IconChevronUp
												v-if="expanded.has(process.pid)"
												:size="16"
											/>
											<IconChevronDown
												v-else
												:size="16"
											/>
										</button>
									</td>
								</tr>
								<tr v-if="expanded.has(process.pid)">
									<td
										:colspan="PROCESS_HEADERS.length + 1"
										class="p-2"
									>
										<pre class="whitespace-pre-wrap break-all rounded bg-gray-50 p-3 text-xs dark:bg-gray-950">{{ process.cmdline }}</pre>
									</td>
								</tr>
							</template>
							<tr v-if="!processes.length">
								<td
									:colspan="PROCESS_HEADERS.length + 1"
									class="h-[210px] text-center text-gray-800 dark:text-gray-200"
								>
									{{ processesPending ? 'Loading...' : 'No results' }}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div
					v-if="processes.length"
					class="flex items-center justify-between px-4 py-2"
				>
					<div class="text-sm font-bold primary-text">
						Processes: {{ snapshotTime }} (UTC)
					</div>
					<div class="flex items-center gap-1">
						<!-- Snapshots come newest first, so "older" is the next page -->
						<button
							class="rounded-full p-1 text-gray-600 hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-gray-800"
							:disabled="snapshotPage + 1 >= snapshotCount"
							title="Older snapshot"
							type="button"
							@click="snapshotPage++"
						>
							<IconChevronLeft :size="20" />
						</button>
						<button
							class="rounded-full p-1 text-gray-600 hover:bg-gray-100 disabled:opacity-30 dark:hover:bg-gray-800"
							:disabled="snapshotPage === 0"
							title="Newer snapshot"
							type="button"
							@click="snapshotPage--"
						>
							<IconChevronRight :size="20" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronUp, IconLayoutGrid, IconLayoutRows } from '@tabler/icons-vue';
import MonitoringChart from '~/components/device/MonitoringChart.vue';
import type { MonitoringSeries } from '~/components/device/MonitoringChart.vue';
import type { Client, ClientGraphMetric } from '~/types';

interface GraphDefinition {
	key: string;
	title: string;
	colors: string[];
	max: number;
	scale?: number;
}

const PERIODS = [2, 6, 12, 24, 48];
const LAYOUTS = [
	{ value: 'row', title: 'One chart per row', icon: IconLayoutRows },
	{ value: 'grid', title: 'Two charts per row', icon: IconLayoutGrid },
];
const PROCESS_HEADERS = ['PID', 'Name', 'PPID', 'State', 'Memory %', 'Command line'];
const USAGE_COLORS = ['rgba(0, 141, 139, 0.5)', 'rgba(178, 41, 181, 1.0)', 'rgba(226, 95, 39, 1.0)'];
const NETWORK_COLORS = ['#f50000', '#ff3838', '#a30000', '#1167b1', '#2a9df4', '#03254c'];
const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';
const cellClass = 'whitespace-nowrap py-2.5 pl-4 pr-3';

const props = defineProps<{
	client: Client;
}>();

const { $api } = useNuxtApp();
const nowUtc = new Date().toISOString();
const graphDate = ref(nowUtc.slice(0, 16));
const period = ref(24);
const layout = ref('grid');
const processDay = ref(nowUtc.slice(0, 10));
const snapshotPage = ref(0);
const expanded = ref(new Set<number>());

// Network graphs only exist when the client monitors a LAN card
const graphs = computed<GraphDefinition[]>(() => {
	const lanCard = props.client?.client_configuration?.monitoring?.lan_card;
	const list: GraphDefinition[] = [
		{ key: 'cpu_usage_percent', title: 'CPU Usage %', colors: USAGE_COLORS, max: 100 },
		{ key: 'mem_usage_percent', title: 'Memory Usage %', colors: USAGE_COLORS, max: 100 },
	];
	if (lanCard) {
		list.push(
			{ key: 'net_usage_percent_lan', title: `Network Usage ${lanCard.name} %`, colors: NETWORK_COLORS, max: 100 },
			{ key: 'net_usage_bps_lan', title: `Network Usage ${lanCard.name} MB/s`, colors: NETWORK_COLORS, max: lanCard.max_speed / 8, scale: 1 / 1048576 },
		);
	}
	return list;
});

// The picked date is the end of the period, in UTC
const range = computed(() => {
	const until = Date.parse(`${graphDate.value || nowUtc.slice(0, 16)}:00Z`);
	return { since: until - period.value * 3600 * 1000, until };
});

const toSeries = (rows: ClientGraphMetric[], graph: GraphDefinition): MonitoringSeries[] => {
	const series: Record<string, MonitoringSeries> = {};
	rows.forEach((row) => {
		const time = Date.parse(row.timestamp);
		Object.entries(row).forEach(([key, values]) => {
			if (key === 'timestamp' || typeof values !== 'object') {
				return;
			}
			Object.entries(values).forEach(([name, value]) => {
				series[name] ??= { name: name.replace(/_/g, ' ').toUpperCase(), type: name === 'avg' ? 'area' : 'line', data: [] };
				series[name].data.push([time, value * (graph.scale ?? 1)]);
			});
		});
	});
	return Object.values(series);
};

const { data: series, pending: graphsPending } = useLazyAsyncData(
	`device-monitoring-${props.client.id}`,
	async () => {
		const since = new Date(range.value.since).toISOString().slice(0, 16);
		const until = new Date(range.value.until).toISOString().slice(0, 16);
		const responses = await Promise.allSettled(graphs.value.map(graph =>
			$api.clients.graphMetrics(props.client.id, graph.key, `${since}:00Z`, `${until}:00Z`)));
		return Object.fromEntries(graphs.value.map((graph, index) => {
			const response = responses[index];
			return [graph.key, response.status === 'fulfilled' ? toSeries(response.value.data || [], graph) : []];
		}));
	},
	{ watch: [range], default: () => ({} as Record<string, MonitoringSeries[]>) },
);

const { data: processResponse, pending: processesPending } = useLazyAsyncData(
	`device-processes-${props.client.id}`,
	() => $api.clients.processes(props.client.id, processDay.value, snapshotPage.value),
	{ watch: [snapshotPage] },
);
const processes = computed(() => processResponse.value?.data?.[0]?.processes || []);
const snapshotCount = computed(() => processResponse.value?.meta?.count || 0);
const snapshotTime = computed(() => (processResponse.value?.data?.[0]?.timestamp || '').slice(0, 19).replace('T', ' '));

watch(processDay, () => {
	if (snapshotPage.value === 0) {
		refreshNuxtData(`device-processes-${props.client.id}`);
		return;
	}
	// The page watcher reloads the list
	snapshotPage.value = 0;
});

const toggle = (pid: number) => {
	const next = new Set(expanded.value);
	if (!next.delete(pid)) {
		next.add(pid);
	}
	expanded.value = next;
};
</script>
