<template>
	<ul>
		<li
			v-for="node in nodes"
			:key="node.path"
		>
			<div
				v-if="node.children.length"
				:class="['flex cursor-pointer items-center rounded border-2 border-transparent px-3 py-1.5 text-sm hover:bg-blue-50 dark:hover:bg-slate-800',
					{ '!border-dashed !border-primary': dropTarget === node.path }]"
				@click="toggle(node.path)"
				@dragover.prevent="manage && (dropTarget = node.path)"
				@dragleave.prevent="dropTarget = null"
				@drop.prevent="onDrop($event, node)"
			>
				<IconChevronRight
					:size="16"
					:class="['mr-1 text-gray-500 transition-transform', { 'rotate-90': isOpen(node.path) }]"
				/>
				<IconFolderOpen
					v-if="isOpen(node.path)"
					:size="18"
					class="primary-text mr-2"
				/>
				<IconFolder
					v-else
					:size="18"
					class="primary-text mr-2"
				/>
				<span>{{ node.name }}</span>
			</div>
			<div
				v-else
				:class="['group flex items-center justify-between rounded px-3 py-1.5 text-sm',
					manage ? '' : 'cursor-pointer',
					selectedId === node.id ? 'bg-blue-100 dark:bg-slate-700' : 'hover:bg-blue-50 dark:hover:bg-slate-800']"
				:draggable="manage"
				@click="manage || emit('select', node)"
				@dragstart="onDragStart($event, node)"
			>
				<div class="flex items-center">
					<IconTerminal
						v-if="kind === 'commands'"
						:size="18"
						class="primary-text mr-2"
					/>
					<IconScript
						v-else
						:size="18"
						class="primary-text mr-2"
					/>
					<span>{{ node.name }}</span>
					<span
						v-for="tag in node.tags"
						:key="tag"
						class="ml-2 rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-700"
					>{{ tag }}</span>
				</div>
				<div class="ml-2 flex shrink-0 items-center">
					<span
						class="text-xs text-gray-500"
						:title="`Created by ${node.created_by} at ${formatUtc(node.created_at)}. Updated by ${node.updated_by} at ${formatUtc(node.updated_at)}`"
					>{{ node.created_by }} / {{ timeAgo(node.created_at) }}</span>
					<template v-if="manage">
						<button
							class="primary-text ml-4 rounded-full bg-blue-50 p-1.5 hover:bg-blue-100 dark:bg-slate-900"
							type="button"
							title="Edit"
							@click.stop="emit('edit', node.id!)"
						>
							<IconPencil :size="16" />
						</button>
						<button
							class="ml-1 rounded-full bg-red-50 p-1.5 text-red-600 hover:bg-red-100 dark:bg-slate-900"
							type="button"
							title="Delete"
							@click.stop="emit('delete', node.id!)"
						>
							<IconTrash :size="16" />
						</button>
					</template>
				</div>
			</div>
			<LibraryTree
				v-if="node.children.length && isOpen(node.path)"
				class="ml-5"
				:nodes="node.children"
				:kind="kind"
				:selected-id="selectedId"
				:force-open="forceOpen"
				:manage="manage"
				@select="emit('select', $event)"
				@edit="emit('edit', $event)"
				@delete="emit('delete', $event)"
				@drop="(id, name) => emit('drop', id, name)"
			/>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { IconChevronRight, IconFolder, IconFolderOpen, IconPencil, IconScript, IconTerminal, IconTrash } from '@tabler/icons-vue';
import { formatTimeAgo } from '@vueuse/core';
import type { LibraryKind } from '~/repository/modules/library';

export interface LibraryTreeNode {
	name: string;
	path: string;
	// Only leaf nodes map to a library entry
	id: string | null;
	tags?: string[];
	created_by?: string;
	created_at?: Date | string;
	updated_by?: string;
	updated_at?: Date | string;
	children: LibraryTreeNode[];
}

const props = defineProps<{
	nodes: LibraryTreeNode[];
	kind: LibraryKind;
	selectedId?: string | null;
	forceOpen?: boolean;
	// Library page: edit/delete buttons and drag'n drop between folders instead of selection
	manage?: boolean;
}>();

const emit = defineEmits<{
	select: [node: LibraryTreeNode];
	edit: [id: string];
	delete: [id: string];
	drop: [id: string, newName: string];
}>();

const opened = ref<Record<string, boolean>>({});
const dropTarget = ref<string | null>(null);

const isOpen = (path: string) => props.forceOpen || !!opened.value[path];

const toggle = (path: string) => {
	opened.value = { ...opened.value, [path]: !opened.value[path] };
};

const onDragStart = (event: DragEvent, node: LibraryTreeNode) => {
	if (props.manage && node.id) {
		event.dataTransfer?.setData('text/plain', `${node.id}|||${node.name}`);
	}
};

// Like the reference, dropping an entry on a folder renames it to "<folder path>/<entry name>"
const onDrop = (event: DragEvent, folder: LibraryTreeNode) => {
	dropTarget.value = null;
	const data = event.dataTransfer?.getData('text/plain');
	if (!props.manage || !data) {
		return;
	}
	const [id, name] = data.split('|||');
	emit('drop', id, `${folder.path}/${name}`);
};

const timeAgo = (date?: Date | string) => date ? formatTimeAgo(new Date(date)) : '';

const formatUtc = (date?: Date | string) => {
	const parsed = date ? new Date(date) : null;
	return parsed && !Number.isNaN(parsed.getTime()) ? `${parsed.toISOString().slice(0, 16).replace('T', ' ')} UTC` : '';
};
</script>
