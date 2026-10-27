<template>
	<div class="flex flex-col bg-white rounded-lg shadow dark:bg-gray-900">
		<div class="px-4 py-4 sm:px-6">
			<h3 class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-50">
				{{ title }}
			</h3>
		</div>
		<div class="relative min-h-[300px] px-2 pb-2">
			<div
				v-if="loading"
				class="absolute inset-0 flex items-center justify-center"
			>
				<IconLoader2
					:size="28"
					class="animate-spin text-gray-400"
				/>
			</div>
			<div
				v-else-if="!series.length"
				class="m-4 flex items-center gap-2 rounded bg-[#62ace1] p-4 text-sm text-white"
			>
				<IconInfoCircle :size="18" />
				There is no data available for this selected period
			</div>
			<div
				v-show="!loading && series.length"
				ref="chartEl"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconInfoCircle, IconLoader2 } from '@tabler/icons-vue';
import type ApexCharts from 'apexcharts';

export interface MonitoringSeries {
	name: string;
	type: 'area' | 'line';
	data: Array<[number, number]>;
}

const props = defineProps<{
	title: string;
	series: MonitoringSeries[];
	colors: string[];
	min: number;
	max: number;
	since: number;
	until: number;
	loading: boolean;
}>();

const chartEl = ref<HTMLElement | null>(null);
let chart: ApexCharts | null = null;

const options = () => ({
	chart: {
		type: 'line',
		height: 300,
		width: '100%',
		toolbar: { show: false },
		zoom: { enabled: false },
		animations: { enabled: false },
	},
	theme: { mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light' },
	stroke: { curve: 'stepline', width: 2 },
	series: props.series,
	colors: props.colors,
	xaxis: {
		type: 'datetime',
		min: props.since,
		max: props.until,
		labels: { datetimeUTC: true },
	},
	yaxis: {
		min: props.min,
		max: props.max,
		labels: { formatter: (value: number) => value.toFixed(0) },
	},
	tooltip: {
		x: { format: 'yyyy-MM-dd HH:mm:ss \'UTC\'' },
		y: { formatter: (value: number) => value.toFixed(2) },
	},
	legend: { position: 'bottom' },
	dataLabels: { enabled: false },
});

let creating: Promise<void> | null = null;
let unmounted = false;

const render = async () => {
	if (!chartEl.value || !props.series.length) {
		return;
	}
	if (!chart && !creating) {
		// Loaded on demand so the chart library stays out of the device page bundle
		creating = import('apexcharts').then(async ({ default: ApexChartsLib }) => {
			if (unmounted || !chartEl.value) {
				return;
			}
			chart = new ApexChartsLib(chartEl.value, options());
			await chart.render();
		});
		await creating;
		return;
	}
	// A render requested while the chart is being created only needs the latest options
	await creating;
	await chart?.updateOptions(options(), true, false);
};

watch(() => [props.series, props.since, props.until, props.loading], () => nextTick(render));
onMounted(render);
onBeforeUnmount(() => {
	unmounted = true;
	chart?.destroy();
	chart = null;
});
</script>
