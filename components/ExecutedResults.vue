<template>
	<div class="flex max-h-[1720px] min-h-[480px] flex-1 flex-col overflow-scroll rounded-md border border-gray-100">
		<div class="flex items-center justify-between p-4">
			<span class="text-sm font-bold text-slate-700 dark:text-slate-50">Results</span>
			<div class="flex items-center">
				<span class="text-sm font-semibold text-gray-700">expand:</span>
				<span
					v-for="(option, index) in expandOptions"
					:key="option"
					:class="['primary-text cursor-pointer px-2 text-sm underline', { 'border-l-[1px] border-black': index > 0 }]"
					@click="setExpand(option)"
				>
					{{ option }}
				</span>
			</div>
		</div>
		<div class="bg-theme-dark">
			<div
				v-for="job in jobs"
				:key="`executed-result-${job.client_id}`"
				class="flex flex-col border-t border-gray-100"
			>
				<div
					class="flex cursor-pointer justify-between p-4"
					@click="toggle(job.client_id)"
				>
					<div class="flex flex-1 items-center justify-between">
						<span class="text-sm">{{ job.client_name || job.result.client_name || job.client_id }}</span>
						<div
							v-if="job.status === 'running'"
							class="mx-2"
						>
							<IconLoader2 class="h-4 w-4 animate-spin primary-text" />
						</div>
						<div
							v-else
							:class="[statusColor(job.status), 'mx-2 h-4 w-4 rounded-full']"
						/>
					</div>
					<div :class="['flex shrink-0 transition-transform duration-200', { 'rotate-180': isOpen(job) }]">
						<IconChevronDown class="h-5 w-5 text-gray-600" />
					</div>
				</div>
				<div
					v-if="isOpen(job)"
					class="px-4 pb-4"
				>
					<div class="flex flex-col rounded-sm bg-white text-gray-700 shadow-md dark:bg-black dark:text-white">
						<div
							v-if="job.result.error"
							class="flex border-b border-gray-100 p-4"
						>
							<div
								class="flex shrink-0 pr-6 text-red-600"
								title="Error executing command/script"
							>
								<IconAlertCircle :size="22" />
							</div>
							<div class="flex flex-col">
								<p class="text-sm text-gray-700">
									{{ job.result.error }}
								</p>
								<span class="text-xs text-red-600">Error</span>
							</div>
						</div>
						<div
							v-if="job.result.stdout"
							class="flex justify-between p-4"
						>
							<div
								class="flex shrink-0 pr-6 text-green-600"
								title="STDOUT"
							>
								<IconTerminal :size="22" />
							</div>
							<div class="flex flex-1">
								<prism-editor
									:model-value="job.result.stdout"
									class="my-editor min-h-[60px] text-xs"
									:highlight="highlighter"
									readonly
								/>
							</div>
						</div>
						<div
							v-if="job.result.stderr"
							class="flex justify-between p-4"
						>
							<div
								class="flex shrink-0 pr-6 text-red-600"
								title="STDERR"
							>
								<IconAlertCircle :size="22" />
							</div>
							<div class="flex flex-1">
								<prism-editor
									:model-value="job.result.stderr"
									class="my-editor min-h-[60px] text-xs"
									:highlight="highlighter"
									readonly
								/>
							</div>
						</div>
						<div
							v-if="job.result.error"
							class="ml-11 p-4 pt-0"
						>
							<div class="mt-1 flex items-center rounded bg-red-50 p-2.5">
								<IconCircleX
									:size="24"
									class="shrink-0 text-red-400"
								/>
								<p class="ml-3 text-sm font-medium text-red-800">
									{{ job.result.error }}
								</p>
							</div>
						</div>
						<div class="flex items-center border-t border-gray-100 p-4">
							<IconSettings
								:size="22"
								class="mr-4 text-gray-700 dark:text-slate-400"
							/>
							<div
								v-if="job.result.pid"
								class="pl-2 text-sm"
							>
								<span class="text-gray-400 dark:text-slate-50">PID </span>
								<span class="text-black dark:text-white">{{ job.result.pid }}</span>
							</div>
							<div
								v-if="job.result.started_at"
								class="flex items-center pl-2 text-sm text-gray-700 dark:text-slate-500"
							>
								<IconClock
									:size="16"
									class="mr-1"
								/>
								<span>{{ formatDate(job.result.started_at) }}</span>
							</div>
							<IconArrowRight
								v-if="job.result.started_at && job.result.finished_at"
								:size="18"
								class="ml-2 text-gray-700 dark:text-slate-500"
							/>
							<div
								v-if="job.result.finished_at"
								class="flex items-center pl-2 text-sm text-gray-700 dark:text-slate-500"
							>
								<IconRotateClockwise
									:size="18"
									class="mr-1"
								/>
								<span>{{ formatDate(job.result.finished_at) }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PrismEditor } from 'vue-prism-editor';
import { highlight } from 'prismjs/components/prism-core';
import prism from 'prismjs';
import 'prismjs/components/prism-vim';
import { formatDate as formatWithPattern } from '@vueuse/core';
import {
	IconAlertCircle,
	IconArrowRight,
	IconChevronDown,
	IconCircleX,
	IconClock,
	IconLoader2,
	IconRotateClockwise,
	IconSettings,
	IconTerminal,
} from '@tabler/icons-vue';
import type { Job, JobStatus } from '~/composables/useJobExecution';

type ExpandOption = 'all' | 'none' | 'successful' | 'failed';

const props = defineProps<{
	jobs: Record<string, Job>;
}>();

const expandOptions: ExpandOption[] = ['all', 'none', 'successful', 'failed'];
const expand = ref<ExpandOption>('none');
// Per-row toggles; cleared whenever an expand filter is picked so the filter wins, like the reference
const toggled = ref<Record<string, boolean>>({});

const setExpand = (option: ExpandOption) => {
	expand.value = option;
	toggled.value = {};
};

const matchesExpand = (job: Job) => expand.value === 'all'
	|| (expand.value === 'successful' && job.status === 'successful')
	|| (expand.value === 'failed' && job.status === 'failed');

const isOpen = (job: Job) => toggled.value[job.client_id] ?? matchesExpand(job);

const toggle = (clientId: string) => {
	const job = props.jobs[clientId];
	toggled.value[clientId] = !isOpen(job);
};

const statusColor = (status: JobStatus) => {
	if (status === 'successful') {
		return 'bg-green-600';
	}
	return status === 'failed' ? 'bg-red-600' : 'bg-yellow-400';
};

const formatDate = (date: string) => formatWithPattern(new Date(date), 'YYYY-MM-DD HH:mm:ss');

const highlighter = (code: string) => highlight(code, prism.languages.vim);
</script>
