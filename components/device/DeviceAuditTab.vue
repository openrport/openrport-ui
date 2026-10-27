<template>
	<div class="min-h-[600px] w-full px-1">
		<div class="relative flex w-full flex-col lg:w-1/2">
			<label
				class="pb-1 pl-1 text-sm font-medium text-theme-label"
				for="deviceAuditStart"
			>Audit starting date (UTC)</label>
			<div class="flex items-center">
				<input
					id="deviceAuditStart"
					v-model="startDate"
					class="primary input-text block h-10 w-full min-w-[250px] rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
					type="datetime-local"
				>
				<button
					v-if="startDate"
					class="ml-2 rounded-full p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
					type="button"
					title="Clear"
					@click="startDate = ''"
				>
					<IconX :size="18" />
				</button>
			</div>
		</div>
		<div class="mt-4 w-full">
			<AuditTable
				v-model:page="page"
				:audits="audits"
				:total="total"
				:pending="pending"
				:items-per-page="ITEMS_PER_PAGE"
				for-client
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconX } from '@tabler/icons-vue';
import AuditTable from '~/components/audits/AuditTable.vue';

const ITEMS_PER_PAGE = 20;

const props = defineProps<{
	id: string;
}>();

const { $api } = useNuxtApp();
const page = ref(0);
const startDate = ref('');

// Same "YYYY-MM-DD HH:mm" start date the reference sends
const { data: response, pending, refresh } = useLazyAsyncData(
	`device-audit-${props.id}`,
	() => $api.auditLog.list(
		{ timestamp: startDate.value.replace('T', ' '), username: '', application: '' },
		page.value * ITEMS_PER_PAGE,
		ITEMS_PER_PAGE,
		props.id,
	),
	{ watch: [page] },
);
const audits = computed(() => response.value?.data || []);
const total = computed(() => response.value?.meta?.count || 0);

watch(startDate, () => {
	if (page.value !== 0) {
		// The page watcher reloads the list
		page.value = 0;
		return;
	}
	refresh();
});
</script>
