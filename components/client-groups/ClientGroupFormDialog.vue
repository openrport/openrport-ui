<template>
	<ActionDialog
		v-model="open"
		:title="group ? 'Edit Client Group' : 'New Client Group'"
		size="w-full max-w-4xl"
	>
		<div class="flex border-b border-gray-200 px-4 dark:border-gray-700">
			<button
				v-for="tab in TABS"
				:key="tab"
				:class="['-mb-px border-b-2 px-4 py-2 text-lg', activeTab === tab ? 'border-primary primary-text' : 'border-transparent hover:border-primary']"
				type="button"
				@click="activeTab = tab"
			>
				{{ tab }}
				<span
					v-if="tabHasError(tab)"
					class="ml-1 inline-block h-2 w-2 rounded-full bg-red-600"
				/>
			</button>
		</div>
		<div class="max-h-[65vh] min-h-[420px] overflow-y-auto p-6">
			<div
				v-if="activeTab === 'ID'"
				class="space-y-4"
			>
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="clientGroupId"
					>ID</label>
					<input
						id="clientGroupId"
						v-model="form.id"
						:class="[inputClass, { 'opacity-50': group }]"
						:readonly="!!group"
						type="text"
						autocomplete="off"
					>
					<p
						v-if="errors.id"
						:class="errorClass"
					>
						{{ errors.id }}
					</p>
				</div>
				<div class="flex flex-col">
					<label
						:class="labelClass"
						for="clientGroupDescription"
					>Description</label>
					<textarea
						id="clientGroupDescription"
						v-model="form.description"
						:class="[inputClass, 'h-auto py-2']"
						rows="6"
					/>
				</div>
			</div>

			<div v-else-if="activeTab === 'Members'">
				<div class="border-b border-gray-100 pb-4 dark:border-gray-700">
					<h4 class="font-bold">
						Members based on filters
					</h4>
					<p class="py-2 text-sm">
						Define which clients are in group.
					</p>
				</div>
				<div
					v-for="(filter, index) in filters"
					:key="index"
					class="border-b border-gray-300 py-4 dark:border-gray-700"
				>
					<div class="flex items-start gap-x-3">
						<div class="flex w-3/12 flex-col">
							<label
								:class="labelClass"
								:for="`filterType-${index}`"
							>Filter Type</label>
							<select
								:id="`filterType-${index}`"
								:value="filter.key"
								:class="inputClass"
								@change="changeKey(index, ($event.target as HTMLSelectElement).value)"
							>
								<option
									value=""
									disabled
								/>
								<option
									v-for="option in FILTER_TYPES"
									:key="option.value"
									:value="option.value"
									:disabled="option.value !== filter.key && blockedKeys.has(option.value)"
								>
									{{ option.text }}
								</option>
							</select>
							<p
								v-if="submitted && !filter.key"
								:class="errorClass"
							>
								This is required
							</p>
						</div>
						<div
							v-if="filter.key"
							class="w-9/12"
						>
							<template v-if="isPickList(filter.key)">
								<span :class="labelClass">{{ filter.key === 'tag-and' ? 'Filter value (AND)' : 'Filter value (OR)' }}</span>
								<div class="mt-1 max-h-48 overflow-y-auto rounded border border-gray-300 p-2 dark:border-gray-600">
									<p
										v-if="!pickOptions(filter).length"
										class="text-sm text-gray-500"
									>
										No values available
									</p>
									<label
										v-for="option in pickOptions(filter)"
										:key="option"
										class="flex cursor-pointer items-center rounded px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
									>
										<input
											v-model="filter.values"
											type="checkbox"
											:value="option"
											:class="checkboxClass"
										>
										{{ option }}
									</label>
								</div>
							</template>
							<template v-else>
								<div
									v-for="(_, valueIndex) in filter.values"
									:key="valueIndex"
									class="mb-2 flex items-end gap-2"
								>
									<div class="flex flex-1 flex-col">
										<label
											v-if="valueIndex === 0"
											:class="labelClass"
											:for="`filterValue-${index}`"
										>Filter value, wildcards supported, values are combined with logical OR</label>
										<input
											:id="valueIndex === 0 ? `filterValue-${index}` : undefined"
											v-model="filter.values[valueIndex]"
											:class="inputClass"
											type="text"
											autocomplete="off"
										>
									</div>
									<button
										class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600"
										type="button"
										title="Remove value"
										@click="removeValue(filter, valueIndex)"
									>
										<IconTrash :size="16" />
									</button>
									<button
										v-if="valueIndex === filter.values.length - 1"
										class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
										type="button"
										title="Add value"
										@click="filter.values.push('')"
									>
										<IconPlus :size="16" />
									</button>
								</div>
							</template>
							<p
								v-if="submitted && !cleanValues(filter).length"
								:class="errorClass"
							>
								This is required
							</p>
						</div>
					</div>
					<div class="mt-2 flex justify-end">
						<button
							class="flex items-center gap-1 rounded px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
							type="button"
							@click="filters.splice(index, 1)"
						>
							<IconTrash :size="16" />
							Delete Filter
						</button>
					</div>
				</div>
				<div class="flex items-center justify-between pt-6">
					<span class="text-sm">Multiple filters are combined with a logical AND.</span>
					<button
						class="flex items-center gap-1 rounded bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 dark:bg-gray-800"
						type="button"
						@click="filters.push({ key: '', values: [] })"
					>
						<IconPlus :size="18" />
						Add Filter
					</button>
				</div>
			</div>

			<div v-else>
				<h4 class="font-bold">
					Access permissions
				</h4>
				<p class="py-2 text-sm">
					Define which user groups are allowed to access the client group.
				</p>
				<span :class="labelClass">Allowed user groups</span>
				<div class="mt-1 max-h-64 overflow-y-auto rounded border border-gray-300 p-2 dark:border-gray-600">
					<p
						v-if="!userGroups.length"
						class="text-sm text-gray-500"
					>
						No user groups
					</p>
					<label
						v-for="name in userGroups"
						:key="name"
						class="flex cursor-pointer items-center rounded px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
					>
						<input
							v-model="form.allowedUserGroups"
							type="checkbox"
							:value="name"
							:class="checkboxClass"
						>
						{{ name }}
					</label>
				</div>
			</div>
		</div>
		<template #actions>
			<button
				class="ml-2 inline-flex items-center gap-2 rounded bg-primary px-5 py-2 text-sm text-white hover:opacity-80 disabled:opacity-50"
				:disabled="saving"
				type="button"
				@click="save"
			>
				<IconLoader2
					v-if="saving"
					:size="16"
					class="animate-spin"
				/>
				{{ group ? 'Save' : 'Create' }}
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconLoader2, IconPlus, IconTrash } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { ClientGroup } from '~/types';

