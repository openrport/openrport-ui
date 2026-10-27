<template>
	<div class="mt-5 w-full p-1 pb-12">
		<VaultLocked
			v-if="unavailable || (pending && !ready)"
			:loading="pending"
		/>
		<div
			v-else
			:class="['relative flex w-full overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-900', sidebarOpen ? 'pl-64' : 'pl-0']"
		>
			<div :class="['absolute left-0 top-0 z-30 flex h-12 items-center border-b border-gray-200 bg-gray-100 transition-all duration-300 dark:border-gray-700 dark:bg-gray-950', sidebarOpen ? 'w-64' : 'w-10']">
				<button
					class="flex h-10 w-10 items-center justify-center text-gray-600 dark:text-gray-300"
					type="button"
					:title="sidebarOpen ? 'Hide documents' : 'Show documents'"
					@click="sidebarOpen = !sidebarOpen"
				>
					<IconMenu2 :size="22" />
				</button>
			</div>
			<aside
				v-show="sidebarOpen"
				class="absolute bottom-0 left-0 top-0 flex w-64 flex-col border-r border-gray-200 bg-gray-100 pt-12 dark:border-gray-700 dark:bg-gray-950"
			>
				<ul class="flex-1 overflow-y-auto py-2">
					<li
						v-for="doc in documents"
						:key="doc.id"
						:class="['group relative flex min-h-[52px] items-center justify-between', { 'bg-gray-200 dark:bg-gray-800': doc.id === current?.id }]"
					>
						<template v-if="renaming?.id === doc.id">
							<input
								v-model="renaming.key"
								:class="sidebarInputClass"
								placeholder="Document title"
								type="text"
								@keydown.enter="rename"
								@keydown.esc="renaming = null"
							>
							<button
								:class="[iconButtonClass, 'hover:bg-green-50 hover:text-green-700']"
								type="button"
								title="Save title"
								@click="rename"
							>
								<IconCheck :size="16" />
							</button>
							<button
								:class="[iconButtonClass, 'mr-1 hover:bg-red-50 hover:text-red-600']"
								type="button"
								title="Cancel"
								@click="renaming = null"
							>
								<IconX :size="16" />
							</button>
						</template>
						<template v-else>
							<button
								class="w-full truncate px-3 py-3 text-left text-sm"
								type="button"
								@click="select(doc)"
							>
								{{ doc.key }}
							</button>
							<DropdownMenu>
								<DropdownMenuTrigger as-child>
									<button
										:class="[iconButtonClass, 'mr-2']"
										type="button"
										title="Actions"
									>
										<IconDotsVertical :size="16" />
									</button>
								</DropdownMenuTrigger>
								<DropdownMenuContent class="w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-950">
									<DropdownMenuItem
										:class="menuItemClass"
										@click="renaming = { id: doc.id, key: doc.key }"
									>
										<IconPencil class="mr-2 h-4 w-4" />
										<span>Rename</span>
									</DropdownMenuItem>
									<DropdownMenuItem
										:class="menuItemClass"
										@click="remove(doc)"
									>
										<IconTrash class="mr-2 h-4 w-4" />
										<span>Delete</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</template>
					</li>
					<li
						v-if="creating !== null"
						class="flex items-center bg-gray-200 py-2 pl-2 dark:bg-gray-800"
					>
						<input
							v-model="creating"
							:class="sidebarInputClass"
							placeholder="Document title"
							type="text"
							@keydown.enter="create"
							@keydown.esc="creating = null"
						>
						<button
							:class="[iconButtonClass, 'hover:bg-green-50 hover:text-green-700']"
							:disabled="busy"
							type="button"
							title="Create document"
							@click="create"
						>
							<IconLoader2
								v-if="busy"
								:size="16"
								class="animate-spin"
							/>
							<IconCheck
								v-else
								:size="16"
							/>
						</button>
						<button
							:class="[iconButtonClass, 'mr-1 hover:bg-red-50 hover:text-red-600']"
							type="button"
							title="Cancel"
							@click="creating = null"
						>
							<IconX :size="16" />
						</button>
					</li>
				</ul>
				<div class="p-2">
					<button
						class="flex h-10 w-full items-center justify-center gap-2 rounded bg-primary text-sm font-medium uppercase text-white shadow hover:opacity-80 disabled:opacity-50"
						:disabled="creating !== null"
						type="button"
						@click="creating = ''"
					>
						<IconFilePlus :size="18" />
						New Document
					</button>
				</div>
			</aside>
			<div class="relative w-full min-w-0">
				<MarkdownEditor
					ref="editor"
					v-model="content"
					:disabled="!current"
				>
					<button
						v-if="current && changed"
						class="absolute bottom-11 right-3 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:opacity-80"
						:disabled="busy"
						type="button"
						title="Save document"
						@click="save()"
					>
						<IconLoader2
							v-if="busy"
							:size="24"
							class="animate-spin"
						/>
						<IconDeviceFloppy
							v-else
							:size="24"
						/>
					</button>
				</MarkdownEditor>
				<div
					v-if="loadingDocument"
					class="absolute inset-0 z-30 flex items-center justify-center bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70"
				>
					<IconLoader2
						:size="36"
						class="animate-spin text-gray-400"
					/>
				</div>
			</div>
		</div>

		<ActionDialog
			v-model="confirmOpen"
			title="Unsaved changes"
			size="sm:w-[480px]"
		>
			<p class="p-6 text-sm">
				You have unsaved changes in the current document "{{ current?.key }}". Do you want to discard or save them?
			</p>
			<template #actions>
				<button
					class="ml-2 rounded bg-gray-100 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
					type="button"
					@click="leaveCurrent(false)"
				>
					Discard
				</button>
				<button
					class="ml-2 rounded bg-primary px-4 py-2 text-sm text-white hover:opacity-80"
					type="button"
					@click="leaveCurrent(true)"
				>
					Save
				</button>
			</template>
		</ActionDialog>
	</div>
