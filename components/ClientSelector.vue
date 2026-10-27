<template>
	<div class="relative max-h-[1720px] min-h-[480px] flex-1">
		<Tabs
			:model-value="selectedTab"
			@update:model-value="changeTab"
		>
			<div class="relative z-20 text-center text-sm font-bold text-muted after:absolute after:-left-0 after:-right-0 after:bottom-0 after:h-px after:bg-theme-border after:content-['']">
				<TabsList class="relative shrink-0 flex border-b border-mauve6">
					<ul class="relative flex justify-start w-full gap-0 -mb-px transition flex-nowrap">
						<TabsTrigger
							v-for="tab in tabs"
							:key="tab.key"
							as="li"
							:value="tab.key"
							:title="tab.tooltip"
							class="w-1/4 cursor-pointer whitespace-nowrap border-b-[3px] border-transparent hover:border-primary"
						>
							<span class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600 space-x-1">
								<component :is="tab.icon" />
								<span>{{ tab.label }}</span>
							</span>
						</TabsTrigger>
					</ul>
				</TabsList>
			</div>
			<div class="absolute inset-0 z-0 w-full">
				<div class="flex h-full flex-nowrap">
					<div class="flex-1 w-full h-full">
						<div class="px-1 text-sm font-normal">
							<!-- Default overview content when no tab is selected -->
							<div
								v-if="!selectedTab"
								class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-theme-dark/80"
							>
								<span class="text-primary">{{ displayText }}</span>
								<div class="flex w-1/4 flex-col items-center justify-center space-y-2">
									<button
										v-for="tab in tabs"
										:key="tab.key"
										class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
										type="button"
										:title="tab.tooltip"
										@click="changeTab(tab.key)"
									>
										<component :is="tab.icon" />
										<span>{{ tab.label }}</span>
									</button>
								</div>
							</div>
							<TabsContent value="individual-clients">
								<div class="absolute inset-0 z-0 h-full w-full">
									<div class="absolute inset-0 flex h-full w-full space-x-12 pt-24">
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Your selection
												</h3>
												<span class="w-3/12 rounded-full bg-primary text-center text-white">
													{{ sortedSelectedClients.length }} clients selected
												</span>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<label
													v-for="client in sortedSelectedClients"
													:key="client.id"
													class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
												>
													<input
														type="checkbox"
														checked
														:class="checkboxClass"
														@change="toggleClient(client)"
													>
													{{ client.name }}
												</label>
											</div>
										</div>
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Connected clients ({{ clientsList.count }})
												</h3>
												<div class="flex flex-col w-1/2">
													<div class="relative mt-1 flex w-full flex-col">
														<input
															id="clientFilter"
															v-model="clientsList.search"
															:class="filterInputClass"
															placeholder=" "
															type="text"
															autocomplete="off"
														>
														<label
															:class="filterLabelClass"
															for="clientFilter"
														>
															Filter (wildcards supported)
														</label>
													</div>
												</div>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<label
													v-for="client in clientsList.items"
													:key="client.id"
													class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
												>
													<input
														type="checkbox"
														:checked="!!selectedClients[client.id]"
														:class="checkboxClass"
														@change="toggleClient(client)"
													>
													{{ client.name }}
												</label>
												<LoadMore
													:list="clientsList"
													@load-more="loadClients(true)"
												/>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="client-groups">
								<div class="absolute inset-0 z-0 h-full w-full">
									<div class="absolute inset-0 flex h-full w-full space-x-12 pt-24">
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Your selection
												</h3>
												<span class="w-3/12 rounded-full bg-primary text-center text-white">
													{{ sortedSelectedGroups.length }} groups selected
												</span>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<label
													v-for="group in sortedSelectedGroups"
													:key="group.id"
													class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
												>
													<input
														type="checkbox"
														checked
														:class="checkboxClass"
														@change="toggleGroup(group)"
													>
													{{ group.description }} ({{ group.id }})
												</label>
											</div>
										</div>
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													All groups ({{ groupsList.count }})
												</h3>
												<div class="flex flex-col w-1/2">
													<div class="relative mt-1 flex w-full flex-col">
														<input
															id="groupFilter"
															v-model="groupsList.search"
															:class="filterInputClass"
															placeholder=" "
															type="text"
															autocomplete="off"
														>
														<label
															:class="filterLabelClass"
															for="groupFilter"
														>
															Filter (wildcards supported)
														</label>
													</div>
												</div>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<label
													v-for="group in groupsList.items"
													:key="group.id"
													class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
												>
													<input
														type="checkbox"
														:checked="!!selectedGroups[group.id]"
														:class="checkboxClass"
														@change="toggleGroup(group)"
													>
													{{ group.description }} ({{ group.id }})
												</label>
												<LoadMore
													:list="groupsList"
													@load-more="loadGroups(true)"
												/>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="clients-matching">
								<div class="absolute inset-0 flex h-full w-full flex-col space-y-4 pt-24">
									<div class="flex space-x-12">
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Your selection
												</h3>
												<span class="w-3/12 rounded-full bg-primary text-center text-white">
													{{ Object.keys(selectedMatched).length }} clients selected
												</span>
											</div>
										</div>
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													All clients ({{ matchingList.count }})
												</h3>
												<button
													type="button"
													class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3"
													title="Select columns"
													@click="showColumnModal = true"
												>
													<IconFilter :size="24" />
												</button>
											</div>
										</div>
									</div>

									<div class="border-theme-light-inverted relative mt-4 overflow-auto rounded border px-4 pt-2 w-full">
										<div class="overflow-x-auto overflow-y-hidden">
											<table class="min-w-full">
												<thead class="sticky">
													<tr>
														<th
															class="w-5 max-w-[50px] text-left table-cell px-3 pt-4 text-sm text-theme-th"
															scope="col"
														/>
														<th
															v-for="column in visibleColumns"
															:key="column.key"
															class="text-left min-w-[120px] table-cell px-3 pt-4 text-sm text-theme-th"
															scope="col"
														>
															<span class="truncate">{{ column.label }}</span>
															<input
																v-if="column.filterable"
																:id="`filter-${column.key}`"
																v-model="columnFilters[column.key]"
																:class="filterInputClass"
																class="mt-1"
																type="text"
																autocomplete="off"
																@keyup.enter="loadMatchingClients()"
															>
														</th>
													</tr>
													<tr>
														<th />
														<th
															:colspan="visibleColumns.length"
															class="border-theme-light-inverted whitespace-nowrap border-b px-3 pb-4 pt-1 text-left text-xxs font-normal"
														>
															All filters support wildcards (no regex)
														</th>
													</tr>
												</thead>
												<tbody>
													<tr
														v-for="client in matchingList.items"
														:key="client.id"
														class="border-theme-light-inverted group border-b"
													>
														<td class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter w-5 max-w-[50px] text-left">
															<input
																type="checkbox"
																:checked="!!selectedMatched[client.id]"
																:class="checkboxClass"
																@change="toggleMatchedClient(client)"
															>
														</td>
														<td
															v-for="column in visibleColumns"
															:key="column.key"
															class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter text-left"
														>
															{{ getClientFieldValue(client, column.key) }}
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<LoadMore
											:list="matchingList"
											class="my-4"
											@load-more="loadMatchingClients(true)"
										/>
									</div>
								</div>

								<ColumnSelectorModal
									v-model="showColumnModal"
									:selected-columns="selectedColumns"
									:available-columns="availableTableColumns"
									@update:selected-columns="updateSelectedColumns"
								/>
							</TabsContent>
							<TabsContent value="clients-by-tags">
								<div class="absolute inset-0 flex h-full w-full space-x-12 pt-24">
									<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
										<div class="flex h-12 w-full items-center justify-between">
											<h3 class="text-primary">
												Your selection
											</h3>
											<span class="w-3/12 rounded-full bg-primary text-center text-white">
												{{ sortedSelectedTags.length }} tags selected
											</span>
										</div>
										<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
											<label
												v-for="tag in sortedSelectedTags"
												:key="tag.tag"
												class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
											>
												<input
													type="checkbox"
													checked
													:class="checkboxClass"
													@change="toggleTag(tag)"
												>
												{{ tag.tag }} ({{ tag.client_ids.length }})
											</label>
										</div>
									</div>
									<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
										<div class="flex h-12 w-full items-center justify-between">
											<h3 class="text-primary">
												All tags ({{ tagsList.count }})
											</h3>
											<div class="flex flex-col w-1/2">
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="tagFilter"
														v-model="tagsList.search"
														:class="filterInputClass"
														placeholder=" "
														type="text"
														autocomplete="off"
													>
													<label
														:class="filterLabelClass"
														for="tagFilter"
													>
														Filter (wildcards supported)
													</label>
												</div>
											</div>
										</div>
										<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
											<label
												v-for="tag in tagsList.items"
												:key="tag.tag"
												class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
											>
												<input
													type="checkbox"
													:checked="!!selectedTags[tag.tag]"
													:class="checkboxClass"
													@change="toggleTag(tag)"
												>
												{{ tag.tag }} ({{ tag.client_ids.length }})
											</label>
											<LoadMore
												:list="tagsList"
												@load-more="loadTags(true)"
											/>
										</div>
									</div>
								</div>
							</TabsContent>
						</div>
					</div>
				</div>
			</div>
		</Tabs>
	</div>
