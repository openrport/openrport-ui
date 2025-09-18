<template>
	<div class="relative max-h-[1720px] min-h-[480px] flex-1">
		<Tabs v-model="selectedTab">
			<div class="relative z-20 text-center text-sm font-bold text-muted after:absolute after:-left-0 after:-right-0 after:bottom-0 after:h-px after:bg-theme-border after:content-['']">
				<TabsList class="relative shrink-0 flex border-b border-mauve6">
					<ul class="relative flex justify-start w-full gap-0 -mb-px transition flex-nowrap">
						<TabsTrigger
							as="li"
							value="individual-clients"
							class="w-1/4 cursor-pointer whitespace-nowrap border-b-[3px] border-transparent hover:border-primary"
						>
							<span class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600 space-x-1">
								<IndividualClientsIcon />
								<span>Individual Clients</span>
							</span>
						</TabsTrigger>
						<TabsTrigger
							as="li"
							value="client-groups"
							class="w-1/4 cursor-pointer whitespace-nowrap border-b-[3px] border-transparent hover:border-primary"
						>
							<span class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600 space-x-1">
								<ClientGroupsIcon />
								<span>Client Groups</span>
							</span>
						</TabsTrigger>
						<TabsTrigger
							as="li"
							value="clients-matching"
							class="w-1/4 cursor-pointer whitespace-nowrap border-b-[3px] border-transparent hover:border-primary"
						>
							<span class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600 space-x-1">
								<ClientsMatchingIcon />
								<span>Clients Matching</span>
							</span>
						</TabsTrigger>
						<TabsTrigger
							as="li"
							value="clients-by-tags"
							class="w-1/4 cursor-pointer whitespace-nowrap border-b-[3px] border-transparent hover:border-primary"
						>
							<span class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600 space-x-1">
								<ClientsByTagsIcon />
								<span>Clients by tags</span>
							</span>
						</TabsTrigger>
					</ul>
				</TabsList>
			</div>
			<div class="absolute inset-0 z-0 w-full pt-12 top-20">
				<div class="flex h-full flex-nowrap">
					<div class="flex-1 w-full h-full">
						<div class="px-1 text-sm font-normal">
							<!-- Default overview content when no tab is selected -->
							<div
								v-if="!selectedTab || selectedTab === 'overview'"
								class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-theme-dark/80"
							>
								<span class="text-primary">{{ displayText }}</span>
								<div class="flex w-1/4 flex-col items-center justify-center space-y-2">
									<button
										class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
										type="button"
										@click="selectedTab = 'individual-clients'"
									>
										<IndividualClientsIcon />
										<span>Individual Clients</span>
									</button>
									<button
										class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
										type="button"
										@click="selectedTab = 'client-groups'"
									>
										<ClientGroupsIcon />
										<span>Client Groups</span>
									</button>
									<button
										class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
										type="button"
										@click="selectedTab = 'clients-matching'"
									>
										<ClientsMatchingIcon />
										<span>Clients Matching</span>
									</button>
									<button
										class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
										type="button"
										@click="selectedTab = 'clients-by-tags'"
									>
										<ClientsByTagsIcon />
										<span>Clients by tags</span>
									</button>
								</div>
							</div>
							<TabsContent value="individual-clients">
								<div class="absolute inset-0 z-0 h-full w-full">
									<div class="absolute inset-0 flex h-full w-full space-x-12 pt-24">
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Your selection
												</h3>
												<span class="w-3/12 rounded-full bg-primary text-center text-white">
													{{ selectedClients.length }} clients selected
												</span>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<div
													v-for="clientId in selectedClients"
													:key="clientId"
													class="flex items-center justify-between p-2 bg-theme-light rounded"
												>
													<span class="text-theme-inverted text-sm">{{ getClientNameById(clientId) }}</span>
													<button
														class="text-red-500 hover:text-red-700"
														@click="removeClient(clientId)"
													>
														×
													</button>
												</div>
											</div>
										</div>
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Connected clients ({{ totalClientsCount > availableClients.length ? `${availableClients.length}/${totalClientsCount}` : availableClients.length }})
												</h3>
												<div class="flex flex-col w-1/2">
													<div class="relative mt-1 flex w-full flex-col">
														<input
															id="clientFilter"
															v-model="filterText"
															class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
															placeholder=" "
															type="text"
															autocomplete="off"
														>
														<label
															class="bg-theme peer-focus:text-theme-inverted absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
															for="clientFilter"
														>
															Filter (wildcards supported)
														</label>
													</div>
												</div>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<div
													v-for="client in filteredClients"
													:key="client.id"
												>
													<div class="flex flex-col">
														<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
															<input
																type="checkbox"
																:checked="selectedClients.includes(client.id)"
																class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
																@change="toggleClient(client.id)"
															>
															{{ client.name }}
														</label>
													</div>
												</div>

												<!-- Load More Button -->
												<button
													v-if="hasMoreClients && !isLoading"
													class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none block w-full bg-primary"
													type="button"
													@click="loadMoreClients"
												>
													Load More
												</button>

												<!-- Loading indicator -->
												<div
													v-if="isLoading"
													class="flex items-center justify-center p-4"
												>
													<span class="text-theme-label">Loading...</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="client-groups">
								<div class="absolute inset-0 z-0 h-full w-full">
									<div class="absolute inset-0 flex h-full w-full space-x-12 pt-24">
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Your selection
												</h3>
												<span class="w-3/12 rounded-full bg-primary text-center text-white">
													{{ selectedGroups.length }} groups selected
												</span>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<div
													v-for="groupId in selectedGroups"
													:key="groupId"
													class="flex items-center justify-between p-2 bg-theme-light rounded"
												>
													<span class="text-theme-inverted text-sm">{{ getGroupNameById(groupId) }}</span>
													<button
														class="text-red-500 hover:text-red-700"
														@click="removeGroup(groupId)"
													>
														×
													</button>
												</div>
											</div>
										</div>
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Available groups ({{ totalGroupsCount > availableGroups.length ? `${availableGroups.length}/${totalGroupsCount}` : availableGroups.length }})
												</h3>
												<div class="flex flex-col w-1/2">
													<div class="relative mt-1 flex w-full flex-col">
														<input
															id="groupFilter"
															v-model="groupFilterText"
															class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
															placeholder=" "
															type="text"
															autocomplete="off"
														>
														<label
															class="bg-theme peer-focus:text-theme-inverted absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
															for="groupFilter"
														>
															Filter (wildcards supported)
														</label>
													</div>
												</div>
											</div>
											<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
												<div
													v-for="group in filteredGroups"
													:key="group.id"
												>
													<div class="flex flex-col">
														<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
															<input
																type="checkbox"
																:checked="selectedGroups.includes(group.id)"
																class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
																@change="toggleGroup(group.id)"
															>
															{{ group.description }} ({{ group.num_clients }} clients)
														</label>
													</div>
												</div>

												<!-- Load More Button -->
												<button
													v-if="hasMoreGroups && !isLoadingGroups"
													class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none block w-full bg-primary"
													type="button"
													@click="loadMoreGroups"
												>
													Load More
												</button>

												<!-- Loading indicator -->
												<div
													v-if="isLoadingGroups"
													class="flex items-center justify-center p-4"
												>
													<span class="text-theme-label">Loading...</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="clients-matching">
								<div class="absolute inset-0 flex h-full w-full flex-col space-y-4 pt-24">
									<!-- Header Section -->
									<div class="flex space-x-12">
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Your selection
												</h3>
												<span class="w-3/12 rounded-full bg-primary text-center text-white">
													{{ matchingSelectedClients.length }} clients selected
												</span>
											</div>
										</div>
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													All clients ({{ matchingFilteredClients.length }})
												</h3>
												<button
													type="button"
													class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3"
													@click="showColumnModal = true"
												>
													<span class="flex items-center justify-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="24px"
															height="24px"
															viewBox="0 0 24 24"
															class="icon"
														>
															<path
																fill="currentColor"
																d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4v2Z"
															/>
														</svg>
													</span>
												</button>
											</div>
										</div>
									</div>

									<!-- Table Section -->
									<div class="border-theme-light-inverted absolute relative mt-4 overflow-auto rounded border px-4 pt-2 w-full">
										<div class="overflow-x-auto overflow-y-hidden">
											<table class="min-w-full">
												<thead class="sticky">
													<tr>
														<!-- Checkbox column -->
														<th
															class="w-5 max-w-[50px] text-left table-cell px-3 pt-4 text-sm text-theme-th"
															scope="col"
														>
															<span class="truncate" />
														</th>

														<!-- Dynamic columns -->
														<th
															v-for="column in visibleColumns"
															:key="column.key"
															class="text-left min-w-[120px] table-cell px-3 pt-4 text-sm text-theme-th"
															scope="col"
														>
															<span class="truncate">{{ column.label }}</span>
															<div class="flex flex-col">
																<div class="relative mt-1 flex w-full flex-col">
																	<input
																		:id="`filter-${column.key}`"
																		v-model="columnFilters[column.key]"
																		class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
																		placeholder=" "
																		type="text"
																		autocomplete="off"
																		@keyup.enter="applyFilters"
																	>
																	<label
																		:for="`filter-${column.key}`"
																		class="hidden absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
																	>
																		Match
																	</label>
																</div>
															</div>
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
														v-for="client in matchingFilteredClients"
														:key="client.id"
														class="border-theme-light-inverted group border-b"
													>
														<!-- Checkbox column -->
														<td class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter w-5 max-w-[50px] text-left">
															<div class="flex flex-col">
																<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
																	<input
																		type="checkbox"
																		:checked="matchingSelectedClients.includes(client.id)"
																		class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
																		@change="toggleMatchingClient(client.id)"
																	>
																</label>
															</div>
														</td>

														<!-- Dynamic columns -->
														<td
															v-for="column in visibleColumns"
															:key="column.key"
															class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter text-left"
														>
															{{ getClientFieldValue(client, column.key) }}
														</td>
													</tr>
													<tr>
														<td
															class="py-4"
															colspan="2"
														/>
													</tr>
												</tbody>
											</table>
										</div>
										<div class="bg-theme-table-footer" />
									</div>
								</div>

								<!-- Column Selector Modal -->
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
										<div class="flex flex h-12 w-full items-center justify-between">
											<h3 class="text-primary">
												Your selection
											</h3>
											<span class="w-3/12 rounded-full bg-primary text-center text-white">
												{{ selectedTags.length }} tags selected
											</span>
										</div>
										<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
											<div
												v-for="tagName in selectedTags"
												:key="tagName"
												class="flex items-center justify-between p-2 bg-theme-light rounded"
											>
												<span class="text-theme-inverted text-sm">{{ getTagDisplayName(tagName) }}</span>
												<button
													class="text-red-500 hover:text-red-700"
													@click="removeTag(tagName)"
												>
													×
												</button>
											</div>
										</div>
									</div>
									<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
										<div class="flex flex h-12 w-full items-center justify-between">
											<h3 class="text-primary">
												All tags ({{ totalTagsCount > availableTags.length ? `${availableTags.length}/${totalTagsCount}` : availableTags.length }})
											</h3>
											<div class="flex flex-col w-1/2">
												<div class="relative mt-1 flex w-full flex-col">
													<input
														id="tagFilter"
														v-model="tagFilterText"
														class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
														placeholder=" "
														type="text"
														autocomplete="off"
													>
													<label
														class="bg-theme peer-focus:text-theme-inverted absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
														for="tagFilter"
													>
														Filter (wildcards supported)
													</label>
												</div>
											</div>
										</div>
										<div class="absolute inset-0 top-12 w-full flex-1 space-y-4 overflow-auto bg-theme-dark p-4">
											<div
												v-for="tag in filteredTags"
												:key="tag.tag"
											>
												<div class="flex flex-col">
													<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
														<input
															type="checkbox"
															:checked="selectedTags.includes(tag.tag)"
															class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
															@change="toggleTag(tag.tag)"
														>
														{{ tag.tag }} ({{ tag.client_count }})
													</label>
												</div>
											</div>

											<!-- Load More Button -->
											<button
												v-if="hasMoreTags && !isLoadingTags"
												class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none block w-full bg-primary"
												type="button"
												@click="loadMoreTags"
											>
												Load More
											</button>

											<!-- Loading indicator -->
											<div
												v-if="isLoadingTags"
												class="flex items-center justify-center p-4"
											>
												<span class="text-theme-label">Loading...</span>
											</div>
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
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs';
import ColumnSelectorModal from '@/components/custom/modal-filter/ColumnSelectorModal.vue';

