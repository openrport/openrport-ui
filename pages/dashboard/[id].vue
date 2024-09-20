<template>
	<div class="flex-1 max-h-screen scrollbar-hide xl:overflow-y-auto">
		<div
			class="h-screen max-h-screen px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12"
		>
			<div class="relative w-full h-full">
				<device-header :device="device"></device-header>
				<div class="absolute inset-0 w-full h-full">
					<div class="z-10 w-full h-full pt-16">
						<!--Create tabs from here-->
						<Tabs default-value="inventory">
							<div class="relative z-20 text-center text-sm font-bold text-muted after:absolute after:-left-0 after:-right-0 after:bottom-0 after:h-px after:bg-theme-border after:content-['']">
								<div class="flex items-center overflow-hidden">
									<ScrollArea>
										<TabsList class="relative shrink-0 flex border-b border-mauve6">
											<Button type="button" class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 flex h-14 w-6 items-center justify-center px-0 py-0 focus:border-0 focus:outline-none focus:ring-0">
												<span
													class="flex items-center justify-center"
													style="
														width: 24px;
														height: 24px;
													">
													<svg
														data-v-ca945699=""
														xmlns="http://www.w3.org/2000/svg"
														width="24px"
														height="24px"
														viewBox="0 0 24 24"
														class="icon"
													>
														<path
															fill="currentColor"
															d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275Z"
														></path>
													</svg>
												</span>
											</Button>
											<div class="overflow-hidden">
												<ul
													class="relative flex justify-start w-full gap-0 -mb-px transition flex-nowrap"
													style="
														transform: translateX(
															0px
														);
													"
												>
													<TabsTrigger
														as="li"
														value="inventory"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Inventory
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="tunnels"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Tunnels
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="meta-data"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Meta-Data
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="documents"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Documents
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="commands"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Commands
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="scripts"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Scripts
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="monitoring"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Monitoring
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="files"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-600"
														>
															Files
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="audit"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-800"
														>
															Audit
														</span>
													</TabsTrigger>
													<TabsTrigger
														as="li"
														value="schedules"
														class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent"
													>
														<span
															class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter text-gray-600 hover:text-primary-800"
														>
															Schedules
														</span>
													</TabsTrigger>
												</ul>
											</div>
											<Button
												class="flex inline-flex items-center justify-center w-6 p-3 px-0 py-0 duration-200 rounded-full focus:outline-none h-14 focus:border-0 focus:ring-0"
											>
												<span
													class="flex items-center justify-center"
													style="
														width: 24px;
														height: 24px;
													"
													><svg
														data-v-ca945699=""
														xmlns="http://www.w3.org/2000/svg"
														width="24px"
														height="24px"
														viewBox="0 0 24 24"
														class="icon"
													>
														<path
															fill="currentColor"
															d="M8.7 17.3q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z"
														></path>
													</svg>
												</span>
											</Button>
										</TabsList>
										<ScrollBar orientation="horizontal" />
									</ScrollArea>
								</div>
							</div>
							<div class="absolute inset-0 z-0 w-full pt-12 top-20">
								<div class="flex h-full flex-nowrap">
									<div class="flex-1 w-full h-full">
										<div class="px-1 text-sm font-normal">
											<TabsContent value="inventory">
												<DeviceInventoryTab :device="device" :metrics="metrics"/>
											</TabsContent>
											<TabsContent value="tunnels">
												<DeviceTunnelsTab :id="device.id" />
											</TabsContent>
											<TabsContent value="meta-data">
												<DeviceMetaDataTab />
											</TabsContent>
											<TabsContent value="documents">
												<DeviceDocumentsTab />
											</TabsContent>
											<TabsContent value="commands">
												<DeviceCommandsTab />
											</TabsContent>
											<TabsContent value="scripts">
												<DeviceScriptsTab />
											</TabsContent>
											<TabsContent value="monitoring">
												<DeviceMonitoringTab />
											</TabsContent>
											<TabsContent value="files">
												<DeviceFilesTab />
											</TabsContent>
											<TabsContent value="audit">
												<DeviceAuditTab />
											</TabsContent>
											<TabsContent value="schedules">
												<DeviceSchedulesTab />
											</TabsContent>
										</div>
									</div>
								</div>
							</div>
						</Tabs>
						<!-- <div
