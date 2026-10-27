<template>
	<ActionDialog
		v-model="open"
		title="Manage schedule"
		size="w-[90%] max-w-6xl"
	>
		<div
			v-if="schedule"
			class="p-4"
		>
			<ScheduleTimingFields
				v-model="form"
				:errors="errors"
			>
				<template #after-name>
					<ScheduleTargetsField
						v-model="targets"
						class="mt-4"
						:kind="targetKind"
					/>
				</template>
			</ScheduleTimingFields>
			<div class="mt-4 flex items-center rounded bg-orange-500 p-3 text-sm text-white">
				<IconInfoCircle
					:size="22"
					class="mr-3 shrink-0"
				/>
				<span>
					You are editing a multi-client schedule based on
					<span class="font-semibold underline">{{ targetDescription }}</span>.
					Numerous clients might be effected.
				</span>
			</div>
			<div class="mt-4 grid grid-cols-7">
				<div class="primary col-span-2 space-y-2 px-6 py-4 text-white">
					<template v-if="schedule.type === 'script'">
						<div class="flex flex-col">
							<label
								class="pb-1 pl-1 text-sm"
								for="scheduleCwd"
							>Working Directory</label>
							<input
								id="scheduleCwd"
								v-model="execution.cwd"
								:class="darkInputClass"
								type="text"
								autocomplete="off"
							>
						</div>
						<div class="flex flex-col">
							<label
								class="pb-1 pl-1 text-sm"
								for="scheduleInterpreter"
							>Interpreter</label>
							<select
								id="scheduleInterpreter"
								v-model="execution.interpreter"
								:class="darkInputClass"
							>
								<option
									v-for="option in interpreters"
									:key="option.value"
									:value="option.value"
									class="text-black"
								>
									{{ option.label }}
								</option>
							</select>
						</div>
					</template>
					<div class="flex flex-col">
						<label
							class="pb-1 pl-1 text-sm"
							for="scheduleTimeout"
						>Time out (seconds)</label>
						<input
							id="scheduleTimeout"
							v-model.number="execution.timeout_sec"
							:class="darkInputClass"
							type="number"
							min="1"
							autocomplete="off"
						>
					</div>
					<label
						v-if="schedule.type === 'script'"
						class="flex cursor-pointer items-center pt-2 text-sm"
					>
						<input
							v-model="execution.is_sudo"
							type="checkbox"
							:class="checkboxClass"
						>Use sudo <span class="ml-1 text-xs">(Unix only)</span>
					</label>
					<label class="flex cursor-pointer items-center pt-2 text-sm">
						<input
							v-model="execution.execute_concurrently"
							type="checkbox"
							:class="checkboxClass"
						>Execute concurrently
					</label>
					<label class="flex cursor-pointer items-center text-sm">
						<input
							v-model="execution.abort_on_error"
							type="checkbox"
							:class="checkboxClass"
						>Abort on error
					</label>
				</div>
				<div class="command-editor col-span-5 max-h-[400px] min-h-[300px] overflow-auto bg-[#224A75] text-xs text-gray-200">
					<command-editor v-model="execution.content" />
				</div>
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
				Update schedule
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconInfoCircle, IconLoader2 } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import ScheduleTargetsField from '~/components/schedules/ScheduleTargetsField.vue';
import ScheduleTimingFields from '~/components/schedules/ScheduleTimingFields.vue';
import { decodeScript, encodeScript } from '~/composables/useJobExecution';
import {
	apiErrorText,
	parseTargets,
	scheduleTargetKind,
	scheduleTargetValues,
	toSchedulePayload,
	useScheduleTimingForm,
	withTargets,
} from '~/composables/useScheduleTimingForm';
import type { Schedule } from '~/types';

const props = defineProps<{
	schedule: Schedule | null;
}>();

const emit = defineEmits<{
	updated: [schedule: Schedule];
}>();

const open = defineModel<boolean>({ required: true });
const snackbar = useSnackbar();
const { form, errors, reset, validate, toPayload } = useScheduleTimingForm();
const saving = ref(false);
const targets = ref('');

const interpreters = [
	{ value: '', label: 'System default shell' },
	{ value: 'cmd', label: 'cmd (Windows only)' },
	{ value: 'powershell', label: 'PowerShell (Windows only)' },
	{ value: 'tacoscript', label: 'Tacoscript (Experimental)' },
];

const darkInputClass = 'block h-10 w-full rounded border border-white bg-transparent text-white shadow-sm focus:border-white focus:outline-0 focus:ring-0 sm:text-sm';
const checkboxClass = 'mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 text-transparent';

const execution = reactive({
	content: '',
	cwd: '',
	interpreter: '',
	is_sudo: false,
	timeout_sec: 300,
	execute_concurrently: false,
	abort_on_error: true,
});

const targetKind = computed(() => props.schedule ? scheduleTargetKind(props.schedule) : 'client_ids');
const targetDescription = computed(() => ({
	client_ids: 'an individual client selection',
	group_ids: 'client groups',
	tags: 'client tags',
})[targetKind.value]);

watch(open, (isOpen) => {
	const schedule = props.schedule;
	if (!isOpen || !schedule) {
		return;
	}
	reset(schedule);
	targets.value = scheduleTargetValues(schedule).join(',');
	execution.content = schedule.type === 'script' ? decodeScript(schedule.script || '') : schedule.command || '';
	execution.cwd = schedule.cwd || '';
	execution.interpreter = schedule.interpreter || '';
	execution.is_sudo = !!schedule.is_sudo;
	execution.timeout_sec = schedule.timeout_sec || 300;
	execution.execute_concurrently = !!schedule.execute_concurrently;
	execution.abort_on_error = schedule.abort_on_error ?? false;
});

const save = async () => {
	const schedule = props.schedule;
	if (!schedule || !validate()) {
		return;
	}
	const isScript = schedule.type === 'script';
	const payload = withTargets({
		...toSchedulePayload(schedule),
		...toPayload(),
		command: isScript ? undefined : execution.content,
		script: isScript ? encodeScript(execution.content) : undefined,
		cwd: execution.cwd,
		interpreter: execution.interpreter,
		is_sudo: execution.is_sudo,
		timeout_sec: Number(execution.timeout_sec) || 300,
		execute_concurrently: execution.execute_concurrently,
		abort_on_error: execution.abort_on_error,
	}, targetKind.value, parseTargets(targets.value));

	const { $api } = useNuxtApp();
	saving.value = true;
	try {
		const { data } = await $api.schedules.update(schedule.id, payload);
		snackbar.add({ type: 'success', text: 'Schedule has been updated successfully.' });
		emit('updated', data);
		open.value = false;
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Schedule could not be updated.' });
	}
	finally {
		saving.value = false;
	}
};
</script>