interface Props {
	title: 'commands' | 'scripts';
}

const props = withDefaults(defineProps<Props>(), {
	title: 'commands',
});

const selectedTab = ref('');

// Dynamic text based on title prop
const displayText = computed(() => {
	return `Execute ${props.title} on many clients concurrently. The client list will be defined by:`;
});

// Client selection state
const selectedClients = ref<string[]>([]);
const filterText = ref('');
const isLoading = ref(false);
const currentOffset = ref(0);
const pageLimit = 20;
const hasMoreClients = ref(false);

// API client data
const availableClients = ref<Array<{ id: string; name: string }>>([]);
const totalClientsCount = ref(0);

// Groups selection state
const selectedGroups = ref<string[]>([]);
const groupFilterText = ref('');
const isLoadingGroups = ref(false);
const currentGroupOffset = ref(0);
const hasMoreGroups = ref(false);

// API groups data
const availableGroups = ref<Array<{ id: string; description: string; num_clients: number }>>([]);
const totalGroupsCount = ref(0);

// Clients Matching state
const matchingSelectedClients = ref<string[]>([]);
const matchingClients = ref<any[]>([]);
const isLoadingMatching = ref(false);
const columnFilters = ref<Record<string, string>>({});
const showColumnModal = ref(false);
const selectedColumns = ref<string[]>(['hostname', 'name', 'id', 'os_family', 'ipv4']);

