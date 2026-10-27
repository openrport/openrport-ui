<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div>
				<div class="relative z-20 flex h-16 items-center justify-between">
					<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
						Schedules
					</h3>
					<button
						class="bg-primary hover:bg-primary-800 text-white cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300"
						type="button"
						@click="refresh"
					>
						<span class="flex items-center justify-center gap-x-2">
							<IconRefresh
								:size="16"
								:class="{ 'animate-spin': pending }"
							/>
							<span>Refresh</span>
						</span>
					</button>
				</div>
				<div class="relative z-10 w-full">
					<div class="flow-root overflow-clip border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg">
						<div class="overflow-auto relative z-10 -mb-2">
							<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead class="rounded-lg bg-gray-50 dark:bg-gray-950">
									<tr>
										<th
											v-for="header in headers"
											:key="header"
											class="text-left py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6"
											scope="col"
										>
											{{ header }}
										</th>
										<th class="py-3.5 pl-4 pr-3 sm:pl-6" />
									</tr>
								</thead>
								<tbody class="z-10 divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
									<tr
										v-for="schedule in schedules"
										:key="schedule.id"
										class="text-sm text-gray-800 dark:text-white"
									>
										<td :class="cellClass">
											<div class="flex items-center">
												<IconListCheck :size="18" />
												<span class="ml-2">{{ schedule.name }}</span>
											</div>
										</td>
										<td :class="cellClass">
											<span class="rounded border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs text-sky-700">{{ schedule.type }}</span>
										</td>
										<td :class="cellClass">
											{{ schedule.schedule }}
										</td>
										<td :class="cellClass">
											{{ formatScheduleDate(schedule.last_execution?.started_at) }}
										</td>
										<td :class="cellClass">
											<div class="flex items-center">
												<span>{{ selectionLabel(schedule) }}</span>
												<button
													class="ml-2 rounded-full p-1 primary-text hover:bg-gray-100 dark:hover:bg-gray-800"
													type="button"
													title="Edit targets"
													@click="openDialog('targets', schedule)"
												>
													<IconPencil :size="18" />
												</button>
											</div>
										</td>
										<td :class="cellClass">
											<div
												v-if="schedule.last_execution?.started_at"
												class="flex items-center gap-1"
											>
												<span class="inline-flex items-center rounded border border-green-200 bg-green-50 px-2 py-0.5 text-xs text-green-700">
													<span class="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-600" />{{ schedule.last_execution.success_count ?? 0 }}
												</span>
												<span class="inline-flex items-center rounded border border-red-200 bg-red-50 px-2 py-0.5 text-xs text-red-700">
													<span class="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600" />{{ failures(schedule) }}
												</span>
											</div>
											<span v-else>-</span>
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
														:class="menuItemClass"
														@click="openDialog('reports', schedule)"
													>
														<IconExternalLink class="mr-2 h-4 w-4" />
														<span>Reports</span>
													</DropdownMenuItem>
													<DropdownMenuItem
														:class="menuItemClass"
														@click="openDialog('edit', schedule)"
													>
														<IconPencil class="mr-2 h-4 w-4" />
														<span>Edit</span>
													</DropdownMenuItem>
													<DropdownMenuItem
														:class="menuItemClass"
														@click="openDialog('delete', schedule)"
													>
														<IconTrash class="mr-2 h-4 w-4" />
														<span>Delete</span>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</td>
									</tr>
									<tr
										v-if="!schedules.length"
										class="h-[210px] bg-white/10 backdrop-blur-sm dark:bg-black/10"
									>
										<td
											colspan="7"
											class="w-full flex-1 text-center text-gray-800 dark:text-gray-200"
										>
											{{ pending ? 'Loading...' : 'No results' }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<Pagination
							:current-page-item-count="schedules.length"
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
		<ScheduleReportsDialog
			v-model="dialogs.reports"
			:schedule="selected"
		/>
		<ScheduleEditDialog
			v-model="dialogs.edit"
			:schedule="selected"
			@updated="replaceSchedule"
		/>
		<ScheduleTargetsDialog
			v-model="dialogs.targets"
			:schedule="selected"
			@updated="replaceSchedule"
		/>
		<ActionDialog
			v-model="dialogs.delete"
			title="Are you sure?"
			size="sm:w-[480px]"
		>
			<p class="p-6 text-sm">
				Are you sure you want to delete this schedule?
			</p>
			<template #actions>
				<button
					class="ml-2 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-primary hover:opacity-80"
					type="button"
					@click="removeSchedule"
				>
					Yes
				</button>
			</template>
		</ActionDialog>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconDots, IconExternalLink, IconListCheck, IconPencil, IconRefresh, IconTrash } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import ScheduleEditDialog from '~/components/schedules/ScheduleEditDialog.vue';
import ScheduleReportsDialog from '~/components/schedules/ScheduleReportsDialog.vue';
import ScheduleTargetsDialog from '~/components/schedules/ScheduleTargetsDialog.vue';
import { Pagination } from '~/components/ui/pagination';
import { apiErrorText, formatScheduleDate, scheduleTargetKind, scheduleTargetValues } from '~/composables/useScheduleTimingForm';
import type { Schedule } from '~/types';

type DialogName = 'reports' | 'edit' | 'targets' | 'delete';

useHead({ title: 'Schedules' });

const ITEMS_PER_PAGE = 20;
const headers = ['Name', 'Type', 'Schedule', 'Last execution time', 'Client selection', 'Last Status'];
const cellClass = 'text-left whitespace-nowrap py-3.5 pl-4 pr-3 font-normal sm:pl-6';
const menuItemClass = 'group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-xs transition-all duration-300';

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const page = ref(0);
const selected = ref<Schedule | null>(null);
const dialogs = reactive<Record<DialogName, boolean>>({ reports: false, edit: false, targets: false, delete: false });

const { data: response, pending, refresh } = useLazyAsyncData(
	'schedules',
	() => $api.schedules.list(page.value * ITEMS_PER_PAGE, ITEMS_PER_PAGE),
	{ watch: [page] },
);
const schedules = computed(() => response.value?.data || []);
const total = computed(() => response.value?.meta?.count || 0);

const selectionLabel = (schedule: Schedule) => {
	const count = scheduleTargetValues(schedule).length;
	return {
		client_ids: `List (${count})`,
		group_ids: `Groups (${count})`,
		tags: `Tags (${count})`,
	}[scheduleTargetKind(schedule)];
};

const failures = (schedule: Schedule) => (schedule.last_execution?.client_count ?? 0) - (schedule.last_execution?.success_count ?? 0);

const openDialog = (name: DialogName, schedule: Schedule) => {
	selected.value = schedule;
	dialogs[name] = true;
};

const replaceSchedule = (updated: Schedule) => {
	if (response.value) {
		response.value.data = response.value.data.map(schedule => schedule.id === updated.id ? { ...schedule, ...updated } : schedule);
	}
};

const removeSchedule = async () => {
	const schedule = selected.value;
	dialogs.delete = false;
	if (!schedule) {
		return;
	}
	try {
		await $api.schedules.delete(schedule.id);
		snackbar.add({ type: 'success', text: `Schedule #${schedule.id} has been removed successfully` });
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Schedule could not be deleted.' });
	}
};
</script>
