<template>
	<div class="min-h-[100px] w-full p-1 pb-12">
		<VaultLocked
			v-if="pending || unavailable"
			:loading="pending"
		/>
		<div
			v-else-if="!notes.length"
			class="flex flex-col items-center justify-center gap-4 border border-gray-200 p-10 text-center text-sm text-gray-500 dark:border-gray-700"
		>
			<span>You haven't created any notes yet.</span>
			<button
				:class="primaryButtonClass"
				type="button"
				@click="openForm()"
			>
				<IconPlus :size="16" />
				<span>Add data</span>
			</button>
		</div>
		<div
			v-else
			class="flow-root overflow-clip border border-gray-100 ring-1 ring-black ring-opacity-10 dark:border-gray-600 sm:rounded-lg"
		>
			<div class="flex justify-end bg-white px-4 py-3 dark:bg-gray-900">
				<button
					:class="primaryButtonClass"
					type="button"
					@click="openForm()"
				>
					<IconPlus :size="16" />
					<span>Add Data</span>
				</button>
			</div>
			<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
				<thead class="bg-gray-50 dark:bg-gray-950">
					<tr>
						<th :class="headerClass">
							Key
						</th>
						<th :class="[headerClass, 'w-1/3']">
							Value
						</th>
						<th class="w-16" />
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
					<tr
						v-for="note in notes"
						:key="note.id"
						class="text-gray-800 dark:text-white"
					>
						<td class="py-2 pl-4 pr-3 sm:pl-6">
							<div class="flex items-center gap-2">
								<span
									class="cursor-pointer font-bold primary-text"
									title="Copy"
									@click="copy(note.key)"
								>{{ note.key }}</span>
								<button
									:class="copyButtonClass"
									type="button"
									title="Copy"
									@click="copy(note.key)"
								>
									<IconCopy :size="16" />
								</button>
							</div>
						</td>
						<td class="py-2 pl-4 pr-3 sm:pl-6">
							<div class="flex items-center gap-2">
								<button
									v-if="note.type === 'secret'"
									:class="copyButtonClass"
									type="button"
									:title="revealed.has(note.id) ? 'Hide' : 'Show'"
									@click="toggleSecret(note.id)"
								>
									<IconEyeOff
										v-if="revealed.has(note.id)"
										:size="16"
									/>
									<IconEye
										v-else
										:size="16"
									/>
								</button>
								<span
									v-if="note.type === 'secret' && !revealed.has(note.id)"
									class="cursor-pointer"
									title="Copy"
									@click="copy(note.value || '')"
								>**********</span>
								<span
									v-else
									class="cursor-pointer font-bold primary-text"
									title="Copy"
									@click="copy(note.value || '')"
								>{{ note.value }}</span>
								<button
									:class="copyButtonClass"
									type="button"
									title="Copy"
									@click="copy(note.value || '')"
								>
									<IconCopy :size="16" />
								</button>
							</div>
						</td>
						<td class="pr-4 text-right sm:pr-6">
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
										@click="openForm(note)"
									>
										<IconPencil class="mr-2 h-4 w-4" />
										<span>Edit</span>
									</DropdownMenuItem>
									<DropdownMenuItem
										:class="menuItemClass"
										@click="confirmDelete(note)"
									>
										<IconTrash class="mr-2 h-4 w-4" />
										<span>Delete</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<ActionDialog
			v-model="formOpen"
			:title="editing ? 'Edit Note' : 'Add Note'"
			size="sm:w-[560px]"
		>
			<div class="space-y-4 p-6">
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="noteKey"
					>Key</label>
					<input
						id="noteKey"
						v-model="form.key"
						:class="inputClass"
						type="text"
						autocomplete="off"
					>
					<span
						v-if="formErrors.key"
						:class="errorClass"
					>{{ formErrors.key }}</span>
				</div>
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="noteValue"
					>Value</label>
					<input
						id="noteValue"
						v-model="form.value"
						:class="inputClass"
						type="text"
						autocomplete="off"
					>
					<span
						v-if="formErrors.value"
						:class="errorClass"
					>{{ formErrors.value }}</span>
				</div>
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="noteType"
					>Type</label>
					<select
						id="noteType"
						v-model="form.type"
						:class="inputClass"
					>
						<option value="text">
							Text
						</option>
						<option value="secret">
							Secret
						</option>
					</select>
				</div>
			</div>
			<template #actions>
				<button
					class="ml-2 inline-flex items-center gap-2 rounded bg-primary px-5 py-2 text-sm text-white hover:opacity-80"
					:disabled="saving"
					type="button"
					@click="save"
				>
					<IconLoader2
						v-if="saving"
						:size="16"
						class="animate-spin"
					/>
					Save
				</button>
			</template>
		</ActionDialog>

		<ActionDialog
			v-model="deleteOpen"
			title="Are you sure?"
			size="sm:w-[480px]"
		>
			<p class="p-6 text-sm">
				Are you sure you want to delete this note?
			</p>
			<template #actions>
				<button
					class="ml-2 rounded bg-primary px-4 py-2 text-sm text-white hover:opacity-80"
					type="button"
					@click="remove"
				>
					Yes
				</button>
			</template>
		</ActionDialog>
	</div>
