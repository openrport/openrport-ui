<template>
	<div v-if="open">
		<div
			class="fixed inset-0 z-30 bg-black bg-opacity-25"
			@click="open = false"
		/>
		<div class="absolute right-0 top-full z-40 mt-2 w-[400px] rounded border border-gray-50 bg-white text-left shadow-lg dark:bg-gray-900">
			<div class="space-y-3 p-5">
				<div class="flex flex-col">
					<label
						class="pb-1 pl-1 text-sm font-medium text-theme-label"
						for="auditStart"
					>Audit starting date (UTC)</label>
					<input
						id="auditStart"
						v-model="draft.timestamp"
						:class="inputClass"
						type="date"
					>
				</div>
				<div class="flex flex-col">
					<label
						class="pb-1 pl-1 text-sm font-medium text-theme-label"
						for="auditUsername"
					>Username</label>
					<input
						id="auditUsername"
						v-model="draft.username"
						:class="inputClass"
						type="text"
						autocomplete="off"
					>
				</div>
				<div class="flex flex-col">
					<label
						class="pb-1 pl-1 text-sm font-medium text-theme-label"
						for="auditApplication"
					>Application</label>
					<select
						id="auditApplication"
						v-model="draft.application"
						:class="inputClass"
					>
						<option value="" />
						<option
							v-for="option in AUDIT_APPLICATIONS"
							:key="option.value"
							:value="option.value"
						>
							{{ option.text }}
						</option>
					</select>
				</div>
			</div>
			<div class="flex items-center justify-end border-t border-gray-50 p-5">
				<button
					class="mr-2 rounded px-4 py-2 text-sm uppercase text-gray-500 hover:bg-gray-100"
					type="button"
					@click="clear"
				>
					Clear
				</button>
				<button
					class="rounded bg-primary px-4 py-2 text-sm uppercase text-white hover:opacity-80"
					type="button"
					@click="apply"
				>
					Apply
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { AuditLogFilter } from '~/types';

const AUDIT_APPLICATIONS = [
	{ text: 'Auth user', value: 'auth.user' },
	{ text: 'Auth user me', value: 'auth.user.me' },
	{ text: 'Auth user me token', value: 'auth.user.me.token' },
	{ text: 'Auth user totp', value: 'auth.user.totp' },
	{ text: 'Auth user group', value: 'auth.user.group' },
	{ text: 'Client', value: 'client' },
	{ text: 'Client ACL', value: 'client.acl' },
	{ text: 'Client auth', value: 'client.auth' },
	{ text: 'Client group', value: 'client.group' },
	{ text: 'Client tunnel', value: 'client.tunnel' },
	{ text: 'Client command', value: 'client.command' },
	{ text: 'Client script', value: 'client.script' },
	{ text: 'Library command', value: 'library.command' },
	{ text: 'Library script', value: 'library.script' },
	{ text: 'Vault', value: 'vault' },
	{ text: 'Schedule', value: 'schedule' },
	{ text: 'Uploads', value: 'uploads' },
];

const open = defineModel<boolean>('open', { required: true });
const filter = defineModel<AuditLogFilter>({ required: true });

const emit = defineEmits<{
	apply: [];
}>();

const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';

// Edits stay local until Apply, so closing the panel does not change the list
const draft = ref<AuditLogFilter>({ ...filter.value });
watch(open, (isOpen) => {
	if (isOpen) {
		draft.value = { ...filter.value };
	}
});

const apply = () => {
	filter.value = { ...draft.value };
	open.value = false;
	emit('apply');
};

const clear = () => {
	draft.value = { timestamp: '', username: '', application: '' };
	apply();
};
</script>
