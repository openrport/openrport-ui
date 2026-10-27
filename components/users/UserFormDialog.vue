<template>
	<ActionDialog
		v-model="open"
		:title="user ? 'Edit User' : 'New User'"
		size="w-full max-w-2xl"
	>
		<div class="max-h-[70vh] space-y-4 overflow-y-auto p-6">
			<div class="flex flex-col">
				<label
					:class="labelClass"
					for="userUsername"
				>Username</label>
				<input
					id="userUsername"
					v-model="form.username"
					:class="inputClass"
					type="text"
					autocomplete="off"
				>
				<p
					v-if="submitted && errors.username"
					:class="errorClass"
				>
					{{ errors.username }}
				</p>
			</div>
			<div
				v-if="showTwoFaSendTo"
				class="flex flex-col"
			>
				<label
					:class="labelClass"
					for="userTwoFaSendTo"
				>2FA send to</label>
				<input
					id="userTwoFaSendTo"
					v-model="form.twoFaSendTo"
					:class="inputClass"
					type="text"
					autocomplete="off"
				>
				<p
					v-if="errors.twoFaSendTo"
					:class="errorClass"
				>
					{{ errors.twoFaSendTo }}
				</p>
			</div>
			<div
				v-if="twoFaEnabled && user"
				class="flex items-center justify-between py-2"
			>
				<span :class="labelClass">2FA Reset</span>
				<button
					class="rounded bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 dark:bg-gray-800"
					type="button"
					@click="resetTotpOpen = true"
				>
					Reset TOTP secret
				</button>
			</div>
			<div>
				<span :class="labelClass">Groups</span>
				<div class="mt-1 max-h-48 overflow-y-auto rounded border border-gray-300 p-2 dark:border-gray-600">
					<label
						v-for="name in groupOptions"
						:key="name"
						class="flex cursor-pointer items-center rounded px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
					>
						<input
							v-model="form.groups"
							type="checkbox"
							:value="name"
							:class="checkboxClass"
						>
						{{ name }}
					</label>
				</div>
				<!-- Like the reference, a group name that does not exist yet can be typed in -->
				<div class="mt-2 flex gap-2">
					<input
						v-model="newGroup"
						:class="inputClass"
						placeholder="Add another group"
						type="text"
						autocomplete="off"
						@keydown.enter.prevent="addGroup"
					>
					<button
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
						type="button"
						title="Add group"
						@click="addGroup"
					>
						<IconPlus :size="16" />
					</button>
				</div>
			</div>
			<p class="pl-0.5 pt-2 text-sm text-theme-inverted">
				{{ user ? 'Change Password' : 'Password' }}
			</p>
			<div class="flex items-end gap-2">
				<div class="flex flex-1 flex-col">
					<label
						:class="labelClass"
						for="userPassword"
					>{{ user ? 'New password' : 'Password' }}</label>
					<input
						id="userPassword"
						v-model="form.password"
						:class="inputClass"
						type="text"
						autocomplete="new-password"
					>
				</div>
				<button
					class="flex h-10 w-12 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800"
					type="button"
					title="Generate password"
					@click="generatePassword"
				>
					<IconKey :size="22" />
				</button>
			</div>
			<p
				v-if="errors.password"
				:class="errorClass"
			>
				{{ errors.password }}
			</p>
			<div class="flex flex-col">
				<label
					:class="labelClass"
					for="userConfirmPassword"
				>{{ user ? 'Confirm new password' : 'Confirm password' }}</label>
				<input
					id="userConfirmPassword"
					v-model="form.confirmPassword"
					:class="inputClass"
					type="text"
					autocomplete="new-password"
				>
				<p
					v-if="submitted && errors.confirmPassword"
					:class="errorClass"
				>
					{{ errors.confirmPassword }}
				</p>
			</div>
			<label
				v-if="user"
				class="flex cursor-pointer select-none items-center py-4 text-sm text-theme-label"
			>
				<input
					v-model="form.passwordExpired"
					type="checkbox"
					:class="checkboxClass"
				>
				Enforce password change. User will immediately be logged out from all sessions
			</label>
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
				Save
			</button>
		</template>
	</ActionDialog>

	<ActionDialog
		v-model="resetTotpOpen"
		title="Are you sure?"
		size="sm:w-[480px]"
	>
		<div class="space-y-3 p-6 text-sm">
			<p>
				Are you sure you want to reset the TOTP secret for <span class="text-red-600">{{ form.username }}</span>?
			</p>
			<p
				v-if="resetTotpError"
				class="rounded bg-red-50 p-3 text-red-700"
			>
				{{ resetTotpError }}
			</p>
		</div>
		<template #actions>
			<button
				class="ml-2 inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm text-white hover:opacity-80"
				:disabled="resettingTotp"
				type="button"
				@click="resetTotp"
			>
				<IconLoader2
					v-if="resettingTotp"
					:size="16"
					class="animate-spin"
				/>
				Yes
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import { IconKey, IconLoader2, IconPlus } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { apiErrorText } from '~/composables/useScheduleTimingForm';
import { randomPassword } from '~/lib/utils';
import type { User, UserPayload } from '~/types';