</template>

<script setup lang="ts">
import { IconFilter } from '@tabler/icons-vue';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs';
import ColumnSelectorModal from '@/components/custom/modal-filter/ColumnSelectorModal.vue';
import type { Client, ClientGroup, Tag } from '~/types';

export type ClientSelectionTab = 'individual-clients' | 'client-groups' | 'clients-matching' | 'clients-by-tags';

interface PagedList<T> {
	items: T[];
	count: number;
	offset: number;
	search: string;
	loading: boolean;
	// Guards against slower, outdated responses overwriting newer ones
	requestId: number;
}

const props = withDefaults(defineProps<{
	title?: 'commands' | 'scripts';
}>(), {
	title: 'commands',
});

const emit = defineEmits<{
	'changed:tab': [tab: ClientSelectionTab];
	'update:clientIds': [clientIds: string[]];
	'update:groupIds': [groups: Record<string, ClientGroup>];
	'update:matchedIds': [clientIds: string[]];
	'update:tags': [tags: Record<string, Tag>];
}>();

const PAGE_LIMIT = 20;
// The client-tags endpoint supports no server side filters, so filtering fetches the maximum page
const TAGS_MAX_LIMIT = 500;
const CLIENT_FIELDS = 'id,name,os_full_name,os,os_arch,os_family,os_version,os_virtualization_role,os_virtualization_system,os_kernel,hostname,ipv4,ipv6,version,address,updates_status,client_auth_id,connection_state';

