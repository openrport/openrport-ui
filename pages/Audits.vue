<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div>
				<div class="relative z-20 flex h-16 items-center justify-between">
					<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
						Audit Logs
					</h3>
					<div class="relative">
						<button
							class="bg-primary hover:bg-primary-800 text-white cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300"
							type="button"
							@click="filterOpen = true"
						>
							Filters
						</button>
						<AuditFilterPanel
							v-model="filter"
							v-model:open="filterOpen"
							@apply="applyFilter"
						/>
					</div>
				</div>
				<div class="my-8 flex flex-wrap items-center gap-4 px-2">
					<div
						v-for="chip in chips"
						:key="chip.key"
						class="flex items-center rounded-full bg-theme-dark pr-2"
					>
						<span class="rounded-full bg-primary px-4 py-1.5 text-sm text-white">{{ chip.label }}</span>
						<span class="px-4 py-1.5 text-sm">{{ chip.value }}</span>
						<button
							type="button"
							:title="`Remove ${chip.label} filter`"
							@click="removeFilter(chip.key)"
						>
							<IconX :size="18" />
						</button>
					</div>
				</div>
				<div class="relative z-10 w-full">
					<div class="flow-root overflow-clip border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg">
						<div class="overflow-auto relative z-10 -mb-2">
							<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
									<tr>
										<th
											v-for="header in headers"
											:key="header.text"
											:class="['py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6', header.class]"
											scope="col"
										>
											{{ header.text }}
										</th>
										<th class="py-3.5 pl-4 pr-3 sm:pl-6" />
									</tr>
								</thead>
								<tbody class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
									<tr
										v-for="(audit, index) in audits"
										:key="`${audit.timestamp}-${index}`"
										class="text-sm text-gray-800 dark:text-white"
									>
										<td :class="[cellClass, 'text-left']">
											{{ audit.client_id || '-' }}
										</td>
										<td :class="[cellClass, 'text-left']">
											{{ audit.username }}
										</td>
										<td :class="[cellClass, 'w-52 text-center capitalize']">
											{{ audit.application.replace(/\./g, ' ') }}
										</td>
										<td :class="[cellClass, 'w-52 text-center']">
											{{ ACTION_LABELS[audit.action] || '-' }}
										</td>
										<td :class="[cellClass, 'w-52 text-left']">
											{{ formatUtc(audit.timestamp) }}
										</td>
										<td class="pr-4 sm:pr-6 relative w-8 whitespace-nowrap py-3.5 pl-3 text-right">
											<DropdownMenu>
												<DropdownMenuTrigger as-child>
													<button
														class="inline-flex h-8 w-8 items-center justify-center rounded-full p-1 text-gray-600 transition-all duration-300 hover:bg-primary-500 hover:bg-opacity-30 focus:outline-none"
														type="button"
														title="Actions"
													>
														<IconDots :size="20" />
													</button>
												</DropdownMenuTrigger>
												<DropdownMenuContent class="w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-950">
													<DropdownMenuItem
														class="group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-xs"
														@click="showDetails(audit)"
													>
														<IconExternalLink class="mr-2 h-4 w-4" />
														<span>Full Details</span>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</td>
									</tr>
									<tr
										v-if="!audits.length"
										class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
									>
										<td
											colspan="6"
											class="w-full flex-1 text-center text-gray-800 dark:text-gray-200"
										>
											{{ pending ? 'Loading...' : 'No results' }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<Pagination
							:current-page-item-count="audits.length"
							:total-items="total"
							:items-per-page="ITEMS_PER_PAGE"
							:page="page"
							@previous="page--"
							@next="page++"
						/>
					</div>
					<div class="h-12 w-full" />
				</div>
			</div>
		</div>
		<AuditDetailDialog
			v-model="detailOpen"
			:audit="selected"
		/>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconDots, IconExternalLink, IconX } from '@tabler/icons-vue';
import AuditDetailDialog from '~/components/audits/AuditDetailDialog.vue';
import AuditFilterPanel from '~/components/audits/AuditFilterPanel.vue';
import { Pagination } from '~/components/ui/pagination';
import type { AuditLog, AuditLogFilter } from '~/types';

useHead({ title: 'Audit Logs' });

const ITEMS_PER_PAGE = 20;
const ACTION_LABELS: Record<string, string> = {
	'create': 'Created',
	'delete': 'Deleted',
	'update': 'Updated',
	'execute.start': 'Execution started',
	'execute.done': 'Execution ended',
	'init': 'Initiated',
	'lock': 'Locked',
	'unlock': 'Unlocked',
};
const FILTER_LABELS: Record<keyof AuditLogFilter, string> = {
	application: 'Application',
	timestamp: 'Audit starting date',
	username: 'Username',
};
const headers = [
	{ text: 'Client', class: 'text-left' },
	{ text: 'Username', class: 'text-left' },
	{ text: 'Application', class: 'text-center' },
	{ text: 'Action', class: 'text-center' },
	{ text: 'Date', class: 'text-left' },
];
const cellClass = 'whitespace-nowrap py-3.5 pl-4 pr-3 font-normal sm:pl-6';

const { $api } = useNuxtApp();
const page = ref(0);
const filter = ref<AuditLogFilter>({ timestamp: '', username: '', application: '' });
const filterOpen = ref(false);
const detailOpen = ref(false);
const selected = ref<AuditLog | null>(null);

const { data: response, pending, refresh } = useLazyAsyncData(
	'audit-logs',
	() => $api.auditLog.list(filter.value, page.value * ITEMS_PER_PAGE, ITEMS_PER_PAGE),
	{ watch: [page] },
);
const audits = computed(() => response.value?.data || []);
const total = computed(() => response.value?.meta?.count || 0);

const chips = computed(() => (Object.keys(FILTER_LABELS) as Array<keyof AuditLogFilter>)
	.filter(key => filter.value[key])
	.map(key => ({ key, label: FILTER_LABELS[key], value: filter.value[key] })));

const applyFilter = async () => {
	if (page.value !== 0) {
		// The page watcher reloads the list
		page.value = 0;
		return;
	}
	await refresh();
};

const removeFilter = (key: keyof AuditLogFilter) => {
	filter.value = { ...filter.value, [key]: '' };
	applyFilter();
};

const showDetails = (audit: AuditLog) => {
	selected.value = audit;
	detailOpen.value = true;
};

const formatUtc = (date: string) => {
	const parsed = new Date(date);
	return Number.isNaN(parsed.getTime()) ? '-' : `${parsed.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
};
</script>