const labelClass = 'pb-1 pl-1 text-sm font-normal text-theme-label';
const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 dark:text-gray-100 sm:text-sm';
const errorClass = 'mt-1 pl-1 text-sm text-red-600';
const checkboxClass = 'mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text';

const props = defineProps<{
	// The user being edited, or null to create one
	user: User | null;
}>();

const emit = defineEmits<{
	saved: [message: string];
}>();

const open = defineModel<boolean>({ required: true });

const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const statusStore = useStatusStore();
const { status } = storeToRefs(statusStore);

const saving = ref(false);
const submitted = ref(false);
const resetTotpOpen = ref(false);
const resettingTotp = ref(false);
const resetTotpError = ref('');
const newGroup = ref('');
const knownGroups = ref<string[]>([]);
const serverErrors = ref<Record<string, string>>({});
const form = reactive({
	username: '',
	twoFaSendTo: '',
	groups: [] as string[],
	password: '',
	confirmPassword: '',
	passwordExpired: false,
});

const twoFaEnabled = computed(() => !!status.value?.two_fa_enabled);
const showTwoFaSendTo = computed(() => twoFaEnabled.value && status.value?.two_fa_delivery_method !== 'totp_authenticator_app');
const groupOptions = computed(() => [...new Set([...knownGroups.value, ...form.groups])].sort((a, b) => a.localeCompare(b)));

const errors = computed(() => {
	const found: Record<string, string> = {};
	if (!form.username) {
		found.username = 'The username field is required';
	}
	else if (/^\s|\s$/.test(form.username)) {
		found.username = 'username must not start or end with whitespace';
	}
	if (form.password && form.password !== form.confirmPassword) {
		found.confirmPassword = 'The confirm new password does not match';
	}
	return { ...serverErrors.value, ...found };
});

watch(() => ({ ...form }), () => {
	serverErrors.value = {};
});

const generatePassword = () => {
	const password = randomPassword(16);
	form.password = password;
	form.confirmPassword = password;
};

const addGroup = () => {
	const name = newGroup.value.trim();
	if (name && !form.groups.includes(name)) {
		form.groups.push(name);
	}
	newGroup.value = '';
};

// A new user starts with a generated password, like the reference
watch(() => [open.value, props.user] as const, ([isOpen]) => {
	if (!isOpen) {
		return;
	}
	submitted.value = false;
	serverErrors.value = {};
	newGroup.value = '';
	Object.assign(form, {
		username: props.user?.username || '',
		twoFaSendTo: props.user?.two_fa_send_to || '',
		groups: [...(props.user?.groups || [])],
		password: '',
		confirmPassword: '',
		passwordExpired: !!props.user?.password_expired,
	});
	if (!props.user) {
		generatePassword();
	}
	statusStore.loadStatus();
	$api.userGroups.all()
		.then((groups) => {
			knownGroups.value = groups.map(group => group.name);
		})
		.catch(() => {
			knownGroups.value = [];
		});
});

const save = async () => {
	submitted.value = true;
	if (Object.keys(errors.value).length) {
		return;
	}
	const payload: UserPayload = {
		username: form.username,
		groups: form.groups,
		// Left out when empty so editing a user keeps the current password
		password: form.password || undefined,
		two_fa_send_to: form.twoFaSendTo,
	};
	saving.value = true;
	try {
		if (props.user) {
			await $api.users.update(props.user.username, { ...payload, password_expired: form.passwordExpired });
			// Enforcing a password change also ends the user's sessions
			if (form.passwordExpired) {
				await $api.users.deleteSessions(form.username).catch(() => null);
			}
			emit('saved', 'User updated successfully.');
		}
		else {
			await $api.users.create(payload);
			emit('saved', 'User created successfully.');
		}
		open.value = false;
	}
	catch (error) {
		const message = apiErrorText(error) || 'The user could not be saved.';
		const lower = message.toLowerCase();
		if (lower.includes('password')) {
			serverErrors.value = { password: message };
		}
		else if (lower.includes('two_fa_send_to')) {
			serverErrors.value = { twoFaSendTo: message };
		}
		else if (lower.includes('username')) {
			serverErrors.value = { username: message };
		}
		else {
			snackbar.add({ type: 'error', text: message });
		}
	}
	finally {
		saving.value = false;
	}
};

const resetTotp = async () => {
	if (!props.user) {
		return;
	}
	resettingTotp.value = true;
	resetTotpError.value = '';
	try {
		await $api.users.resetTotpSecret(props.user.username);
		resetTotpOpen.value = false;
	}
	catch (error) {
		resetTotpError.value = apiErrorText(error) || 'The TOTP secret could not be reset.';
	}
	finally {
		resettingTotp.value = false;
	}
};
</script>
