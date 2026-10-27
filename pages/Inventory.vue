<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div>
				<div class="relative z-20 flex h-16 items-center justify-between">
					<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
						Inventory
					</h3>
				</div>
				<div class="my-4 flex items-center justify-between gap-2">
					<div class="flex h-8 w-full items-center rounded bg-white dark:bg-gray-900">
						<div
							v-for="chip in chips"
							:key="chip.key"
							class="ml-1 flex shrink-0 items-center rounded-md bg-gray-200 text-sm"
						>
							<span class="flex h-8 items-center rounded-md bg-primary px-3 capitalize text-white">{{ chip.key }}</span>
							<span class="truncate pl-2">{{ chip.value }}</span>
							<button
								class="px-2"
								type="button"
								:title="`Remove ${chip.key} filter`"
								@click="removeFilter(chip.key)"
							>
								<IconX :size="18" />
							</button>
						</div>
						<input
							v-model="search"
							class="h-full w-full rounded-l border-none bg-transparent py-0 text-sm focus:outline-none focus:ring-0"
							placeholder="Filter clients by name or IP Address"
							type="text"
							@keyup.enter="applySearch"
						>
					</div>
					<div class="relative shrink-0">
						<button
							:class="toolbarButtonClass"
							type="button"
							@click="filterOpen = true"
						>
							<span>More Filters</span>
							<IconFilter
								:size="18"
								class="ml-2"
							/>
						</button>
						<InventoryFilterPanel
							v-model="filters"
							v-model:open="filterOpen"
							:columns="filterableColumns"
							@apply="reload"
							@customize="openCustomize"
						/>
					</div>
					<button
						:class="[toolbarButtonClass, 'shrink-0']"
						type="button"
						@click="customizeOpen = !customizeOpen"
					>
						<IconTable
							:size="18"
							class="mr-2"
						/>
						<span>Customize Table</span>
					</button>
				</div>
				<div
					v-if="customizeOpen"
					class="mb-4"
				>
					<div class="rounded-md border border-gray-200 p-4">
						<h3 class="mb-4 flex items-center font-medium leading-6 text-gray-900 dark:text-gray-100">
							<IconTable
								:size="20"
								class="mr-2"
							/>
							Customize table
						</h3>
						<div class="grid grid-cols-4 gap-4 py-4">
							<label
								v-for="column in INVENTORY_COLUMNS"
								:key="column.key"
								class="flex cursor-pointer select-none items-center text-sm"
							>
								<input
									v-model="selectedColumns"
									type="checkbox"
									:value="column.key"
									class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								>
								<span>{{ column.label }}</span>
							</label>
						</div>
					</div>
					<div class="my-2 flex justify-end">
						<button
							class="rounded bg-primary px-4 py-2 text-sm uppercase text-white hover:opacity-80"
							type="button"
							@click="customizeOpen = false"
						>
							Apply
						</button>
					</div>
				</div>
				<div class="relative z-10 w-full">
					<div class="flow-root overflow-clip border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg">
						<div class="overflow-auto relative z-10 -mb-2">
							<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
									<tr>
										<th class="w-10" />
										<th
											v-for="column in visibleColumns"
											:key="column.key"
											:class="['whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6', column.align === 'center' ? 'text-center' : 'text-left']"
											scope="col"
										>
											{{ column.label }}
										</th>
									</tr>
								</thead>
								<tbody class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
									<template
										v-for="client in clients"
										:key="client.id"
									>
										<tr class="text-sm text-gray-800 dark:text-white">
											<td class="w-10 pl-4 text-right">
												<button
													class="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
													type="button"
													:title="expanded.includes(client.id) ? 'Collapse' : 'Expand'"
													@click="toggleExpand(client.id)"
												>
													<IconChevronUp
														v-if="expanded.includes(client.id)"
														:size="18"
													/>
													<IconChevronDown
														v-else
														:size="18"
													/>
												</button>
											</td>
											<td
												v-for="column in visibleColumns"
												:key="column.key"
												:class="['py-3 pl-4 pr-3 sm:pl-6', column.align === 'center' ? 'text-center' : 'text-left']"
											>
												<NuxtLink
													v-if="column.key === 'client'"
													:to="`/dashboard/${client.id}`"
													class="flex min-w-[200px] items-center"
												>
													<ClientIcon
														:os="client.os"
														:os_family="client.os_family"
														:os_full_name="client.os_full_name"
														:os_kernel="client.os_kernel"
														:size="20"
													/>
													<div class="grow pl-2">
														<div>{{ client.name || client.id }}</div>
														<div>{{ client.address }}</div>
													</div>
												</NuxtLink>
												<div
													v-else-if="column.key === 'connection_state'"
													:class="['h-3 w-3 rounded-full', client.connection_state === 'connected' ? 'bg-green-600' : 'bg-red-600']"
													:title="client.connection_state"
												/>
												<span
													v-else-if="column.key === 'version'"
													:class="badgeClass"
												>{{ client.version }}</span>
												<div
													v-else-if="column.key === 'tags' || column.key === 'groups'"
													class="flex flex-wrap gap-1"
												>
													<span
														v-for="item in listValues(client, column.key)"
														:key="item"
														:class="badgeClass"
													>{{ item }}</span>
												</div>
												<span
													v-else-if="column.key === 'updates' || column.key === 'security_updates'"
													:class="badgeClass"
												>{{ updatesCount(client, column.key) }}</span>
												<div
													v-else
													class="max-w-[220px] truncate"
													:title="cellValue(client, column.key)"
												>
													{{ cellValue(client, column.key) }}
												</div>
											</td>
										</tr>
										<tr v-if="expanded.includes(client.id)">
											<td
												:colspan="visibleColumns.length + 1"
												class="p-4"
											>
												<InventoryClientDetails :client="client" />
											</td>
										</tr>
									</template>
									<tr
										v-if="!clients.length"
										class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
									>
										<td
											:colspan="visibleColumns.length + 1"
											class="w-full flex-1 text-center text-gray-800 dark:text-gray-200"
										>
											{{ pending ? 'Loading...' : 'No results' }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<Pagination
							:current-page-item-count="clients.length"
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
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconChevronDown, IconChevronUp, IconFilter, IconTable, IconX } from '@tabler/icons-vue';
import ClientIcon from '~/components/device/ClientIcon.vue';
import InventoryClientDetails from '~/components/inventory/InventoryClientDetails.vue';
import InventoryFilterPanel from '~/components/inventory/InventoryFilterPanel.vue';
import { Pagination } from '~/components/ui/pagination';
import { INVENTORY_COLUMNS, INVENTORY_FIELDS, inventoryFilterParams, useInventoryColumns } from '~/composables/useInventoryColumns';
import type { Client, ClientsResponse } from '~/types';