// Available table columns
const availableTableColumns = [
	{ key: 'hostname', label: 'Host Name' },
	{ key: 'name', label: 'Client Name' },
	{ key: 'id', label: 'ID' },
	{ key: 'os_full_name', label: 'OS Full Name' },
	{ key: 'os_kernel', label: 'OS Kernel' },
	{ key: 'os_arch', label: 'OS Arch' },
	{ key: 'os_family', label: 'OS Family' },
	{ key: 'os_version', label: 'OS Version' },
	{ key: 'os_virtualization_role', label: 'OS Virtualization Role' },
	{ key: 'os_virtualization_system', label: 'OS Virtualization System' },
	{ key: 'ipv4', label: 'IPv4 Addresses' },
	{ key: 'ipv6', label: 'IPv6 Addresses' },
	{ key: 'version', label: 'RPort version' },
	{ key: 'updates_status', label: 'Updates' },
	{ key: 'client_auth_id', label: 'Security Updates' },
];

// Computed visible columns
const visibleColumns = computed(() => {
	return availableTableColumns.filter(col => selectedColumns.value.includes(col.key));
});

// Computed filtered clients for matching tab
const matchingFilteredClients = computed(() => {
	return matchingClients.value;
});

// Tags selection state
const selectedTags = ref<string[]>([]);
const tagFilterText = ref('');
const isLoadingTags = ref(false);
const currentTagOffset = ref(0);
const hasMoreTags = ref(false);