</template>

<script setup lang="ts">
import { IconCopy, IconDots, IconEye, IconEyeOff, IconLoader2, IconPencil, IconPlus, IconTrash } from '@tabler/icons-vue';
import { useClipboard } from '@vueuse/core';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import VaultLocked from '~/components/VaultLocked.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { VaultEntry } from '~/types';

const headerClass = 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 sm:pl-6';
const primaryButtonClass = 'inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80';
const copyButtonClass = 'flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800';
const menuItemClass = 'group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-xs';
const labelClass = 'pb-1 pl-1 text-sm font-medium text-theme-label';
const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';
const errorClass = 'pl-1 pt-1 text-xs text-red-600';

const props = defineProps<{
	id: string;
}>();

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const { copy } = useClipboard();
const revealed = ref(new Set<number>());
const formOpen = ref(false);
const deleteOpen = ref(false);
const saving = ref(false);
const editing = ref<VaultEntry | null>(null);
const deleting = ref<VaultEntry | null>(null);
const form = reactive({ key: '', value: '', type: 'text' });
const formErrors = reactive({ key: '', value: '' });
const unavailable = ref(false);

// Markdown entries are the client documents
const { data: notes, pending, refresh } = useLazyAsyncData(
	`device-notes-${props.id}`,
	async () => {
		try {
			const entries = await $api.vault.listWithValues(props.id);
			unavailable.value = false;
			return entries.filter(entry => entry.type !== 'markdown');
		}
		catch {
			unavailable.value = true;
			return [];
		}
	},
	{ default: () => [] as VaultEntry[] },
);

const toggleSecret = (id: number) => {
	const next = new Set(revealed.value);
	if (!next.delete(id)) {
		next.add(id);
	}
	revealed.value = next;
};

const openForm = (note?: VaultEntry) => {
	editing.value = note || null;
	Object.assign(form, { key: note?.key || '', value: note?.value || '', type: note?.type || 'text' });
	Object.assign(formErrors, { key: '', value: '' });
	formOpen.value = true;
};

const save = async () => {
	formErrors.key = form.key ? '' : 'The key field is required';
	formErrors.value = form.value ? '' : 'The value field is required';
	if (formErrors.key || formErrors.value) {
		return;
	}
	saving.value = true;
	try {
		const payload = { ...form, client_id: props.id };
		if (editing.value) {
			await $api.vault.update(editing.value.id, payload);
			snackbar.add({ type: 'success', text: 'Note has been successfully updated.' });
		}
		else {
			await $api.vault.create(payload);
			snackbar.add({ type: 'success', text: 'Note has been successfully added.' });
		}
		formOpen.value = false;
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Note could not be saved.' });
	}
	finally {
		saving.value = false;
	}
};

const confirmDelete = (note: VaultEntry) => {
	deleting.value = note;
	deleteOpen.value = true;
};

const remove = async () => {
	const note = deleting.value;
	deleteOpen.value = false;
	if (!note) {
		return;
	}
	try {
		await $api.vault.delete(note.id);
		snackbar.add({ type: 'success', text: 'Note has been successfully deleted.' });
		await refresh();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Note could not be deleted.' });
	}
};
</script>
