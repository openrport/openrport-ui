<template>
	<ul>
		<li
			v-for="node in nodes"
			:key="node.path"
		>
			<div
				v-if="node.children.length"
				class="flex cursor-pointer items-center rounded px-3 py-1.5 text-sm hover:bg-blue-50 dark:hover:bg-slate-800"
				@click="toggle(node.path)"
			>
				<IconChevronRight
					:size="16"
					:class="['mr-1 text-gray-500 transition-transform', { 'rotate-90': isOpen(node.path) }]"
				/>
				<IconFolder
					:size="18"
					class="primary-text mr-2"
				/>
				<span>{{ node.name }}</span>
			</div>
			<div
				v-else
				:class="['flex cursor-pointer items-center justify-between rounded px-3 py-1.5 text-sm',
					selectedId === node.id ? 'bg-blue-100 dark:bg-slate-700' : 'hover:bg-blue-50 dark:hover:bg-slate-800']"
				@click="emit('select', node)"
				@dblclick="emit('select', node)"
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
				<span class="text-xs text-gray-500">{{ node.created_by }} / {{ timeAgo(node.created_at) }}</span>
			</div>
			<LibraryTree
				v-if="node.children.length && isOpen(node.path)"
				class="ml-5"
				:nodes="node.children"
				:kind="kind"
				:selected-id="selectedId"
				:force-open="forceOpen"
				@select="emit('select', $event)"
			/>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { IconChevronRight, IconFolder, IconScript, IconTerminal } from '@tabler/icons-vue';
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
	children: LibraryTreeNode[];
}

const props = defineProps<{
	nodes: LibraryTreeNode[];
	kind: LibraryKind;
	selectedId?: string | null;
	forceOpen?: boolean;
}>();

const emit = defineEmits<{
	select: [node: LibraryTreeNode];
}>();

const opened = ref<Record<string, boolean>>({});

const isOpen = (path: string) => props.forceOpen || !!opened.value[path];

const toggle = (path: string) => {
	opened.value = { ...opened.value, [path]: !opened.value[path] };
};

const timeAgo = (date?: Date | string) => date ? formatTimeAgo(new Date(date)) : '';
</script>
