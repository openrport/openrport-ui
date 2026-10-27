<template>
	<ActionDialog
		v-model="open"
		title="Execute by schedule"
		size="w-[90%]"
	>
		<ScheduleTimingFields
			v-model="form"
			class="p-4"
			:errors="errors"
		/>
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
import { IconLoader2 } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import ScheduleTimingFields from '~/components/schedules/ScheduleTimingFields.vue';
import { apiErrorText, useScheduleTimingForm } from '~/composables/useScheduleTimingForm';
import type { SchedulePayload } from '~/types';

const props = defineProps<{
	// Everything the schedule executes; name, cron expression and overlaps come from this dialog
	execution: Omit<SchedulePayload, 'name' | 'schedule' | 'overlaps'>;
}>();

const open = defineModel<boolean>({ required: true });
const snackbar = useSnackbar();
const { form, errors, reset, validate, toPayload } = useScheduleTimingForm();
const saving = ref(false);

watch(open, (isOpen) => {
	if (isOpen) {
		reset();
	}
});

const save = async () => {
	if (!validate()) {
		return;
	}
	const { $api } = useNuxtApp();
	saving.value = true;
	try {
		await $api.schedules.create({ ...props.execution, ...toPayload() });
		snackbar.add({ type: 'success', text: 'Schedule has been created successfully.' });
		open.value = false;
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Schedule could not be created.' });
	}
	finally {
		saving.value = false;
	}
};
</script>
