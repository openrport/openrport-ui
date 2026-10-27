<template>
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
						<template v-if="!forClient">
							<td :class="[cellClass, 'text-left']">
								{{ audit.client_id || '-' }}
							</td>
							<td :class="[cellClass, 'text-left']">
								{{ audit.username }}
							</td>
						</template>
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
							:colspan="headers.length + 1"
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
			:items-per-page="itemsPerPage"
			:page="page"
			@previous="page--"
			@next="page++"
		/>
		<AuditDetailDialog
			v-model="detailOpen"
			:audit="selected"
		/>
	</div>
</template>

<script setup lang="ts">
import { IconDots, IconExternalLink } from '@tabler/icons-vue';
import AuditDetailDialog from '~/components/audits/AuditDetailDialog.vue';
import { Pagination } from '~/components/ui/pagination';
import type { AuditLog } from '~/types';

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
const cellClass = 'whitespace-nowrap py-3.5 pl-4 pr-3 font-normal sm:pl-6';

const props = defineProps<{
	audits: AuditLog[];
	total: number;
	pending: boolean;
	itemsPerPage: number;
	// The device audit tab hides the client and username columns, like the reference
	forClient?: boolean;
}>();

const page = defineModel<number>('page', { required: true });

const headers = computed(() => [
	...(props.forClient
		? []
		: [
				{ text: 'Client', class: 'text-left' },
				{ text: 'Username', class: 'text-left' },
			]),
	{ text: 'Application', class: 'text-center' },
	{ text: 'Action', class: 'text-center' },
	{ text: 'Date', class: 'text-left' },
]);

const detailOpen = ref(false);
const selected = ref<AuditLog | null>(null);

const showDetails = (audit: AuditLog) => {
	selected.value = audit;
	detailOpen.value = true;
};

const formatUtc = (date: string) => {
	const parsed = new Date(date);
	return Number.isNaN(parsed.getTime()) ? '-' : `${parsed.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
};
</script>
