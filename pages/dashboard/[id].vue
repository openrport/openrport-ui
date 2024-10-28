<template>
	<div class="flex-1 max-h-screen scrollbar-hide xl:overflow-y-auto">
		<div
			class="h-screen max-h-screen px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12"
		>
			<div class="relative w-full h-full">
				<device-header :device="device" />
				<div class="absolute inset-0 w-full h-full">
					<div
						v-if="!isAddingTunnel"
						class="z-10 w-full h-full pt-16"
					>
						<!-- Create tabs from here -->
						<Tabs v-model="selectedTab">
							<div class="relative z-20 text-center text-sm font-bold text-muted after:absolute after:-left-0 after:-right-0 after:bottom-0 after:h-px after:bg-theme-border after:content-['']">
								<div class="flex items-center overflow-hidden">
									<ScrollArea>
										<TabsList class="relative shrink-0 flex border-b border-mauve6">
											<Button
												type="button"
												class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 flex h-14 w-6 items-center justify-center px-0 py-0 focus:border-0 focus:outline-none focus:ring-0"
											>
												<span
													class="flex items-center justify-center"
													style="
														width: 24px;
														height: 24px;
													"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24px"
														height="24px"
														viewBox="0 0 24 24"
														class="icon"
													>
														<path
															fill="currentColor"
															d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325T8.425 12q0-.2.063-.375T8.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L10.8 12l3.9 3.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275Z"
														/>
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
													/>
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
												<DeviceInventoryTab
													:device="device"
													:metrics="metrics"
												/>
											</TabsContent>
											<TabsContent value="tunnels">
												<DeviceTunnelsTab
													:id="device.id"
													@addtunnel="tunnelStore.openAddTunel()"
												/>
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
					</div>
					<TunnelsTunnelForm
						v-if="isAddingTunnel"
						:device="device"
					/>
				</div>
				<div
					class="fixed inset-0 z-50 overflow-y-auto transition"
					style="display: none"
				>
					<div
						class="fixed inset-0 transition bg-theme-backdrop/75"
					/>
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
										>Are you sure?</span>
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
										No
									</button><button
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
						/>
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
											No
										</button><button
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
				<div />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import DeviceHeader from '~/components/device/DeviceHeader.vue';
import type { Client, ClientMetric } from '~/types';

const { $api } = useNuxtApp();
const clientStore = useClientStore();
const route = useRoute();
const tunnelStore = useTunnelStore();
const selectedTab = ref('inventory');

const { isAddingTunnel } = storeToRefs(tunnelStore);

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
	}
	catch (e) {}
};
</script>