</template>

<script setup lang="ts">
import { IconCheck, IconDeviceFloppy, IconDotsVertical, IconFilePlus, IconLoader2, IconMenu2, IconPencil, IconTrash, IconX } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import MarkdownEditor from '~/components/device/MarkdownEditor.vue';
import VaultLocked from '~/components/VaultLocked.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { VaultEntry } from '~/types';

const iconButtonClass = 'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-50';
const sidebarInputClass = 'h-9 w-full min-w-0 rounded border border-gray-300 bg-white px-2 text-sm focus:outline-0 dark:bg-gray-900';
const menuItemClass = 'group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-xs';

const props = defineProps<{
	id: string;
}>();

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const editor = ref<InstanceType<typeof MarkdownEditor> | null>(null);
const sidebarOpen = ref(true);
const unavailable = ref(false);
const ready = ref(false);
const busy = ref(false);
const loadingDocument = ref(false);
const confirmOpen = ref(false);
const current = ref<VaultEntry | null>(null);
const original = ref('');
const content = ref('');
const creating = ref<string | null>(null);
const renaming = ref<{ id: number; key: string } | null>(null);
// Document picked while the current one had unsaved changes
const nextDocument = ref<VaultEntry | null>(null);

const changed = computed(() => !!current.value && content.value !== original.value);

const { data: documents, pending, refresh } = useLazyAsyncData(
	`device-documents-${props.id}`,
	async () => {
		try {
			const entries = await $api.vault.listWithValues(props.id);
			unavailable.value = false;
			return entries.filter(entry => entry.type === 'markdown');
		}
		catch {
			unavailable.value = true;
			return [];
		}
		finally {
			ready.value = true;
		}
	},
	{ default: () => [] as VaultEntry[] },
);

const show = (doc: VaultEntry | null) => {
	current.value = doc;
	original.value = doc?.value || '';
	content.value = original.value;
	editor.value?.setMarkdown(original.value);
};

const open = async (doc: VaultEntry) => {
	loadingDocument.value = true;
	try {
		const { data } = await $api.vault.show(doc.id);
		show(data);
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Document could not be loaded.' });
	}
	finally {
		loadingDocument.value = false;
	}
};

// Like the reference, the first document opens once the list is loaded
watch(documents, async (list) => {
	if (!list.some(doc => doc.id === current.value?.id)) {
		if (list.length) {
			await nextTick();
			await open(list[0]);
		}
		else {
			show(null);
		}
	}
});

const select = (doc: VaultEntry) => {
	if (doc.id === current.value?.id) {
		return;
	}
	if (changed.value) {
		nextDocument.value = doc;
		confirmOpen.value = true;
		return;
	}
	open(doc);
};

const save = async () => {
	const doc = current.value;
	if (!doc) {
		return false;
	}
	busy.value = true;
	try {
		await $api.vault.update(doc.id, {
			client_id: doc.client_id,
			required_group: doc.required_group,
			type: doc.type,
			key: doc.key,
			value: content.value,
		});
		original.value = content.value;
		snackbar.add({ type: 'success', text: 'Document was successfully updated.' });
		return true;
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Document could not be saved.' });
		return false;
	}
	finally {
		busy.value = false;
	}
};

const leaveCurrent = async (keep: boolean) => {
	confirmOpen.value = false;
	if (keep && !await save()) {
		return;
	}
	const doc = nextDocument.value;
	nextDocument.value = null;
	if (doc) {
		await open(doc);
	}
};

const create = async () => {
	const key = creating.value?.trim();
	if (!key || busy.value) {
		return;
	}
	busy.value = true;
	try {
		const { data } = await $api.vault.create({ client_id: props.id, required_group: '', type: 'markdown', key, value: `# ${key}` });
		creating.value = null;
		snackbar.add({ type: 'success', text: 'Document was successfully created.' });
		await refresh();
		const created = documents.value.find(doc => doc.id === data?.id);
		if (created) {
			select(created);
		}
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Document could not be created.' });
	}
	finally {
		busy.value = false;
	}
};

const rename = async () => {
	const target = renaming.value;
	const doc = documents.value.find(item => item.id === target?.id);
	if (!target || !doc || !target.key.trim()) {
		return;
	}
	try {
		// The current document keeps its unsaved text; only the title changes
		await $api.vault.update(doc.id, {
			client_id: doc.client_id,
			required_group: doc.required_group,
			type: doc.type,
			key: target.key.trim(),
			value: doc.id === current.value?.id ? original.value : doc.value || '',
		});
		snackbar.add({ type: 'success', text: 'Document was successfully updated.' });
		renaming.value = null;
		if (current.value?.id === doc.id) {
			current.value = { ...current.value, key: target.key.trim() };
		}
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Document could not be updated.' });
	}
};

const remove = async (doc: VaultEntry) => {
	try {
		await $api.vault.delete(doc.id);
		if (doc.id === current.value?.id) {
			show(null);
		}
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Document could not be deleted.' });
	}
};
</script>