const checkboxClass = 'mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text';
const filterInputClass = 'primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';
const filterLabelClass = 'bg-theme peer-focus:text-theme-inverted absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal';

const executionType = computed(() => props.title === 'commands' ? 'command' : 'script');
const displayText = computed(() => `Execute ${props.title} on many clients concurrently. The client list will be defined by:`);

const tabs = computed(() => [
	{ key: 'individual-clients' as const, label: 'Individual Clients', icon: IndividualClientsIcon, tooltip: `Manually select the clients where ${executionType.value} is executed.` },
	{ key: 'client-groups' as const, label: 'Client Groups', icon: ClientGroupsIcon, tooltip: `Manually select the client groups where ${executionType.value} is executed.` },
	{ key: 'clients-matching' as const, label: 'Clients Matching', icon: ClientsMatchingIcon, tooltip: `Execute a ${executionType.value} on one or many clients where criteria is matching a regular expressions.` },
	{ key: 'clients-by-tags' as const, label: 'Clients by tags', icon: ClientsByTagsIcon, tooltip: `Execute a ${executionType.value} on one or many clients by tags.` },
]);

function newList<T>(): PagedList<T> {
	return { items: [], count: 0, offset: 0, search: '', loading: false, requestId: 0 };
}

const selectedTab = ref<ClientSelectionTab | ''>('');
const clientsList = reactive(newList<Client>()) as PagedList<Client>;
const groupsList = reactive(newList<ClientGroup>()) as PagedList<ClientGroup>;
const matchingList = reactive(newList<Client>()) as PagedList<Client>;
const tagsList = reactive(newList<Tag>()) as PagedList<Tag>;

