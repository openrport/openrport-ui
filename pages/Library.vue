<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div>
				<div class="relative z-20 flex h-16 items-center justify-between">
					<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
						Library
					</h3>
				</div>
				<div class="border-b border-gray-200 mt-6">
					<nav
						class="-mb-px flex space-x-6"
						aria-label="Tabs"
					>
						<span
							v-for="tab in tabs"
							:key="tab.kind"
							:class="[kind === tab.kind ? 'primary-text hover:primary-text border-primary hover:border-primary' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700', 'cursor-pointer whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium']"
							@click="kind = tab.kind"
						>{{ tab.label }}</span>
					</nav>
				</div>
				<h3 class="mt-4 text-gray-800 dark:text-gray-200">
					Browse {{ kindLabel }}
				</h3>
				<p class="mt-2 text-sm text-gray-500">
					Use drag'n drop to move items between folders
				</p>
				<div class="mt-4 flex items-center">
					<IconSearch
						:size="30"
						class="primary-text mr-2 mt-1.5"
					/>
					<input
						v-model="search"
						class="primary input-text mt-1 block h-10 w-full flex-1 rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
						:placeholder="`Search ${kind}`"
						type="text"
						autocomplete="off"
					>
				</div>
				<div class="mt-6 rounded-md border p-4 pl-0">
					<div
						v-if="loading"
						class="flex justify-center py-6"
					>
						<IconLoader2
							:size="40"
							class="primary-text animate-spin"
						/>
					</div>
					<p
						v-else-if="!filteredTree.length"
						class="ml-6 text-sm text-gray-500"
					>
						No {{ kind }} found.
					</p>
					<LibraryTree
						v-else
						class="ml-6 select-none"
						:nodes="filteredTree"
						:kind="kind"
						:force-open="!!search"
						manage
						@edit="openEditor"
						@delete="confirmDelete"
						@drop="moveEntry"
					/>
				</div>
			</div>
		</div>
		<LibraryEditorDialog
			:id="editingId"
			v-model="editorOpen"
			:kind="kind"
			@saved="load"
		/>
		<ActionDialog
			v-model="deleteOpen"
			title="Please confirm"
			size="sm:w-[480px]"
		>
			<p class="p-6 text-center text-sm">
				Are you sure you want to delete this item?
			</p>
			<template #actions>
				<button
					class="ml-2 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-red-600 hover:opacity-80"
					type="button"
					@click="removeEntry"
				>
					Delete
				</button>
			</template>
		</ActionDialog>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconLoader2, IconSearch } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import LibraryEditorDialog from '~/components/library/LibraryEditorDialog.vue';
import LibraryTree from '~/components/library/LibraryTree.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { LibraryKind } from '~/repository/modules/library';
import type { Command, Script } from '~/types';
import { buildLibraryTree, filterLibraryTree } from '~/utils/libraryTree';

useHead({ title: 'Library' });

const tabs: Array<{ kind: LibraryKind; label: string }> = [
	{ kind: 'commands', label: 'Commands' },
	{ kind: 'scripts', label: 'Scripts' },
];

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const kind = ref<LibraryKind>('commands');
const items = ref<Array<Command | Script>>([]);
const loading = ref(true);
const search = ref('');
const editorOpen = ref(false);
const editingId = ref<string | null>(null);
const deleteOpen = ref(false);
const deletingId = ref<string | null>(null);

const kindLabel = computed(() => tabs.find(tab => tab.kind === kind.value)?.label);
const entryLabel = computed(() => kind.value === 'commands' ? 'Command' : 'Script');
const filteredTree = computed(() => filterLibraryTree(buildLibraryTree(items.value), search.value));

const load = async () => {
	loading.value = true;
	try {
		items.value = kind.value === 'commands'
			? await $api.library.listAll('commands')
			: await $api.library.listAll('scripts');
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || `${kindLabel.value} could not be loaded.` });
	}
	finally {
		loading.value = false;
	}
};

watch(kind, load);
onMounted(load);

const openEditor = (id: string) => {
	editingId.value = id;
	editorOpen.value = true;
};

const confirmDelete = (id: string) => {
	deletingId.value = id;
	deleteOpen.value = true;
};

const removeEntry = async () => {
	deleteOpen.value = false;
	if (!deletingId.value) {
		return;
	}
	try {
		if (kind.value === 'commands') {
			await $api.library.deleteCommand(deletingId.value);
		}
		else {
			await $api.library.deleteScript(deletingId.value);
		}
		snackbar.add({ type: 'success', text: 'Item deleted successfully' });
		await load();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || `${entryLabel.value} could not be deleted.` });
	}
};

// Moving into a folder renames the entry, keeping everything else as stored
const moveEntry = async (id: string, newName: string) => {
	try {
		if (kind.value === 'commands') {
			const { data } = await $api.library.showCommand(id);
			await $api.library.updateCommand(id, { name: newName, tags: data.tags, timeout_sec: data.timeout_sec, cmd: data.cmd });
		}
		else {
			const { data } = await $api.library.showScript(id);
			await $api.library.updateScript(id, {
				name: newName,
				tags: data.tags,
				timeout_sec: data.timeout_sec,
				script: data.script,
				cwd: data.cwd,
				is_sudo: data.is_sudo,
				interpreter: data.interpreter,
			});
		}
		snackbar.add({ type: 'success', text: `${entryLabel.value} has been moved in the folder successfully` });
		await load();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || `${entryLabel.value} could not be moved in the folder` });
	}
};
</script>