type Tab = 'ID' | 'Members' | 'Permissions';
interface FilterRow {
	key: string;
	values: string[];
}

const TABS: Tab[] = ['ID', 'Members', 'Permissions'];
// Same filter types as the reference, sorted by label
const FILTER_TYPES = [
	{ text: 'Client ID is', value: 'client_id' },
	{ text: 'Name is', value: 'name' },
	{ text: 'OS Full Name is', value: 'os_full_name' },
	{ text: 'OS is', value: 'os' },
	{ text: 'OS Arch is', value: 'os_arch' },
	{ text: 'OS Family is', value: 'os_family' },
	{ text: 'OS Version is', value: 'os_version' },
	{ text: 'OS Virtualization Role is', value: 'os_virtualization_role' },
	{ text: 'OS Virtualization System is', value: 'os_virtualization_system' },
	{ text: 'OS Kernel is', value: 'os_kernel' },
	{ text: 'Hostname is', value: 'hostname' },
	{ text: 'IPV4 is', value: 'ipv4' },
	{ text: 'IPV6 is', value: 'ipv6' },
	{ text: 'Has any tag', value: 'tag' },
	{ text: 'Has all tags', value: 'tag-and' },
	{ text: 'Version is', value: 'version' },
	{ text: 'Address is', value: 'address' },
	{ text: 'Update Status is', value: 'updates_status' },
	{ text: 'Client Auth ID is', value: 'client_auth_id' },
	{ text: 'Connection State', value: 'connection_state' },
].sort((a, b) => a.text.localeCompare(b.text));
const CONNECTION_STATES = ['connected', 'disconnected'];

const labelClass = 'pb-1 pl-1 text-sm font-normal text-theme-label';
const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 dark:text-gray-100 dark:[&>option]:bg-gray-900 sm:text-sm';
const errorClass = 'mt-1 pl-1 text-sm text-red-600';
const checkboxClass = 'mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text';

const props = defineProps<{
	// The group being edited, or null to create one
	group: ClientGroup | null;
}>();

const emit = defineEmits<{
	saved: [message: string];
}>();

const open = defineModel<boolean>({ required: true });

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const activeTab = ref<Tab>('ID');
const saving = ref(false);
const submitted = ref(false);
const idError = ref('');
const form = reactive({ id: '', description: '', allowedUserGroups: [] as string[] });
const filters = ref<FilterRow[]>([]);
const userGroups = ref<string[]>([]);
const tags = ref<string[]>([]);