// API tags data
const availableTags = ref<Array<{ tag: string; client_ids: string[]; client_count: number }>>([]);
const totalTagsCount = ref(0);

// Computed filtered tags
const filteredTags = computed(() => {
	return availableTags.value;
});

// Build the filter string for the API
const buildFilterString = (search?: string, offset = 0) => {
	const fields = 'id,name,os_full_name,os,os_arch,os_family,os_version,os_virtualization_role,os_virtualization_system,os_kernel,hostname,ipv4,ipv6,version,address,updates_status,client_auth_id,connection_state';
	let filterString = `sort=name&fields[clients]=${fields}&page[limit]=${pageLimit}&page[offset]=${offset}`;

	if (search && search.trim()) {
		// For wildcards, convert * to % for the API
		const searchTerm = search.replace(/\*/g, '%');
		filterString += `&filter[name]=${encodeURIComponent(searchTerm)}`;
	}

	return filterString;
};

// Load clients from API
const loadClients = async (search?: string, offset = 0, append = false) => {
	const { $api } = useNuxtApp();

	try {
		isLoading.value = true;
		const filterString = buildFilterString(search, offset);
		const response = await $api.clients.listClientsWithFilter(filterString);

		if (response?.data) {
			const clients = response.data.map((client: any) => ({
				id: client.id,
				name: client.name || client.id,
			}));

			if (append) {
				availableClients.value.push(...clients);
			}
			else {
				availableClients.value = clients;
			}

			// Check if there are more clients to load
			hasMoreClients.value = response.data.length === pageLimit;
			totalClientsCount.value = response.meta?.total || availableClients.value.length;
		}
	}
	catch (error) {
		console.error('Error loading clients:', error);
	}
	finally {
		isLoading.value = false;
	}
};

// Load more clients (pagination)
const loadMoreClients = async () => {
	currentOffset.value += pageLimit;
	await loadClients(filterText.value, currentOffset.value, true);
};

// Computed filtered clients - now just returns the API results since filtering is done server-side
const filteredClients = computed(() => {
	return availableClients.value;
});

