<template>
	<div
		class="flex flex-col flex-1 bg-white divide-y rounded-lg shadow divide-gray-50 dark:divide-gray-700 dark:bg-gray-900"
	>
		<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
			<div class="flex items-center content-center flex-1 max-h-16">
				<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
					Allowed user groups
				</h3>
			</div>
			<div
				v-if="!editing"
				class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"
			>
				<button
					class="bg-primary-800 hover:bg-primary-800 text-white cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300"
					type="button"
					@click="startEditing"
				>
					<span class="flex items-center justify-center gap-x-2">
						<IconPencil :size="14" />
						Edit
					</span>
				</button>
			</div>
		</div>
		<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
			<div
				v-if="editing"
				class="flex w-full items-center justify-between space-x-1"
			>
				<Popover>
					<PopoverTrigger as-child>
						<button
							class="flex min-h-[44px] w-full flex-wrap items-center gap-1 rounded border border-gray-300 px-2 py-1 text-left text-sm"
							type="button"
						>
							<span
								v-for="group in selection"
								:key="group"
								class="rounded bg-gray-100 px-2 py-0.5 text-gray-800"
							>{{ group }}</span>
							<span
								v-if="!selection.length"
								class="text-gray-400"
							>Select user groups</span>
						</button>
					</PopoverTrigger>
					<PopoverContent
						align="start"
						class="max-h-64 w-72 overflow-y-auto p-2"
					>
						<p
							v-if="!availableGroups.length"
							class="p-2 text-sm text-gray-500"
						>
							No other user groups. Administrators always have access.
						</p>
						<label
							v-for="group in availableGroups"
							:key="group"
							class="flex cursor-pointer items-center rounded px-2 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							<input
								v-model="selection"
								type="checkbox"
								:value="group"
								class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
							>
							{{ group }}
						</label>
					</PopoverContent>
				</Popover>
				<button
					class="rounded-md bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-200"
					:disabled="saving"
					type="button"
					@click="editing = false"
				>
					Cancel
				</button>
				<button
					class="flex items-center gap-x-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:opacity-80"
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
			</div>
			<div
				v-else
				class="flex items-center w-full"
			>
				<span>{{ groups.join(', ') }}</span>
				<span
					:class="{ 'pl-2': groups.length }"
					title="Access of administrators can't be removed."
				>
					<span v-if="groups.length"> +</span><span class="italic">Administrators</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconLoader2, IconPencil } from '@tabler/icons-vue';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { Client } from '~/types';

const ADMINISTRATORS_GROUP = 'Administrators';

const props = defineProps<{
	client: Client;
}>();

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const clientStore = useClientStore();
const editing = ref(false);
const saving = ref(false);
const selection = ref<string[]>([]);
const userGroups = ref<string[]>([]);

const groups = computed(() => props.client?.allowed_user_groups || []);
// Administrators always have access, so the reference does not offer that group
const availableGroups = computed(() => userGroups.value.filter(group => group !== ADMINISTRATORS_GROUP));

const startEditing = async () => {
	selection.value = [...groups.value];
	editing.value = true;
	if (!userGroups.value.length) {
		try {
			userGroups.value = (await $api.userGroups.all()).map(group => group.name);
		}
		catch (error) {
			snackbar.add({ type: 'error', text: apiErrorText(error) || 'User groups could not be loaded.' });
		}
	}
};

const save = async () => {
	saving.value = true;
	try {
		await $api.clients.updateAllowedUserGroups(props.client.id, selection.value);
		clientStore.$patch((state) => {
			state.currentClient.allowed_user_groups = [...selection.value];
		});
		editing.value = false;
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Allowed user groups could not be saved.' });
	}
	finally {
		saving.value = false;
	}
};
</script>