const selectedClients = ref<Record<string, Client>>({});
const selectedGroups = ref<Record<string, ClientGroup>>({});
const selectedMatched = ref<Record<string, Client>>({});
const selectedTags = ref<Record<string, Tag>>({});

const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);
const sortedSelectedClients = computed(() => Object.values(selectedClients.value).sort(byName));
const sortedSelectedGroups = computed(() => Object.values(selectedGroups.value).sort((a, b) => a.description.localeCompare(b.description)));
const sortedSelectedTags = computed(() => Object.values(selectedTags.value).sort((a, b) => a.tag.localeCompare(b.tag)));

// Clients Matching table columns
const availableTableColumns = [
	{ key: 'hostname', label: 'Host Name', filterable: true },
	{ key: 'name', label: 'Client Name', filterable: true },
	{ key: 'id', label: 'ID', filterable: true },
	{ key: 'os_full_name', label: 'OS Full Name', filterable: true },
	{ key: 'os_kernel', label: 'OS Kernel', filterable: true },
	{ key: 'os_arch', label: 'OS Arch', filterable: true },
	{ key: 'os_family', label: 'OS Family', filterable: true },
	{ key: 'os_version', label: 'OS Version', filterable: true },
	{ key: 'os_virtualization_role', label: 'OS Virtualization Role', filterable: true },
	{ key: 'os_virtualization_system', label: 'OS Virtualization System', filterable: true },
	{ key: 'ipv4', label: 'IPv4 Addresses', filterable: true },
	{ key: 'ipv6', label: 'IPv6 Addresses', filterable: true },
	{ key: 'version', label: 'RPort version', filterable: true },
	// Derived from updates_status, which the API cannot filter on
	{ key: 'updates', label: 'Updates', filterable: false },
	{ key: 'security_updates', label: 'Security Updates', filterable: false },
];
const showColumnModal = ref(false);
const selectedColumns = ref<string[]>(['hostname', 'name', 'id', 'os_family', 'ipv4']);
const columnFilters = ref<Record<string, string>>({});
const visibleColumns = computed(() => availableTableColumns.filter(column => selectedColumns.value.includes(column.key)));

const toQuery = (params: Record<string, string | number>) => Object.entries(params)
	.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
	.join('&');

// Loads a page into the list; `append` keeps already loaded items for "Load More"
async function loadPage<T>(
	list: PagedList<T>,
	append: boolean,
	fetchPage: (offset: number) => Promise<{ data: T[]; meta?: { count: number } }>,
) {
	const requestId = ++list.requestId;
	const offset = append ? list.offset + PAGE_LIMIT : 0;
	list.loading = true;
	try {
		const response = await fetchPage(offset);
		if (requestId !== list.requestId) {
			return;
		}
		list.items = append ? [...list.items, ...response.data] : response.data;
		list.count = response.meta?.count ?? list.items.length;
		list.offset = offset;
	}
	catch (error) {
		console.error('Error loading client selection list:', error);
	}
	finally {
		if (requestId === list.requestId) {
			list.loading = false;
		}
	}
}