class="relative z-20 text-center text-sm font-bold text-muted after:absolute after:-left-0 after:-right-0 after:bottom-0 after:h-px after:bg-theme-border after:content-['']">
<div class="flex items-center overflow-hidden">ç
<button type="button"
class="flex inline-flex items-center justify-center w-6 p-3 px-0 py-0 duration-200 rounded-full focus:outline-none h-14 focus:border-0 focus:ring-0">
<span class="flex items-center justify-center" style="width: 24px; height: 24px;">
<svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
height="24px" viewBox="0 0 24 24" class="icon">
<path fill="currentColor"
d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275Z">
</path>
</svg>
</span>
</button>  
<div class="overflow-hidden">
<ul class="relative flex justify-start w-full gap-0 -mb-px transition flex-nowrap"
style="transform: translateX(0px);">
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-primary-800">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-primary-800 hover:text-primary-800">Inventory</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Tunnels</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Meta-Data</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Documents</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Commands</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Scripts</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Monitoring</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Files</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Audit</span>
</li>
<li
class="w-1/10 min-w-min cursor-pointer whitespace-nowrap border-b-[3px] border-transparent">
<span
class="flex items-center justify-center w-full px-8 py-4 rounded-t-lg text-theme-inverted-lighter hover:text-primary-800">Schedules</span>
</li>
</ul>
</div>
<button type="button"
class="flex inline-flex items-center justify-center w-6 p-3 px-0 py-0 duration-200 rounded-full focus:outline-none h-14 focus:border-0 focus:ring-0">
<span
class="flex items-center justify-center" style="width: 24px; height: 24px;"><svg
data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="24px"
height="24px" viewBox="0 0 24 24" class="icon">
<path fill="currentColor"
d="M8.7 17.3q-.275-.275-.275-.7t.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.7.275t-.7-.275Z">
</path>
</svg>
</span>
</button>  
</div>
</div> -->
<!--						<div class="absolute inset-0 z-0 w-full pt-12 top-20">-->
<!--							<div class="flex h-full flex-nowrap">-->
<!--								<div class="flex-1 w-full h-full">-->
<!--									<div class="px-1 text-sm font-normal">-->
<!--										<div-->
<!--											class="flex flex-wrap mt-4 space-x-4 xl:flex-nowrap"-->
<!--										>-->
<!--											<div-->
<!--												class="w-full space-y-4 xl:w-1/2"-->
<!--											></div>-->
<!--											<div-->
<!--												class="w-full space-y-4 xl:w-1/2"-->
<!--											></div>-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--								<div class="flex-1 hidden w-full h-full"></div>-->
<!--							</div>-->
<!--						</div>-->
					</div>
				</div>
				<div
					class="fixed inset-0 z-50 overflow-y-auto transition"
					style="display: none"
				>
					<div
						class="fixed inset-0 transition bg-theme-backdrop/75"
					></div>
					<div
						class="fixed inset-0 overflow-y-auto transition"
						style="display: none"
					>
						<div
							class="flex items-center justify-center min-h-full text-center"
						>
							<div
								class="relative px-6 py-4 mx-4 overflow-hidden text-left transform rounded shadow-xl bg-theme sm:w-full sm:max-w-lg"
							>
								<div as="div">
									<h3
										class="mt-2 text-3xl font-medium leading-6 text-theme-inverted"
									>
										<span
											class="text-sm font-medium text-gray-600"
											>Are you sure?</span
										>
									</h3>
								</div>
								<div class="pt-4 pb-2">
									<div
										class="text-sm font-medium text-black-087"
									>
										Are you sure you want to delete this
										note?
									</div>
								</div>
								<div class="flex justify-end mt-5">
									<button
										class="inline-flex items-center px-4 py-2 mr-2 text-sm text-white duration-200 rounded hover:opacity-80 focus:outline-none primary-800 plain"
										type="button"
									>
										No</button
									><button
										class="inline-flex items-center px-4 py-2 text-sm text-white duration-200 rounded hover:opacity-80 focus:outline-none primary-800"
										type="button"
									>
										Yes
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div
						class="fixed inset-0 z-50 overflow-y-auto transition"
						style="display: none"
					>
						<div
							class="fixed inset-0 transition bg-theme-backdrop/75"
						></div>
						<div
							class="fixed inset-0 overflow-y-auto transition"
							style="display: none"
						>
							<div
								class="flex items-center justify-center min-h-full text-center"
							>
								<div
									class="relative px-6 py-4 mx-4 overflow-hidden text-left transform rounded shadow-xl bg-theme sm:w-full sm:max-w-lg"
								>
									<div as="div">
										<h3
											class="mt-2 text-3xl font-medium leading-6 text-theme-inverted"
										>
											Are you sure?
										</h3>
									</div>
									<div class="pt-4 pb-2">
										<div class="text-sm text-gray-700">
											Are you sure you want to delete this
											schedule?
										</div>
									</div>
									<div class="flex justify-end mt-5">
										<button
											class="inline-flex items-center px-4 py-2 mr-2 text-sm text-white duration-200 rounded hover:opacity-80 focus:outline-none primary-800 plain"
											type="button"
										>
											No</button
										><button
											class="inline-flex items-center px-4 py-2 text-sm text-white duration-200 rounded hover:opacity-80 focus:outline-none primary-800"
											type="button"
										>
											Yes
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	</div>

	<!-- <div v-if="route.params.id" class="container mt-4">
