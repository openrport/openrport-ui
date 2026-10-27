<template>
	<div class="flex h-[55px] items-center justify-center border-t border-[#133B66]">
		<LibrarySaveButton
			:disabled="!canSave"
			:save-only="!loaded"
			@save="emit('save')"
			@save-as-new="emit('saveAsNew')"
		/>
		<button
			class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none ml-2 bg-white bg-opacity-10"
			type="button"
			@click="loadOpen = true"
		>
			Load
		</button>
		<button
			v-if="loaded"
			class="ml-2 inline-flex items-center rounded-full bg-red-500 p-2 text-white duration-200 hover:opacity-80 focus:outline-none"
			type="button"
			:title="`Delete ${label}`"
			@click="confirmDelete = true"
		>
			<IconTrash :size="20" />
		</button>
	</div>
	<LibraryLoadDialog
		v-model="loadOpen"
		:kind="kind"
		@load="emit('open', $event.id)"
	/>
	<ActionDialog
		v-model="confirmDelete"
		title="Please confirm"
		size="sm:w-[480px]"
	>
		<p class="p-6 text-center text-sm">
			Are you sure you want to delete this {{ label }}?
		</p>
		<template #actions>
			<button
				class="ml-2 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-red-600 hover:opacity-80"
				type="button"
				@click="confirmRemove"
			>
				Delete
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconTrash } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import LibraryLoadDialog from '~/components/library/LibraryLoadDialog.vue';
import LibrarySaveButton from '~/components/library/LibrarySaveButton.vue';
import type { LibraryKind } from '~/repository/modules/library';

const props = defineProps<{
	kind: LibraryKind;
	loaded: boolean;
	canSave: boolean;
}>();

const emit = defineEmits<{
	save: [];
	saveAsNew: [];
	remove: [];
	open: [id: string | null];
}>();

const label = computed(() => props.kind === 'commands' ? 'command' : 'script');
const loadOpen = ref(false);
const confirmDelete = ref(false);

const confirmRemove = () => {
	confirmDelete.value = false;
	emit('remove');
};
</script>
