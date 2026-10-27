import type { ClientGroup, Tag } from '~/types';
import type { ClientSelectionTab } from '~/components/ClientSelector.vue';
import type { JobClientTags } from '~/composables/useJobExecution';

export interface ExecutionTargets {
	client_ids: string[];
	group_ids: string[];
	tags: JobClientTags | null;
}

const unique = (ids: string[]) => [...new Set(ids)];

// Keeps the ClientSelector output and turns it into execution targets the way the reference UI does:
// groups and tags are resolved to their client ids, group ids and tags are only sent as a fallback.
export const useClientSelectionTargets = (onTabChange?: () => void) => {
	const activeTab = ref<ClientSelectionTab | null>(null);
	const clientIds = ref<string[]>([]);
	const groups = ref<Record<string, ClientGroup>>({});
	const matchedIds = ref<string[]>([]);
	const tags = ref<Record<string, Tag>>({});

	const changeTab = (tab: ClientSelectionTab) => {
		activeTab.value = tab;
		clientIds.value = [];
		groups.value = {};
		matchedIds.value = [];
		tags.value = {};
		onTabChange?.();
	};

	const hasSelection = computed(() => {
		switch (activeTab.value) {
			case 'individual-clients':
				return clientIds.value.length > 0;
			case 'client-groups':
				return Object.keys(groups.value).length > 0;
			case 'clients-matching':
				return matchedIds.value.length > 0;
			case 'clients-by-tags':
				return Object.keys(tags.value).length > 0;
			default:
				return false;
		}
	});

	const targets = computed<ExecutionTargets | null>(() => {
		if (!hasSelection.value) {
			return null;
		}
		switch (activeTab.value) {
			case 'individual-clients':
				return { client_ids: clientIds.value, group_ids: [], tags: null };
			case 'client-groups':
				return {
					client_ids: unique(Object.values(groups.value).flatMap(group => group.client_ids || [])),
					group_ids: Object.keys(groups.value),
					tags: null,
				};
			case 'clients-matching':
				return { client_ids: matchedIds.value, group_ids: [], tags: null };
			case 'clients-by-tags':
				return {
					client_ids: unique(Object.values(tags.value).flatMap(tag => tag.client_ids)),
					group_ids: [],
					tags: { tags: Object.keys(tags.value), operator: 'AND' },
				};
			default:
				return null;
		}
	});

	const selectorListeners = {
		'onChanged:tab': changeTab,
		'onUpdate:clientIds': (ids: string[]) => {
			clientIds.value = ids;
		},
		'onUpdate:groupIds': (selected: Record<string, ClientGroup>) => {
			groups.value = selected;
		},
		'onUpdate:matchedIds': (ids: string[]) => {
			matchedIds.value = ids;
		},
		'onUpdate:tags': (selected: Record<string, Tag>) => {
			tags.value = selected;
		},
	};

	return { activeTab, hasSelection, targets, selectorListeners };
};
