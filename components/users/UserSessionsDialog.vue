<template>
	<ActionDialog
		v-model="open"
		title="Manage Sessions"
		size="w-full max-w-3xl"
	>
		<div class="max-h-[70vh] overflow-y-auto p-6 text-sm">
			<div
				v-if="loading"
				class="flex justify-center py-8"
			>
				<IconLoader2
					:size="28"
					class="animate-spin text-gray-400"
				/>
			</div>
			<p
				v-else-if="!sessions.length"
				class="rounded bg-sky-50 p-4 text-sky-800 dark:bg-sky-900/30 dark:text-sky-200"
			>
				User {{ username }} has no active sessions currently.
			</p>
			<template v-else>
				<p class="rounded bg-red-50 p-4 text-red-700 dark:bg-red-900/30 dark:text-red-300">
					On sessions deletion the user will be forced to re-authenticate immediately.
				</p>
				<div class="my-4 flex items-center justify-between">
					<span>For simplicity, you can remove all session at once</span>
					<button
						:class="removeButtonClass"
						type="button"
						@click="confirmRemove(null)"
					>
						<IconTrash :size="16" />
						Remove All Sessions
					</button>
				</div>
				<div
					v-for="session in sessions"
					:key="session.session_id"
					class="mb-4 grid grid-cols-12 rounded-lg bg-white p-4 shadow dark:bg-gray-900"
				>
					<dl class="col-span-9 space-y-3">
						<div
							v-for="row in sessionRows(session)"
							:key="row.label"
							class="flex gap-2"
						>
							<dt class="w-1/3 text-gray-600 dark:text-gray-400">
								{{ row.label }}
							</dt>
							<dd class="w-2/3 break-all font-bold text-gray-900 dark:text-white">
								{{ row.value }}
							</dd>
						</div>
					</dl>
					<div class="col-span-3 flex items-start justify-end">
						<button
							:class="removeButtonClass"
							type="button"
							@click="confirmRemove(session)"
						>
							<IconTrash :size="16" />
							Remove Session
						</button>
					</div>
				</div>
			</template>
		</div>
	</ActionDialog>

	<ActionDialog
		v-model="confirmOpen"
		title="Are you sure?"
		size="sm:w-[480px]"
	>
		<p class="p-6 text-sm">
			<!-- The reference showed these two messages the wrong way round -->
			<template v-if="removing">
				Are you sure you want to delete this session for user <span class="text-red-600">{{ username }}</span>?
			</template>
			<template v-else>
				Are you sure you want to delete all sessions for user <span class="text-red-600">{{ username }}</span>?
			</template>
		</p>
		<template #actions>
			<button
				class="ml-2 inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2 text-sm text-white hover:opacity-80"
				:disabled="busy"
				type="button"
				@click="remove"
			>
				<IconLoader2
					v-if="busy"
					:size="16"
					class="animate-spin"
				/>
				Yes
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconLoader2, IconTrash } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import type { UserSession } from '~/types';

const removeButtonClass = 'flex shrink-0 items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:opacity-80';

const props = defineProps<{
	username: string;
}>();

const open = defineModel<boolean>({ required: true });

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const sessions = ref<UserSession[]>([]);
const loading = ref(false);
const busy = ref(false);
const confirmOpen = ref(false);
// The session to remove, or null for all of them
const removing = ref<UserSession | null>(null);

const formatUtc = (date?: string) => {
	const parsed = date ? new Date(date) : null;
	return parsed && !Number.isNaN(parsed.getTime()) ? `${parsed.toISOString().slice(0, 16).replace('T', ' ')} UTC` : '-';
};

const sessionRows = (session: UserSession) => [
	{ label: 'IP Address:', value: session.ip_address },
	{ label: 'Last access at:', value: formatUtc(session.last_access_at) },
	{ label: 'Expires at:', value: formatUtc(session.expires_at) },
	{ label: 'User Agent:', value: session.user_agent },
];

const load = async () => {
	loading.value = true;
	try {
		sessions.value = (await $api.users.getSessions(props.username)).data || [];
	}
	catch (error) {
		sessions.value = [];
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'Failed to fetch user sessions' });
	}
	finally {
		loading.value = false;
	}
};

watch(() => [open.value, props.username] as const, ([isOpen]) => {
	if (isOpen) {
		load();
	}
});

const confirmRemove = (session: UserSession | null) => {
	removing.value = session;
	confirmOpen.value = true;
};

const remove = async () => {
	busy.value = true;
	try {
		if (removing.value) {
			await $api.users.deleteSessionForUser(props.username, removing.value.session_id);
		}
		else {
			await $api.users.deleteSessions(props.username);
		}
		confirmOpen.value = false;
		await load();
	}
	catch (error) {
		snackbar.add({ type: 'error', text: apiErrorText(error) || 'The session could not be removed.' });
	}
	finally {
		busy.value = false;
		removing.value = null;
	}
};
</script>
