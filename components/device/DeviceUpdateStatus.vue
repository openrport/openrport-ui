<template>
	<div
		class="flex flex-col flex-1 overflow-hidden bg-white divide-y rounded-lg shadow divide-gray-50 dark:divide-gray-700 dark:bg-gray-900"
	>
		<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
			<div class="flex items-center content-center flex-1 max-h-16">
				<h3
					class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50"
				>
					Updates Status
				</h3>
				<p
					class="max-w-2xl mt-1 text-sm leading-6 text-gray-500 dark:text-gray-500"
				/>
			</div>
			<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
				<button
					class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					type="button"
				>
					<span class="flex items-center justify-center gap-x-2"><svg
						xmlns="http://www.w3.org/2000/svg"
						width="14px"
						height="14px"
						viewBox="0 0 24 24"
						class="icon"
					>
						<path
							fill="currentColor"
							d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"
						/>
					</svg>
						Reload</span>
				</button>
			</div>
		</div>
		<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
			<div class="w-full h-full">
				<div class="w-full">
					<div
						v-if="device?.updates_status != null"
						class="p-0"
					>
						<div class="flex items-center justify-between">
							<div class="flex flex-col">
								<div class="flex">
									<span class="mr-2 inline-flex min-w-[32px] items-center justify-center rounded-full bg-primary-800 text-white">{{ device?.updates_status?.updates_available }}</span>
									<span class="font-medium text-gray-900 dark:text-gray-50">Updates</span>
								</div>
								<div class="mt-2">
									<span class="mr-2 inline-flex min-w-[32px] items-center justify-center rounded-full bg-warning text-white">{{ device?.updates_status?.security_updates_available }}</span>
									<span class="font-medium text-gray-900 dark:text-gray-50">Security Updates</span>
								</div>
							</div>
							<div>
								<Button
									class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									@click="viewUpdates"
								>
									More Details
								</Button>

								<!-- <button
									class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									type="button"
								>
									<span
										class="flex items-center justify-center gap-x-2"
									>
										More Details
									</span>
								</button> -->
							</div>
						</div>
						<div class="flex items-center justify-between mt-8">
							<div
								class="italic text-gray-900 dark:text-gray-400"
							>
								Last status from {{ formatedDate(device?.updates_status?.refreshed) }}
							</div>
						</div>
					</div>
					<div
						v-else
						class="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800"
						role="alert"
					>
						<span
							class="icon"
							style="font-size: 24px; line-height: 24px; width: 24px; height: 24px;"
						>warning</span>
						<div>
							The client version is not supporting update supervision or update supervision is disabled. <br><a
								href="https://kb.openrport.io/digging-deeper/client-configuration-options/supervision-of-os-updates"
								class="text-primary"
								target="_blank"
							>Learn more </a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Modal
			v-model="updateConfirm"
			:title="`Available updates for ${device?.name}`"
			ok-text="Ok"
			cancel-text="Cancel"
			:show-cancel="true"
			@ok="updateConfirm = false"
		>
			<div class="border-theme-light-inverted absolute relative mt-4 overflow-auto rounded border px-4 pt-2">
				<div class="overflow-x-auto overflow-y-hidden">
					<table class="min-w-full">
						<thead>
							<tr>
								<th
									scope="col"
									class="border-theme-light-inverted table-cell border-b px-3 py-4 text-sm text-theme-th text-left"
								>
									Title
								</th>
								<th
									scope="col"
									class="border-theme-light-inverted table-cell border-b px-3 py-4 text-sm text-theme-th w-40 text-right"
								>
									Security Update
								</th>
								<th
									scope="col"
									class="border-theme-light-inverted table-cell border-b px-3 py-4 text-sm text-theme-th w-1/2 text-left"
								>
									Description
								</th>
								<th
									scope="col"
									class="border-theme-light-inverted table-cell border-b px-3 py-4 text-sm text-theme-th w-40 text-right"
								/>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(update, index) in device.updates_status?.update_summaries"
								:key="index"
								class="border-theme-light-inverted group border-b"
							>
								<td class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter text-left">
									{{ update.title }}
								</td>
								<td class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter w-40 text-right">
									<span
										v-if="update.is_security_update"
										class="flex items-center justify-end"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20px"
											height="20px"
											viewBox="0 0 24 24"
											class="icon"
										><path
											fill="currentColor"
											d="M12 21.85q-.275 0-.513-.038t-.437-.112q-3.1-1.15-5.075-4.1T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.55-1.975 6.5t-5.075 4.1q-.2.075-.437.113T12 21.85Zm0-1.95q2.425-.75 4.05-2.962T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12v7.9Z"
										/></svg>
										<span class="pl-2">Security Update</span>
									</span>
								</td>
								<td class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter w-1/2 text-left">
									{{ update.description }}
								</td>
								<td class="table-cell px-3 py-4 text-sm text-theme-inverted-lighter w-40 text-right">
									<span class="caption text-no-wrap" />
								</td>
							</tr>
						</tbody>
					</table>
				</div><!----><!---->
			</div>
		</Modal>
	</div>
</template>

<script setup>
import { Cancel } from 'axios';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatedDate } from '~/lib/utils';

const props = defineProps({
	device: {
		type: Object,
		required: true,
	},
});
const updateConfirm = ref(false);

const viewUpdates = () => {
	updateConfirm.value = true;
};
</script>

<style>
.modal-height {
  max-height: calc(100vh - 150px);
}
</style>