const loadClients = (append = false) => {
	const { $api } = useNuxtApp();
	return loadPage(clientsList, append, (offset) => {
		const params: Record<string, string | number> = {
			'sort': 'name',
			'fields[clients]': CLIENT_FIELDS,
			'page[limit]': PAGE_LIMIT,
			'page[offset]': offset,
			'filter[connection_state]': 'connected',
		};
		if (clientsList.search) {
			params['filter[*]'] = clientsList.search;
		}
		return $api.clients.listClientsWithFilter(toQuery(params));
	});
};

const loadGroups = (append = false) => {
	const { $api } = useNuxtApp();
	return loadPage(groupsList, append, (offset) => {
		const params: Record<string, string | number> = {
			'fields[client_groups]': 'id,description,client_ids,num_clients',
			'page[limit]': PAGE_LIMIT,
			'page[offset]': offset,
		};
		if (groupsList.search) {
			params['filter[*]'] = groupsList.search;
		}
		return $api.groups.listGroupsWithFilter(toQuery(params));
	});
};

const loadMatchingClients = (append = false) => {
	const { $api } = useNuxtApp();
	return loadPage(matchingList, append, (offset) => {
		const params: Record<string, string | number> = {
			'sort': 'name',
			'fields[clients]': CLIENT_FIELDS,
			'page[limit]': PAGE_LIMIT,
			'page[offset]': offset,
			'filter[connection_state]': 'connected',
		};
		visibleColumns.value.forEach((column) => {
			const value = columnFilters.value[column.key]?.trim();
			if (column.filterable && value) {
				params[`filter[${column.key}]`] = `${value}*`;
			}
		});
		return $api.clients.listClientsWithFilter(toQuery(params));
	});
};

// Same semantics as the API wildcard filter: case-insensitive full match where * matches anything
const wildcardMatcher = (pattern: string) => {
	const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*?');
	return new RegExp(`^${escaped}$`, 'i');
};

const loadTags = (append = false) => {
	const { $api } = useNuxtApp();
	const search = tagsList.search.trim();
	return loadPage(tagsList, append, async (offset) => {
		if (!search) {
			return $api.clients.listTags(toQuery({ 'page[limit]': PAGE_LIMIT, 'page[offset]': offset }));
		}
		const response = await $api.clients.listTags(toQuery({ 'page[limit]': TAGS_MAX_LIMIT, 'page[offset]': 0 }));
		const matcher = wildcardMatcher(search);
		const data = response.data.filter(tag => matcher.test(tag.tag));
		return { data, meta: { count: data.length } };
	});
};

const loaders: Record<ClientSelectionTab, () => Promise<void>> = {
	'individual-clients': loadClients,
	'client-groups': loadGroups,
	'clients-matching': loadMatchingClients,
	'clients-by-tags': loadTags,
};

const resetSelection = () => {
	selectedClients.value = {};
	selectedGroups.value = {};
	selectedMatched.value = {};
	selectedTags.value = {};
};

// Only one selection mode is active at a time; switching tabs clears every selection
const changeTab = (tab: string | number) => {
	const key = tab as ClientSelectionTab;
	selectedTab.value = key;
	resetSelection();
	emit('changed:tab', key);
	loaders[key]();
};

const watchSearch = (list: PagedList<unknown>, load: () => Promise<void>) => {
	let timer: ReturnType<typeof setTimeout> | undefined;
	watch(() => list.search, () => {
		clearTimeout(timer);
		timer = setTimeout(load, 300);
	});
};
watchSearch(clientsList, loadClients);
watchSearch(groupsList, loadGroups);
watchSearch(tagsList, loadTags);

function toggleEntry<T>(selection: Ref<Record<string, T>>, key: string, item: T) {
	selection.value = key in selection.value
		? Object.fromEntries(Object.entries(selection.value).filter(([entryKey]) => entryKey !== key))
		: { ...selection.value, [key]: item };
}