// Watch for filter changes and reload data
let filterTimeout: NodeJS.Timeout;
watch(filterText, (newValue) => {
	clearTimeout(filterTimeout);
	filterTimeout = setTimeout(async () => {
		currentOffset.value = 0;
		await loadClients(newValue);
	}, 300); // Debounce for 300ms
});

// Build filter string for groups API
const buildGroupFilterString = (search?: string, offset = 0) => {
	const fields = 'id,description,num_clients';
	let filterString = `sort=description&fields[client_groups]=${fields}&page[limit]=${pageLimit}&page[offset]=${offset}`;

	if (search && search.trim()) {
		// For wildcards, convert * to % for the API
		const searchTerm = search.replace(/\*/g, '%');
		filterString += `&filter[description]=${encodeURIComponent(searchTerm)}`;
	}

	return filterString;
};

// Load groups from API
const loadGroups = async (search?: string, offset = 0, append = false) => {
	const { $api } = useNuxtApp();

	try {
		isLoadingGroups.value = true;
		const filterString = buildGroupFilterString(search, offset);
		const response = await $api.groups.listGroupsWithFilter(filterString);

		if (response?.data) {
			const groups = response.data.map((group: any) => ({
				id: group.id,
				description: group.description || group.id,
				num_clients: group.num_clients || 0,
			}));

			if (append) {
				availableGroups.value.push(...groups);
			}
			else {
				availableGroups.value = groups;
			}

			// Check if there are more groups to load
			hasMoreGroups.value = response.data.length === pageLimit;
			totalGroupsCount.value = response.meta?.total || availableGroups.value.length;
		}
	}
	catch (error) {
		console.error('Error loading groups:', error);
	}
	finally {
		isLoadingGroups.value = false;
	}
};

// Load more groups (pagination)
const loadMoreGroups = async () => {
	currentGroupOffset.value += pageLimit;
	await loadGroups(groupFilterText.value, currentGroupOffset.value, true);
};

// Computed filtered groups - returns API results since filtering is done server-side
const filteredGroups = computed(() => {
	return availableGroups.value;
});

// Watch for group filter changes
let groupFilterTimeout: NodeJS.Timeout;
watch(groupFilterText, (newValue) => {
	clearTimeout(groupFilterTimeout);
	groupFilterTimeout = setTimeout(async () => {
		currentGroupOffset.value = 0;
		await loadGroups(newValue);
	}, 300); // Debounce for 300ms
});

// Build filter string for matching clients API
const buildMatchingFilterString = () => {
	const fields = 'id,name,os_full_name,os,os_arch,os_family,os_version,os_virtualization_role,os_virtualization_system,os_kernel,hostname,ipv4,ipv6,version,address,updates_status,client_auth_id,connection_state';
	let filterString = `sort=name&fields[clients]=${fields}&page[limit]=20&page[offset]=0`;

	// Add column filters
	Object.entries(columnFilters.value).forEach(([key, value]) => {
		if (value && value.trim()) {
			// Convert wildcards * to % for API
			const searchTerm = value.replace(/\*/g, '%');
			filterString += `&filter[${key}]=${encodeURIComponent(searchTerm)}`;
		}
	});

	return filterString;
};

// Load matching clients with column filters
const loadMatchingClients = async () => {
	const { $api } = useNuxtApp();

	try {
		isLoadingMatching.value = true;
		const filterString = buildMatchingFilterString();
		const response = await $api.clients.listClientsWithFilter(filterString);

		if (response?.data) {
			matchingClients.value = response.data;
		}
	}
	catch (error) {
		console.error('Error loading matching clients:', error);
	}
	finally {
		isLoadingMatching.value = false;
	}
};

// Apply filters when user presses Enter
const applyFilters = () => {
	loadMatchingClients();
};

// Get client field value for table display
const getClientFieldValue = (client: any, fieldKey: string) => {
	switch (fieldKey) {
		case 'ipv4':
			return Array.isArray(client.ipv4) ? client.ipv4.join(',') : client.ipv4 || '';
		case 'ipv6':
			return Array.isArray(client.ipv6) ? client.ipv6.join(',') : client.ipv6 || '';
		default:
			return client[fieldKey] || '';
	}
};

// Toggle matching client selection
const toggleMatchingClient = (clientId: string) => {
	const index = matchingSelectedClients.value.indexOf(clientId);
	if (index > -1) {
		matchingSelectedClients.value.splice(index, 1);
	}
	else {
		matchingSelectedClients.value.push(clientId);
	}
};