// The server takes either "Has any tag" or "Has all tags" (params.tag.or / params.tag.and), never both
const TAG_KEYS = ['tag', 'tag-and'];
const blockedKeys = computed(() => {
	const used = filters.value.map(filter => filter.key);
	return new Set(used.some(key => TAG_KEYS.includes(key)) ? [...used, ...TAG_KEYS] : used);
});
const isPickList = (key: string) => ['tag', 'tag-and', 'connection_state'].includes(key);
const cleanValues = (filter: FilterRow) => filter.values.map(value => value.trim()).filter(Boolean);
const filtersInvalid = computed(() => filters.value.some(filter => !filter.key || !cleanValues(filter).length));

const errors = computed(() => ({ id: idError.value }));
const tabHasError = (tab: Tab) => submitted.value && ((tab === 'ID' && !!idError.value) || (tab === 'Members' && filtersInvalid.value));

// Values already saved stay selectable even when no client has them anymore
const pickOptions = (filter: FilterRow) => {
	const options = filter.key === 'connection_state' ? CONNECTION_STATES : tags.value;
	return [...new Set([...options, ...filter.values])].sort((a, b) => a.localeCompare(b));
};

// params look like { name: ['a*'], tag: { or: [...] } }; "Has all tags" is stored under tag.and
const toFilters = (params: ClientGroup['params']): FilterRow[] => Object.entries(params || {}).flatMap(([key, value]) => {
	if (key === 'tag' && value && !Array.isArray(value)) {
		const tagValue = value as { and?: string[]; or?: string[] };
		return [
			...(tagValue.or?.length ? [{ key: 'tag', values: [...tagValue.or] }] : []),
			...(tagValue.and?.length ? [{ key: 'tag-and', values: [...tagValue.and] }] : []),
		];
	}
	return Array.isArray(value) && value.length ? [{ key, values: value.map(String) }] : [];
});

const toParams = () => Object.fromEntries(filters.value.map((filter) => {
	const values = cleanValues(filter);
	if (TAG_KEYS.includes(filter.key)) {
		return ['tag', { [filter.key === 'tag' ? 'or' : 'and']: values }];
	}
	return [filter.key, values];
}));

const changeKey = (index: number, key: string) => {
	filters.value[index] = { key, values: isPickList(key) ? [] : [''] };
};

const removeValue = (filter: FilterRow, index: number) => {
	filter.values.splice(index, 1);
	if (!filter.values.length) {
		filter.values.push('');
	}
};

const loadOptions = async () => {
	const [groupsResult, tagsResult] = await Promise.allSettled([
		$api.userGroups.all(),
		$api.clients.listTags('page[limit]=500&page[offset]=0'),
	]);
	userGroups.value = groupsResult.status === 'fulfilled' ? groupsResult.value.map(group => group.name) : [];
	tags.value = tagsResult.status === 'fulfilled' ? (tagsResult.value.data || []).map(tag => tag.tag) : [];
};

// Also reset when another group is picked while the dialog state is still open
watch(() => [open.value, props.group] as const, ([isOpen]) => {
	if (!isOpen) {
		return;
	}
	activeTab.value = 'ID';
	submitted.value = false;
	idError.value = '';
	Object.assign(form, {
		id: props.group?.id || '',
		description: props.group?.description || '',
		allowedUserGroups: [...(props.group?.allowed_user_groups || [])],
	});
	filters.value = toFilters(props.group?.params);
	loadOptions();
});

// A new ID must not be taken; the reference asks the server for it
const checkId = async () => {
	if (props.group) {
		return '';
	}
	if (!form.id.trim()) {
		return 'The ID is required.';
	}
	try {
		await $api.groups.show(form.id.trim());
		return 'There is already a client group with this ID.';
	}
	catch (error) {
		return (error as { status?: number }).status === 404 ? '' : apiErrorText(error) || 'The ID could not be checked.';
	}
};

const save = async () => {
	submitted.value = true;
	saving.value = true;
	try {
		idError.value = await checkId();
		if (idError.value || filtersInvalid.value) {
			activeTab.value = idError.value ? 'ID' : 'Members';
			return;
		}
		const payload = {
			id: form.id.trim(),
			description: form.description,
			params: toParams(),
			allowed_user_groups: form.allowedUserGroups,
		};
		if (props.group) {
			await $api.groups.update(props.group.id, payload);
			emit('saved', 'Client Group updated successfully.');
		}
		else {
			await $api.groups.create(payload);
			emit('saved', 'Client Group created successfully.');
		}
		open.value = false;
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'The client group could not be saved.' });
	}
	finally {
		saving.value = false;
	}
};
</script>