useHead({ title: 'Inventory' });

const ITEMS_PER_PAGE = 20;
const toolbarButtonClass = 'flex h-8 items-center rounded bg-primary px-3 text-sm font-semibold text-white hover:opacity-80';
const badgeClass = 'inline-block rounded border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs text-sky-700';

const { $api } = useNuxtApp();
const selectedColumns = useInventoryColumns();
const page = ref(0);
const search = ref('');
const filters = ref<Record<string, string>>({});
const filterOpen = ref(false);
const customizeOpen = ref(false);
const expanded = ref<string[]>([]);

const visibleColumns = computed(() => INVENTORY_COLUMNS.filter(column => selectedColumns.value.includes(column.key)));
const filterableColumns = computed(() => visibleColumns.value.filter(column => column.filterable));

const { data: response, pending, refresh } = useLazyAsyncData<ClientsResponse>(
	'inventory',
	() => {
		const params = [
			'sort=name',
			`fields[clients]=${INVENTORY_FIELDS}`,
			`page[limit]=${ITEMS_PER_PAGE}`,
			`page[offset]=${page.value * ITEMS_PER_PAGE}`,
			...inventoryFilterParams(filters.value),
		];
		return $api.clients.listClientsWithFilter(params.join('&'));
	},
	{ watch: [page] },
);
const clients = computed(() => response.value?.data || []);
const total = computed(() => response.value?.meta?.count || 0);

const chips = computed(() => Object.entries(filters.value)
	.filter(([, value]) => value)
	.map(([key, value]) => ({ key, value })));

const reload = async () => {
	expanded.value = [];
	if (page.value !== 0) {
		// The page watcher reloads the list
		page.value = 0;
		return;
	}
	await refresh();
};

// The search box is the "client" filter (name or address), like the reference
const applySearch = () => {
	filters.value = { ...filters.value, client: search.value.trim() };
	reload();
};

const removeFilter = (key: string) => {
	filters.value = Object.fromEntries(Object.entries(filters.value).filter(([filterKey]) => filterKey !== key));
	if (key === 'client') {
		search.value = '';
	}
	reload();
};

const openCustomize = () => {
	filterOpen.value = false;
	customizeOpen.value = true;
};

const toggleExpand = (id: string) => {
	expanded.value = expanded.value.includes(id)
		? expanded.value.filter(item => item !== id)
		: [...expanded.value, id];
};

const listValues = (client: Client, key: 'tags' | 'groups') => (client[key] || []) as string[];

const updatesCount = (client: Client, key: 'updates' | 'security_updates') => key === 'updates'
	? client.updates_status?.updates_available ?? 0
	: client.updates_status?.security_updates_available ?? 0;

// filesize defaults used by the reference: base 1000, two decimals ("33.31 GB")
const formatMemory = (bytes: number) => {
	const units = ['B', 'kB', 'MB', 'GB', 'TB'];
	const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1000)), units.length - 1);
	return `${Math.round((bytes / 1000 ** exponent) * 100) / 100} ${units[exponent]}`;
};

const cellValue = (client: Client, key: string) => {
	switch (key) {
		case 'ips':
			return [...(client.ipv4 || []), ...(client.ipv6 || [])].join(', ');
		case 'ipv4':
			return (client.ipv4 || []).join(', ');
		case 'ipv6':
			return (client.ipv6 || []).join(', ');
		case 'mem_total':
			return client.mem_total ? formatMemory(client.mem_total) : '-';
		default: {
			const value = client[key as keyof Client];
			return value === undefined || value === null || value === '' ? '-' : String(value);
		}
	}
};
</script>