// Update selected columns
const updateSelectedColumns = (newColumns: string[]) => {
	selectedColumns.value = newColumns;
};

// Build filter string for tags API
const buildTagFilterString = (search?: string, offset = 0) => {
	let filterString = `page[limit]=${pageLimit}&page[offset]=${offset}`;

	if (search && search.trim()) {
		// For wildcards, convert * to % for the API
		const searchTerm = search.replace(/\*/g, '%');
		filterString += `&filter[tag]=${encodeURIComponent(searchTerm)}`;
	}

	return filterString;
};

// Load tags from API
const loadTags = async (search?: string, offset = 0, append = false) => {
	const { $api } = useNuxtApp();

	try {
		isLoadingTags.value = true;
		const filterString = buildTagFilterString(search, offset);
		const response = await $api.clients.listTags(filterString);

		if (response?.data) {
			const tags = response.data.map((tag: any) => ({
				tag: tag.tag,
				client_ids: tag.client_ids,
				client_count: tag.client_ids.length,
			}));

			if (append) {
				availableTags.value.push(...tags);
			} else {
				availableTags.value = tags;
			}

			// Check if there are more tags to load
			hasMoreTags.value = response.data.length === pageLimit;
			totalTagsCount.value = response.meta?.count || availableTags.value.length;
		}
	} catch (error) {
		console.error('Error loading tags:', error);
	} finally {
		isLoadingTags.value = false;
	}
};

// Load more tags (pagination)
const loadMoreTags = async () => {
	currentTagOffset.value += pageLimit;
	await loadTags(tagFilterText.value, currentTagOffset.value, true);
};

// Watch for tag filter changes
let tagFilterTimeout: NodeJS.Timeout;
watch(tagFilterText, (newValue) => {
	clearTimeout(tagFilterTimeout);
	tagFilterTimeout = setTimeout(async () => {
		currentTagOffset.value = 0;
		await loadTags(newValue);
	}, 300); // Debounce for 300ms
});

// Helper function to get tag display name
const getTagDisplayName = (tagName: string) => {
	const tag = availableTags.value.find(t => t.tag === tagName);
	return tag ? `${tag.tag} (${tag.client_count})` : tagName;
};

// Tag methods
const toggleTag = (tagName: string) => {
	const index = selectedTags.value.indexOf(tagName);
	if (index > -1) {
		selectedTags.value.splice(index, 1);
	} else {
		selectedTags.value.push(tagName);
	}
};

const removeTag = (tagName: string) => {
	const index = selectedTags.value.indexOf(tagName);
	if (index > -1) {
		selectedTags.value.splice(index, 1);
	}
};

// Watch for tab changes to load data only when needed
watch(selectedTab, (newTab) => {
	if (newTab === 'individual-clients' && availableClients.value.length === 0) {
		loadClients();
	}
	else if (newTab === 'client-groups' && availableGroups.value.length === 0) {
		loadGroups();
	}
	else if (newTab === 'clients-matching' && matchingClients.value.length === 0) {
		loadMatchingClients();
	}
	else if (newTab === 'clients-by-tags' && availableTags.value.length === 0) {
		loadTags();
	}
});

// Helper function to get client name by ID
const getClientNameById = (clientId: string) => {
	const client = availableClients.value.find(c => c.id === clientId);
	return client?.name || clientId;
};

// Helper function to get group name by ID
const getGroupNameById = (groupId: string) => {
	const group = availableGroups.value.find(g => g.id === groupId);
	return group?.description || groupId;
};

// Client methods
const toggleClient = (clientId: string) => {
	const index = selectedClients.value.indexOf(clientId);
	if (index > -1) {
		selectedClients.value.splice(index, 1);
	}
	else {
		selectedClients.value.push(clientId);
	}
};

const removeClient = (clientId: string) => {
	const index = selectedClients.value.indexOf(clientId);
	if (index > -1) {
		selectedClients.value.splice(index, 1);
	}
};

// Group methods
const toggleGroup = (groupId: string) => {
	const index = selectedGroups.value.indexOf(groupId);
	if (index > -1) {
		selectedGroups.value.splice(index, 1);
	}
	else {
		selectedGroups.value.push(groupId);
	}
};

const removeGroup = (groupId: string) => {
	const index = selectedGroups.value.indexOf(groupId);
	if (index > -1) {
		selectedGroups.value.splice(index, 1);
	}
};

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

<style scoped>

</style>