<div class="row">
<div class="col">
<device-page-header :brand="device?.os_full_name" :title="device?.name">
<template v-slot:action>
<a href="#" class="pe-3">
<IconReload :size="16" />
Reload
</a>
<a href="#">
<IconHeart :size="16" />
</a>
</template>
<template v-slot:description>
<div class="p-2">
<div class="text-secondary">{{ device?.address }} / {{ device?.ipv4?.length > 0 ?
device?.ipv4[0] : '' }}</div>
</div>
</template>
</device-page-header>
</div>
</div>
<div class="row">
    <Tabs :tabs="tabs" :default-tab-index="0">
        <template v-slot:default="{ activeTabIndex }">
<Tab :is-active="activeTabIndex === index" :key="index" v-for="(tab, index) in tabs">
<client-only v-if="activeTabIndex === index">
<component :is="tab.component" :device="device"></component>
</client-only>
</Tab>
</template>
    </Tabs>
</div>
</div>
<div v-if="!route.params.id" class="container mt-4">
    <no-clients />
</div> -->
</template>

<script lang="ts" setup>
	import {
		Tabs,
		TabsContent,
		TabsList,
		TabsTrigger,
	} from "@/components/ui/tabs";
	import { Button } from "@/components/ui/button";
	import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
	import { useNavigationBars } from "~/composables/useNavigationBars";
	import { useModal } from "~/composables/useModal";
	import DeviceHeader from "~/components/device/DeviceHeader.vue";
	// import InventoryTab from "~/components/device/InventoryTab.vue";
	// import TunnelsTab from "~/components/device/TunnelsTab.vue";
	// import VaultLocked from "~/components/VaultLocked.vue";
	// import CommandEditor from "~/components/CommandEditor.vue";
	// import MonitoringTab from "~/components/device/MonitoringTab.vue";
	// import FilesTab from "~/components/device/FilesTab.vue";
	// import AuditTab from "~/components/device/AuditTab.vue";
	// import SchedulesTab from "~/components/device/SchedulesTab.vue";
  import type {Client, ClientMetric} from "~/types";
	// import GroupsCard from "~/components/device/GroupsCard.vue";
	// import RportClientCard from "~/components/device/RportClientCard.vue";

	const {
		isDeviceBarOpen,
		isSettingsBarOpen,
		toggleDeviceBarNav,
		toggleSettingsBarNav,
	} = useNavigationBars();

	const { $api } = useNuxtApp();
	const { modalIsActive, openModal, closeModal } = useModal();
	const clientStore = useClientStore();
	const route = useRoute();

	const tabs = [
		// { title: "Inventory", component: InventoryTab },
		// { title: "Tunnels", component: TunnelsTab },
		// { title: "Meta-Data", component: VaultLocked },
		// { title: "Documents", component: VaultLocked },
		// { title: "Commands", component: CommandEditor },
		// { title: "Scripts", component: CommandEditor },
		// { title: "Monitoring", component: MonitoringTab },
		// { title: "Files", component: FilesTab },
		// { title: "Audit", component: AuditTab },
		// { title: "Schedules", component: SchedulesTab },
	];
	const accordionItems = ref([
		{ title: "All", content: "Content for item 1" },
		{ title: "Favorites", content: "Content for item 2" },
	]);

	const device = ref({} as Client);
  const metrics = ref([] as Array<ClientMetric>);
	onMounted(async () => {
		await clientStore.loadClients();
		await fetchDevice();
	});

	const fetchDevice = async () => {
		try {
			const deviceId = route.params.id;
			if (deviceId) {
				const response = await $api.clients.show(deviceId as string);
				device.value = response.data;
        const metricsData = await $api.clients.metrics(deviceId as string);
        metrics.value = metricsData.data;
			}
		} catch (e) {}
	};
</script>
