import type { LibraryTreeNode } from '~/components/library/LibraryTree.vue';
import type { Command, Script } from '~/types';

// Names like "linux/disk/usage" become folders, like the reference library tree
export const buildLibraryTree = (items: Array<Command | Script>) => {
	const roots: LibraryTreeNode[] = [];
	items.forEach((item) => {
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
					updated_by: item.updated_by,
					updated_at: item.updated_at,
					children: [],
				};
				level.push(node);
			}
			level = node.children;
		});
	});
	return roots;
};

// Keeps nodes whose name or tags contain the term, plus the folders leading to them
export const filterLibraryTree = (nodes: LibraryTreeNode[], term: string): LibraryTreeNode[] => {
	const search = term.toLowerCase();
	return nodes
		.map((node) => {
			const children = filterLibraryTree(node.children, search);
			const matches = node.name.includes(search) || node.tags?.join(' ').toLowerCase().includes(search);
			return matches || children.length ? { ...node, children } : null;
		})
		.filter((node): node is LibraryTreeNode => node !== null);
};
