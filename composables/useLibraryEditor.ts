import type { LibraryKind } from '~/repository/modules/library';
import type { Command, CommandPayload, Script, ScriptPayload } from '~/types';

export interface LibraryEditorForm {
	id: string | null;
	name: string;
	tags: string[];
	timeout_sec: number;
	// Command text or script body
	content: string;
	cwd: string;
	interpreter: string;
	is_sudo: boolean;
	created_by: string;
	created_at: string;
	updated_by: string;
	updated_at: string;
}

const DEFAULT_TIMEOUT = 300;

const apiErrorMessage = (error: unknown) => {
	const detail = (error as { data?: { errors?: Array<{ title?: string; detail?: string }> } }).data?.errors?.[0];
	return detail?.title || detail?.detail || '';
};

// Save / save as new / load / delete of the command or script shown on /commands/[id] and /scripts/[id],
// following the reference UI: new entries and loads navigate to the entry's own URL.
export const useLibraryEditor = (kind: LibraryKind, defaultInterpreter = '') => {
	const { $api } = useNuxtApp();
	const route = useRoute();
	const snackbar = useSnackbar();
	const label = kind === 'commands' ? 'Command' : 'Script';

	const form = reactive<LibraryEditorForm>({
		id: null,
		name: '',
		tags: [],
		timeout_sec: DEFAULT_TIMEOUT,
		content: '',
		cwd: '',
		interpreter: defaultInterpreter,
		is_sudo: false,
		created_by: '',
		created_at: '',
		updated_by: '',
		updated_at: '',
	});
	const loaded = computed(() => !!form.id);
	const loading = ref(false);
	const loadError = ref<string | null>(null);
	// Name of the entry as loaded; "Save as new" with an unchanged name appends " (copy)"
	const originalName = ref('');

	const canSave = computed(() => form.name.trim() !== '' && form.content !== '' && !!form.timeout_sec && !Number.isNaN(Number(form.timeout_sec)));

	const applyEntry = (entry: Command | Script) => {
		form.id = entry.id;
		form.name = entry.name;
		form.tags = entry.tags || [];
		form.timeout_sec = entry.timeout_sec;
		form.created_by = entry.created_by;
		form.created_at = String(entry.created_at);
		form.updated_by = entry.updated_by;
		form.updated_at = String(entry.updated_at);
		if ('cmd' in entry) {
			form.content = entry.cmd;
		}
		else {
			form.content = entry.script;
			form.cwd = entry.cwd;
			form.interpreter = entry.interpreter || defaultInterpreter;
			form.is_sudo = entry.is_sudo;
		}
		originalName.value = entry.name.toLowerCase();
	};

	const loadFromRoute = async () => {
		const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
		if (!id) {
			return;
		}
		loading.value = true;
		try {
			const { data } = kind === 'commands'
				? await $api.library.showCommand(id)
				: await $api.library.showScript(id);
			applyEntry(data);
		}
		catch {
			loadError.value = `Loading the ${label.toLowerCase()} failed. Please try reloading the page.`;
		}
		finally {
			loading.value = false;
		}
	};

	const payload = (name: string): CommandPayload | ScriptPayload => {
		const base = { name, tags: form.tags, timeout_sec: Number(form.timeout_sec) };
		return kind === 'commands'
			? { ...base, cmd: form.content }
			: { ...base, script: form.content, cwd: form.cwd, is_sudo: form.is_sudo, interpreter: form.interpreter };
	};

	const saveAsNew = async () => {
		const name = form.name.toLowerCase() === originalName.value && loaded.value
			? `${form.name.toLowerCase()} (copy)`
			: form.name.toLowerCase();
		try {
			const { data } = kind === 'commands'
				? await $api.library.createCommand(payload(name) as CommandPayload)
				: await $api.library.createScript(payload(name) as ScriptPayload);
			snackbar.add({ type: 'success', text: `${label} has been saved as new` });
			await navigateTo(`/${kind}/${data.id}`);
		}
		catch (error) {
			snackbar.add({ type: 'error', text: apiErrorMessage(error) || `${label} could not be saved` });
		}
	};

	const save = async () => {
		if (!form.id) {
			return saveAsNew();
		}
		try {
			const name = form.name.toLowerCase();
			const { data } = kind === 'commands'
				? await $api.library.updateCommand(form.id, payload(name) as CommandPayload)
				: await $api.library.updateScript(form.id, payload(name) as ScriptPayload);
			form.updated_by = data.updated_by;
			form.updated_at = String(data.updated_at);
			snackbar.add({ type: 'success', text: `${label} has been updated` });
		}
		catch (error) {
			snackbar.add({ type: 'error', text: apiErrorMessage(error) || `${label} could not be updated` });
		}
	};

	const remove = async () => {
		if (!form.id) {
			return;
		}
		try {
			if (kind === 'commands') {
				await $api.library.deleteCommand(form.id);
			}
			else {
				await $api.library.deleteScript(form.id);
			}
			snackbar.add({ type: 'success', text: `${label} was successfully deleted.` });
			await navigateTo(`/${kind}`);
		}
		catch {
			snackbar.add({ type: 'error', text: `${label} could not be deleted.` });
		}
	};

	const openEntry = async (id: string | null) => {
		if (id && id !== form.id) {
			await navigateTo(`/${kind}/${id}`);
		}
	};

	onMounted(loadFromRoute);

	return { form, loaded, loading, loadError, canSave, save, saveAsNew, remove, openEntry };
};
