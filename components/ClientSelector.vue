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
													v-for="client in selectedClients"
													:key="client"
													class="flex items-center justify-between p-2 bg-theme-light rounded"
												>
													<span class="text-theme-inverted text-sm">{{ client }}</span>
													<button
														@click="removeClient(client)"
														class="text-red-500 hover:text-red-700"
													>
														×
													</button>
												</div>
											</div>
										</div>
										<div class="relative flex h-full w-full flex-col items-center justify-start space-y-4">
											<div class="flex flex h-12 w-full items-center justify-between">
												<h3 class="text-primary">
													Connected clients ({{ availableClients.length }})
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
													:key="client"
												>
													<div class="flex flex-col">
														<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
															<input
																type="checkbox"
																:checked="selectedClients.includes(client)"
																@change="toggleClient(client)"
																class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
															>
															{{ client }}
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="client-groups">
								<div class="p-6">
									<h3 class="text-lg font-medium text-theme-inverted mb-4">
										Client Groups
									</h3>
									<p class="text-theme-inverted-lighter mb-4">
										Select client groups to run commands on:
									</p>
									<!-- Client groups selection content goes here -->
									<div class="text-center text-theme-inverted-lighter">
										Client groups selection interface will be implemented here
									</div>
								</div>
							</TabsContent>
							<TabsContent value="clients-matching">
								<div class="p-6">
									<h3 class="text-lg font-medium text-theme-inverted mb-4">
										Clients Matching
									</h3>
									<p class="text-theme-inverted-lighter mb-4">
										Define criteria to match clients:
									</p>
									<!-- Clients matching criteria content goes here -->
									<div class="text-center text-theme-inverted-lighter">
										Clients matching criteria interface will be implemented here
									</div>
								</div>
							</TabsContent>
							<TabsContent value="clients-by-tags">
								<div class="p-6">
									<h3 class="text-lg font-medium text-theme-inverted mb-4">
										Clients by Tags
									</h3>
									<p class="text-theme-inverted-lighter mb-4">
										Select clients based on tags:
									</p>
									<!-- Clients by tags selection content goes here -->
									<div class="text-center text-theme-inverted-lighter">
										Clients by tags selection interface will be implemented here
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

// Mock available clients (in a real app, this would come from an API)
const availableClients = ref([
	'alhdo-XPS-15-9520',
	'citadelle',
	'dixmude',
	'mistral',
]);

// Computed filtered clients based on search
const filteredClients = computed(() => {
	if (!filterText.value) {
		return availableClients.value;
	}

	const filter = filterText.value.toLowerCase();
	return availableClients.value.filter(client =>
		client.toLowerCase().includes(filter)
	);
});

// Methods
const toggleClient = (clientName: string) => {
	const index = selectedClients.value.indexOf(clientName);
	if (index > -1) {
		selectedClients.value.splice(index, 1);
	} else {
		selectedClients.value.push(clientName);
	}
};

const removeClient = (clientName: string) => {
	const index = selectedClients.value.indexOf(clientName);
	if (index > -1) {
		selectedClients.value.splice(index, 1);
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
