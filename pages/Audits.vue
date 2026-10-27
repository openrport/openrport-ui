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
					<AuditTable
						v-model:page="page"
						:audits="audits"
						:total="total"
						:pending="pending"
						:items-per-page="ITEMS_PER_PAGE"
					/>
					<div class="h-12 w-full" />
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconX } from '@tabler/icons-vue';
import AuditFilterPanel from '~/components/audits/AuditFilterPanel.vue';
import AuditTable from '~/components/audits/AuditTable.vue';
import type { AuditLogFilter } from '~/types';

useHead({ title: 'Audit Logs' });

const ITEMS_PER_PAGE = 20;
const FILTER_LABELS: Record<keyof AuditLogFilter, string> = {
	application: 'Application',
	timestamp: 'Audit starting date',
	username: 'Username',
};

const { $api } = useNuxtApp();
const page = ref(0);
const filter = ref<AuditLogFilter>({ timestamp: '', username: '', application: '' });
const filterOpen = ref(false);

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
</script>
