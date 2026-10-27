<template>
	<ActionDialog
		v-model="open"
		title="Manage schedule"
		size="w-full max-w-3xl"
	>
		<ScheduleTargetsField
			v-model="targets"
			class="p-4"
			:kind="kind"
		/>
		<template #actions>
			<button
				class="ml-4 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-primary hover:opacity-80"
				:disabled="saving"
				type="button"
				@click="save"
			>
				<IconLoader2
					v-if="saving"
					:size="18"
					class="mr-2 animate-spin"
				/>
				Update
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconLoader2 } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import ScheduleTargetsField from '~/components/schedules/ScheduleTargetsField.vue';
import {
	apiErrorText,
	parseTargets,
	scheduleTargetKind,
	scheduleTargetValues,
	toSchedulePayload,
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
const targets = ref('');
const saving = ref(false);
const kind = computed(() => props.schedule ? scheduleTargetKind(props.schedule) : 'client_ids');

watch(open, (isOpen) => {
	if (isOpen && props.schedule) {
		targets.value = scheduleTargetValues(props.schedule).join(',');
	}
});

const save = async () => {
	if (!props.schedule) {
		return;
	}
	const { $api } = useNuxtApp();
	saving.value = true;
	try {
		const payload = withTargets(toSchedulePayload(props.schedule), kind.value, parseTargets(targets.value));
		const { data } = await $api.schedules.update(props.schedule.id, payload);
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
