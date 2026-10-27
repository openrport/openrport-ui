<template>
	<ActionDialog
		v-model="open"
		title="Execute by schedule"
		size="w-[90%]"
	>
		<div class="p-4">
			<div class="flex flex-col">
				<label
					class="pb-1 pl-1 text-sm text-theme-label"
					for="scheduleName"
				>Schedule name</label>
				<input
					id="scheduleName"
					v-model="form.scheduleName"
					:class="inputClass"
					type="text"
					autocomplete="off"
				>
				<p
					v-if="errors.scheduleName"
					class="mt-1 pl-1 text-xs text-red-600"
				>
					{{ errors.scheduleName }}
				</p>
			</div>
			<p class="mt-4 text-sm font-medium">
				Executed at:
			</p>
			<div class="mt-2 flex flex-wrap items-center justify-between gap-6">
				<div class="flex flex-col space-y-2">
					<div
						v-for="field in cronFields"
						:key="field.key"
						class="flex flex-col"
					>
						<div class="flex items-center">
							<div class="w-[184px] shrink-0">
								<input
									v-model="form[field.key]"
									:class="inputClass"
									:placeholder="field.label"
									:aria-label="field.label"
									type="text"
									autocomplete="off"
								>
							</div>
							<span class="ml-2 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{{ field.hint }}</span>
						</div>
						<p
							v-if="errors[field.key]"
							class="mt-1 pl-1 text-xs text-red-600"
						>
							{{ errors[field.key] }}
						</p>
					</div>
				</div>
				<div class="flex max-w-2xl flex-1 items-start rounded border-r-4 border-primary bg-white p-4 shadow-md dark:bg-slate-900">
					<IconInfoCircle
						:size="22"
						class="primary-text mr-4 shrink-0"
					/>
					<div class="text-sm">
						<p class="font-semibold">
							Cron syntax expected:
						</p>
						<p class="mt-2">
							multiple values seperated by a comma allowed, e.g. minutes = 0,15,30,45 to execute every 15 minutes.
						</p>
						<p>ranges seperated by a dash allowed, e.g. hours = 2-5 to execute only from 2 to 5 am.</p>
						<p>steps seperated by a slash allowed, e.g. minutes = */5 to execute every five minutes.</p>
					</div>
				</div>
			</div>
			<div class="mt-6 border-t border-gray-200 pt-4">
				<label class="flex cursor-pointer select-none items-center text-sm text-theme-label">
					<input
						v-model="form.overlaps"
						type="checkbox"
						class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
					>
					Allow overlaps, by default execution is skipped, if previous job is still running
				</label>
			</div>
		</div>
		<template #actions>
			<button
				class="ml-2 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-primary hover:opacity-80"
				:disabled="saving"
				type="button"
				@click="save"
			>
				<IconLoader2
					v-if="saving"
					:size="18"
					class="mr-2 animate-spin"
				/>
				Save Schedule
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconInfoCircle, IconLoader2 } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import type { SchedulePayload } from '~/types';

type CronKey = 'minutes' | 'hours' | 'date' | 'month' | 'day';
type FormKey = CronKey | 'scheduleName';

const props = defineProps<{
	// Everything the schedule executes; name, cron expression and overlaps come from this dialog
	execution: Omit<SchedulePayload, 'name' | 'schedule' | 'overlaps'>;
}>();

const open = defineModel<boolean>({ required: true });
const snackbar = useSnackbar();

const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';

const cronFields: Array<{ key: CronKey; label: string; hint: string }> = [
	{ key: 'minutes', label: 'Minute(s)', hint: '0-59, use * for every minute' },
	{ key: 'hours', label: 'Hour(s)', hint: '0-23, use * for every hour' },
	{ key: 'date', label: 'Day of month', hint: '1-31, use * for every day' },
	{ key: 'month', label: 'Month(s)', hint: '1-12, use * for every month' },
	{ key: 'day', label: 'Day(s) of week', hint: '0-6, use * for every day, 0 = Sunday' },
];

const fieldLabels: Record<FormKey, string> = {
	scheduleName: 'Schedule name',
	...Object.fromEntries(cronFields.map(field => [field.key, field.label])) as Record<CronKey, string>,
};

const emptyForm = () => ({ scheduleName: '', minutes: '', hours: '', date: '', month: '', day: '', overlaps: false });
const form = ref(emptyForm());
const errors = ref<Partial<Record<FormKey, string>>>({});
const saving = ref(false);

watch(open, (isOpen) => {
	if (isOpen) {
		form.value = emptyForm();
		errors.value = {};
	}
});

const validate = () => {
	const required: FormKey[] = ['scheduleName', 'minutes', 'hours', 'date', 'month', 'day'];
	errors.value = Object.fromEntries(required
		.filter(key => !form.value[key].trim())
		.map(key => [key, `${fieldLabels[key]} is required`]));
	return Object.keys(errors.value).length === 0;
};

const save = async () => {
	if (!validate()) {
		return;
	}
	const { $api } = useNuxtApp();
	const { minutes, hours, date, month, day } = form.value;
	saving.value = true;
	try {
		await $api.schedules.create({
			...props.execution,
			name: form.value.scheduleName,
			overlaps: form.value.overlaps,
			schedule: `${minutes.trim()} ${hours.trim()} ${date.trim()} ${month.trim()} ${day.trim()}`,
		});
		snackbar.add({ type: 'success', text: 'Schedule has been created successfully.' });
		open.value = false;
	}
	catch (error: unknown) {
		const detail = (error as { data?: { errors?: Array<{ title?: string; detail?: string }> } }).data?.errors?.[0];
		snackbar.add({ type: 'error', text: detail?.title || detail?.detail || 'Schedule could not be created.' });
	}
	finally {
		saving.value = false;
	}
};
</script>
