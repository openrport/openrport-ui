<template>
	<ActionDialog
		v-model="open"
		:title="`Load ${label} from library`"
	>
		<template #toolbar>
			<div class="flex items-center bg-white px-4 pb-2 pt-2 shadow-md dark:bg-black">
				<IconSearch
					:size="30"
					class="primary-text mr-2"
				/>
				<input
					v-model="search"
					class="primary input-text block h-10 w-full flex-1 rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
					:placeholder="`Search ${kind}`"
					type="text"
					autocomplete="off"
				>
			</div>
		</template>
		<div class="h-[450px] overflow-y-auto p-5">
			<div
				v-if="loading"
				class="flex h-full items-center justify-center"
			>
				<IconLoader2
					:size="40"
					class="primary-text animate-spin"
				/>
			</div>
			<p
				v-else-if="!filteredTree.length"
				class="text-sm text-theme-label"
			>
				No {{ kind }} found.
			</p>
			<LibraryTree
				v-else
				:nodes="filteredTree"
				:kind="kind"
				:selected-id="selected?.id"
				:force-open="!!search"
				@select="selected = $event"
			/>
		</div>
		<template #actions>
			<button
				:class="['ml-2 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-primary',
					selected ? 'hover:opacity-80' : 'cursor-not-allowed opacity-50']"
				:disabled="!selected"
				type="button"
				@click="load"
			>
				Load
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconLoader2, IconSearch } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import LibraryTree, { type LibraryTreeNode } from '~/components/library/LibraryTree.vue';
import type { LibraryKind } from '~/repository/modules/library';
import type { Command, Script } from '~/types';

const props = defineProps<{
	kind: LibraryKind;
}>();

const emit = defineEmits<{
	load: [item: LibraryTreeNode];
}>();

const open = defineModel<boolean>({ required: true });

const label = computed(() => props.kind === 'scripts' ? 'script' : 'command');
const items = ref<Array<Command | Script>>([]);
const loading = ref(false);
const search = ref('');
const selected = ref<LibraryTreeNode | null>(null);

watch(open, async (isOpen) => {
	if (!isOpen) {
		selected.value = null;
		return;
	}
	const { $api } = useNuxtApp();
	loading.value = true;
	try {
		items.value = props.kind === 'scripts'
			? await $api.library.listAll('scripts')
			: await $api.library.listAll('commands');
	}
	finally {
		loading.value = false;
	}
});

// Names like "linux/disk/usage" are shown as folders, like the reference library tree
const tree = computed(() => {
	const roots: LibraryTreeNode[] = [];
	items.value.forEach((item) => {
		const parts = item.name.toLowerCase().split('/');
		let level = roots;
		parts.forEach((part, index) => {
			let node = level.find(candidate => candidate.name === part);
			if (!node) {
				node = {
					name: part,
					path: parts.slice(0, index + 1).join('/'),
					id: index === parts.length - 1 ? item.id : null,
					tags: item.tags,
					created_by: item.created_by,
					created_at: item.created_at,
					children: [],
				};
				level.push(node);
			}
			level = node.children;
		});
	});
	return roots;
});

const filterTree = (nodes: LibraryTreeNode[], term: string): LibraryTreeNode[] => nodes
	.map((node) => {
		const children = filterTree(node.children, term);
		const matches = node.name.includes(term) || node.tags?.join(' ').toLowerCase().includes(term);
		return matches || children.length ? { ...node, children } : null;
	})
	.filter((node): node is LibraryTreeNode => node !== null);

const filteredTree = computed(() => filterTree(tree.value, search.value.toLowerCase()));

const load = () => {
	if (selected.value) {
		emit('load', selected.value);
		open.value = false;
	}
};
</script>
