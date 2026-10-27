import type { Schedule, SchedulePayload } from '~/types';

export type CronKey = 'minutes' | 'hours' | 'date' | 'month' | 'day';
export type ScheduleTimingKey = CronKey | 'scheduleName';

export interface ScheduleTimingForm {
	scheduleName: string;
	minutes: string;
	hours: string;
	date: string;
	month: string;
	day: string;
	overlaps: boolean;
}

export const cronFields: Array<{ key: CronKey; label: string; hint: string }> = [
	{ key: 'minutes', label: 'Minute(s)', hint: '0-59, use * for every minute' },
	{ key: 'hours', label: 'Hour(s)', hint: '0-23, use * for every hour' },
	{ key: 'date', label: 'Day of month', hint: '1-31, use * for every day' },
	{ key: 'month', label: 'Month(s)', hint: '1-12, use * for every month' },
	{ key: 'day', label: 'Day(s) of week', hint: '0-6, use * for every day, 0 = Sunday' },
];

const fieldLabels: Record<ScheduleTimingKey, string> = {
	scheduleName: 'Schedule name',
	...Object.fromEntries(cronFields.map(field => [field.key, field.label])) as Record<CronKey, string>,
};

const emptyForm = (): ScheduleTimingForm => ({ scheduleName: '', minutes: '', hours: '', date: '', month: '', day: '', overlaps: false });

// Name, cron expression and overlaps shared by the create and edit schedule dialogs
export const useScheduleTimingForm = () => {
	const form = ref<ScheduleTimingForm>(emptyForm());
	const errors = ref<Partial<Record<ScheduleTimingKey, string>>>({});

	const reset = (schedule?: Schedule) => {
		errors.value = {};
		if (!schedule) {
			form.value = emptyForm();
			return;
		}
		const [minutes = '', hours = '', date = '', month = '', day = ''] = schedule.schedule.split(' ');
		form.value = { scheduleName: schedule.name, minutes, hours, date, month, day, overlaps: schedule.overlaps };
	};

	const validate = () => {
		const required: ScheduleTimingKey[] = ['scheduleName', 'minutes', 'hours', 'date', 'month', 'day'];
		errors.value = Object.fromEntries(required
			.filter(key => !form.value[key].trim())
			.map(key => [key, `${fieldLabels[key]} is required`]));
		return Object.keys(errors.value).length === 0;
	};

	const toPayload = () => {
		const { minutes, hours, date, month, day } = form.value;
		return {
			name: form.value.scheduleName,
			overlaps: form.value.overlaps,
			schedule: [minutes, hours, date, month, day].map(part => part.trim()).join(' '),
		};
	};

	return { form, errors, reset, validate, toPayload };
};

export const apiErrorText = (error: unknown) => {
	const detail = (error as { data?: { errors?: Array<{ title?: string; detail?: string }> } }).data?.errors?.[0];
	return detail?.title || detail?.detail || '';
};

export type ScheduleTargetKind = 'client_ids' | 'group_ids' | 'tags';

// Which selection a schedule targets; the reference shows tags first, then groups, then clients
export const scheduleTargetKind = (schedule: Pick<Schedule, 'client_ids' | 'group_ids' | 'tags'>): ScheduleTargetKind => {
	if (schedule.tags?.tags?.length) {
		return 'tags';
	}
	return schedule.group_ids?.length ? 'group_ids' : 'client_ids';
};

export const scheduleTargetValues = (schedule: Pick<Schedule, 'client_ids' | 'group_ids' | 'tags'>) => {
	const kind = scheduleTargetKind(schedule);
	return (kind === 'tags' ? schedule.tags?.tags : schedule[kind]) || [];
};

// Full PUT payload of a stored schedule (the script stays base64 encoded as returned by the API)
export const toSchedulePayload = (schedule: Schedule): SchedulePayload => ({
	name: schedule.name,
	schedule: schedule.schedule,
	type: schedule.type,
	overlaps: schedule.overlaps,
	client_ids: schedule.client_ids,
	group_ids: schedule.group_ids,
	tags: schedule.tags,
	command: schedule.command,
	script: schedule.script,
	interpreter: schedule.interpreter,
	cwd: schedule.cwd,
	is_sudo: schedule.is_sudo,
	timeout_sec: schedule.timeout_sec,
	execute_concurrently: schedule.execute_concurrently,
	abort_on_error: schedule.abort_on_error,
});

export const withTargets = (payload: SchedulePayload, kind: ScheduleTargetKind, values: string[]): SchedulePayload => ({
	...payload,
	client_ids: kind === 'client_ids' ? values : null,
	group_ids: kind === 'group_ids' ? values : null,
	tags: kind === 'tags' ? { tags: values, operator: payload.tags?.operator || 'AND' } : null,
});

export const parseTargets = (text: string) => text.split(',').map(value => value.trim()).filter(Boolean);

// "YYYY-MM-DD HH:mm UTC" like the reference schedules table
export const formatScheduleDate = (date?: string | null) => {
	const parsed = date ? new Date(date) : null;
	if (!parsed || Number.isNaN(parsed.getTime())) {
		return 'Hasn\'t executed yet';
	}
	return `${parsed.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
};