const toggleClient = (client: Client) => {
	toggleEntry(selectedClients, client.id, client);
	emit('update:clientIds', Object.keys(selectedClients.value));
};

const toggleGroup = (group: ClientGroup) => {
	toggleEntry(selectedGroups, group.id, group);
	emit('update:groupIds', selectedGroups.value);
};

const toggleMatchedClient = (client: Client) => {
	toggleEntry(selectedMatched, client.id, client);
	emit('update:matchedIds', Object.keys(selectedMatched.value));
};

const toggleTag = (tag: Tag) => {
	toggleEntry(selectedTags, tag.tag, tag);
	emit('update:tags', selectedTags.value);
};

const updateSelectedColumns = (columns: string[]) => {
	selectedColumns.value = columns;
	columnFilters.value = {};
};

const getClientFieldValue = (client: Client, key: string) => {
	switch (key) {
		case 'ipv4':
			return client.ipv4?.join(',') || '';
		case 'ipv6':
			return client.ipv6?.join(',') || '';
		case 'updates':
			return client.updates_status?.updates_available || 0;
		case 'security_updates':
			return client.updates_status?.security_updates_available || 0;
		default:
			return client[key as keyof Client] ?? '';
	}
};

const LoadMore = defineComponent({
	props: {
		list: { type: Object as PropType<PagedList<unknown>>, required: true },
	},
	emits: ['load-more'],
	setup(componentProps, { emit: emitLoadMore }) {
		return () => {
			if (componentProps.list.loading) {
				return h('div', { class: 'flex items-center justify-center p-4' }, [
					h('span', { class: 'text-theme-label' }, 'Loading...'),
				]);
			}
			if (componentProps.list.items.length >= componentProps.list.count) {
				return null;
			}
			return h('button', {
				class: 'hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center justify-center duration-200 focus:outline-none w-full bg-primary',
				type: 'button',
				onClick: () => emitLoadMore('load-more'),
			}, 'Load More');
		};
	},
});

// Icon components
const IndividualClientsIcon = () => h('svg', {
	xmlns: 'http://www.w3.org/2000/svg',
	width: '24px',
	height: '24px',
	viewBox: '0 0 256 256',
	class: 'icon',
}, [
	h('path', {
		fill: 'currentColor',
		d: 'm120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z',
	}),
]);

const ClientGroupsIcon = () => h('svg', {
	xmlns: 'http://www.w3.org/2000/svg',
	width: '24px',
	height: '24px',
	viewBox: '0 0 2048 2048',
	class: 'icon',
}, [
	h('path', {
		fill: 'currentColor',
		d: 'M1664 1536h-128v-128h128v128zm-256 0h-128v-128h128v128zm256-512h-128V896h128v128zm-256 0h-128V896h128v128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15h1408zm64 1152H256v384h1536v-384zm0-512H256v384h1536V768zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320h1536zm-256-256h128v128h-128V384zm-256 0h128v128h-128V384z',
	}),
]);

const ClientsMatchingIcon = () => h('svg', {
	xmlns: 'http://www.w3.org/2000/svg',
	width: '24px',
	height: '24px',
	viewBox: '0 0 24 24',
	class: 'icon',
}, [
	h('path', {
		'fill': 'none',
		'stroke': 'currentColor',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round',
		'stroke-width': '1.5',
		'd': 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
	}),
]);

const ClientsByTagsIcon = () => h('svg', {
	xmlns: 'http://www.w3.org/2000/svg',
	width: '24px',
	height: '24px',
	viewBox: '0 0 24 24',
	class: 'icon',
}, [
	h('g', {
		'fill': 'none',
		'stroke': 'currentColor',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round',
		'stroke-width': '1.5',
	}, [
		h('path', {
			d: 'M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z',
		}),
		h('path', {
			d: 'M6 6h.008v.008H6V6Z',
		}),
	]),
]);
</script>
