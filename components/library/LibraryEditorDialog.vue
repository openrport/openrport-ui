<template>
	<ActionDialog
		v-model="open"
		:title="`${label} Editor`"
		size="sm:w-[90%]"
	>
		<div class="primary relative grid grid-cols-7">
			<div
				v-if="loading"
				class="absolute inset-0 z-30 flex items-center justify-center bg-theme bg-opacity-70"
			>
				<IconLoader2
					:size="36"
					class="primary-text animate-spin"
				/>
			</div>
			<div class="primary col-span-2 max-h-[550px] min-h-[550px] overflow-y-auto px-6 py-4">
				<div class="flex flex-col">
					<label
						class="flex pb-1 pl-1 text-sm font-normal text-white"
						for="libraryName"
					>{{ label }} name</label>
					<input
						id="libraryName"
						v-model="form.name"
						:class="inputClass"
						type="text"
						autocomplete="off"
					>
				</div>
				<ExecutionTags v-model="form.tags" />
				<template v-if="kind === 'scripts'">
					<div class="mt-1 flex flex-col">
						<label
							class="flex pb-1 pl-1 text-sm font-normal text-white"
							for="libraryCwd"
						>Working Directory</label>
						<input
							id="libraryCwd"
							v-model="form.cwd"
							:class="inputClass"
							type="text"
							autocomplete="off"
						>
					</div>
					<div class="mt-1 flex flex-col text-white">
						<label
							class="flex pb-1 pl-1 text-sm font-medium"
							for="libraryInterpreter"
						>Interpreter</label>
						<select
							id="libraryInterpreter"
							v-model="form.interpreter"
							class="block h-10 w-full rounded border-white bg-transparent shadow-sm focus:border-white focus:outline-0 focus:ring-0 sm:text-sm"
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
				<div class="mt-1 flex flex-col">
					<label
						class="flex pb-1 pl-1 text-sm font-normal text-white"
						for="libraryTimeout"
					>Time out (seconds)</label>
					<input
						id="libraryTimeout"
						v-model.number="form.timeout_sec"
						:class="inputClass"
						type="number"
						min="1"
						autocomplete="off"
					>
				</div>
				<label
					v-if="kind === 'scripts'"
					class="mt-4 flex cursor-pointer items-center justify-center text-sm text-gray-300"
				>
					<input
						v-model="form.is_sudo"
						type="checkbox"
						class="peer sr-only"
					>
					<span class="relative h-6 w-11 rounded-full bg-gray-200 bg-opacity-30 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:bg-opacity-30 peer-checked:after:translate-x-full" />
					<span class="ml-2">Use sudo <span class="text-xs">(Unix only)</span></span>
				</label>
			</div>
			<div class="command-editor col-span-5 max-h-[550px] min-h-[550px] overflow-auto bg-[#224A75] text-xs text-gray-200">
				<command-editor v-model="form.content" />
			</div>
		</div>
		<template #actions>
			<LibrarySaveButton
				class="ml-2"
				:disabled="!canSave"
				:save-only="false"
				drop-up
				@save="save"
				@save-as-new="saveAsNew"
			/>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconLoader2 } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import ExecutionTags from '~/components/custom/ExecutionTags.vue';
import LibrarySaveButton from '~/components/library/LibrarySaveButton.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { LibraryKind } from '~/repository/modules/library';
import type { CommandPayload, ScriptPayload } from '~/types';

const props = defineProps<{
	kind: LibraryKind;
	id: string | null;
}>();

const emit = defineEmits<{
	saved: [];
}>();

const open = defineModel<boolean>({ required: true });
const { $api } = useNuxtApp();
const snackbar = useSnackbar();

const interpreters = [
	{ value: 'cmd', label: 'cmd (Windows only)' },
	{ value: 'powershell', label: 'PowerShell (Windows only)' },
	{ value: 'systemDefaultShell', label: 'System default shell' },
	{ value: 'tacoscript', label: 'Tacoscript (Experimental)' },
];
const inputClass = 'block h-10 w-full rounded border-white bg-transparent text-white shadow-sm focus:border-white focus:outline-0 focus:ring-0 sm:text-sm';

const label = computed(() => props.kind === 'commands' ? 'Command' : 'Script');
const loading = ref(false);
// Name as loaded; "Save as new" with an unchanged name appends " (copy)"
const originalName = ref('');
const form = reactive({
	name: '',
	tags: [] as string[],
	timeout_sec: 300,
	content: '',
	cwd: '',
	interpreter: 'systemDefaultShell',
	is_sudo: false,
});

const canSave = computed(() => !!form.name.trim() && !!form.content && !!form.timeout_sec);

watch(open, async (isOpen) => {
	if (!isOpen || !props.id) {
		return;
	}
	loading.value = true;
	try {
		if (props.kind === 'commands') {
			const { data } = await $api.library.showCommand(props.id);
			Object.assign(form, { name: data.name, tags: data.tags || [], timeout_sec: data.timeout_sec, content: data.cmd });
		}
		else {
			const { data } = await $api.library.showScript(props.id);
			Object.assign(form, {
				name: data.name,
				tags: data.tags || [],
				timeout_sec: data.timeout_sec,
				content: data.script,
				cwd: data.cwd,
				interpreter: data.interpreter || 'systemDefaultShell',
				is_sudo: data.is_sudo,
			});
		}
		originalName.value = form.name.toLowerCase();
	}
	catch {
		snackbar.add({ type: 'error', text: `${label.value} could not be loaded.` });
		open.value = false;
	}
	finally {
		loading.value = false;
	}
});

const payload = (name: string): CommandPayload | ScriptPayload => {
	const base = { name, tags: form.tags, timeout_sec: Number(form.timeout_sec) };
	return props.kind === 'commands'
		? { ...base, cmd: form.content }
		: { ...base, script: form.content, cwd: form.cwd, is_sudo: form.is_sudo, interpreter: form.interpreter };
};

const finish = (text: string) => {
	snackbar.add({ type: 'success', text });
	open.value = false;
	emit('saved');
};

const save = async () => {
	if (!props.id) {
		return;
	}
	try {
		const name = form.name.toLowerCase();
		if (props.kind === 'commands') {
			await $api.library.updateCommand(props.id, payload(name) as CommandPayload);
		}
		else {
			await $api.library.updateScript(props.id, payload(name) as ScriptPayload);
		}
		finish(`${label.value} has been updated`);
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || `${label.value} could not be updated` });
	}
};

const saveAsNew = async () => {
	const name = form.name.toLowerCase() === originalName.value ? `${originalName.value} (copy)` : form.name.toLowerCase();
	try {
		if (props.kind === 'commands') {
			await $api.library.createCommand(payload(name) as CommandPayload);
		}
		else {
			await $api.library.createScript(payload(name) as ScriptPayload);
		}
		finish(`${label.value} has been saved as new`);
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || `${label.value} could not be saved` });
	}
};
</script>
