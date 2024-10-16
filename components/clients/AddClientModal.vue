<template>
	<Modal
		v-model="isOpen"
		title="Add Client Access"
		ok-text="Add Client Access"
		cancel-text="Cancel"
		:show-cancel="true"
		@close="close"
		@ok="save"
	>
		<div class="flex flex-col mt-4">
			<div class="relative mt-1 flex w-full flex-col">
				<input
					v-model="client.id"
					:class="['primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm', { error: errors.id }]"
					placeholder=" "
					type="text"
					autocomplete="off"
				>
				<label
					class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
				>ID</label>
			</div>
			<p
				v-if="errors.id"
				class="mt-1 pl-1 text-sm text-red-500"
			>
				{{ errors.id }}
			</p>
			<div class="caption mb-6 mt-1 px-3 text-[10.5px] tracking-[0.35px] text-theme-inverted text-opacity-80">
				Use meaningful names as ID to organize your clients better or <a
					class="text-primary underline"
					href="#"
					@click.prevent="generateRandomID"
				>generate a random ID </a> instead.
			</div>
		</div>
		<div class="flex flex-col mt-4">
			<div class="relative mt-1 flex w-full flex-col">
				<input
					v-model="client.password"
					:class="['primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm', { error: errors.password }]"
					placeholder=" "
					type="text"
					autocomplete="off"
				>
				<label class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal">Password</label>
			</div>
			<p
				v-if="errors.password"
				class="mt-1 pl-1 text-sm text-red-500"
			>
				{{ errors.password }}
			</p>
			<div class="mb-4 mt-2 px-3 text-right text-sm font-normal tracking-[0.35px] text-theme-inverted text-opacity-80">
				{{ client.password.length }}
			</div>
		</div>
		<div class="relative mt-1 flex px-4 py-2 text-sm font-normal text-primary before:absolute before:inset-0 before:bg-primary before:bg-opacity-10">
			<div class="mr-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="icon relative z-20 h-5 w-5"
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
					/>

				</svg>
			</div>
			<div class="relative z-20">
				The password must be at least 12 characters long. Only Alphanumeric and the following special characters _ + - . : are allowed.
			</div>
		</div>
		<div class="relative mt-1 flex px-4 py-2 text-sm font-normal text-primary before:absolute before:inset-0 before:bg-primary before:bg-opacity-10">
			<div class="mr-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="icon relative z-20 h-5 w-5"
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
				/></svg>
			</div><div class="relative z-20">
				The ID and the password are case-sensitive.
			</div>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '~/components/Modal.vue';
import { randomID, randomSanitizedPassword } from '~/lib/utils';

const { $api } = useNuxtApp();
const isOpen = ref(false);

const client = ref({
	id: '',
	password: randomSanitizedPassword(15),
});

const errors = reactive({
	id: '',
	password: '',
});

const emit = defineEmits(['close', 'save']);
const generateRandomID = () => {
	client.value.id = randomID(10);
	validateId();
};
const open = () => {
	isOpen.value = true;
};

const save = async () => {
	validateId();
	validatePassword();

	if (!errors.id && !errors.password) {
		if (await showClientAccess(client.value)) {
			emit('save', client.value);
		}
	}
};

const showClientAccess = async (data) => {
	try {
		const response = await $api.clientAuth.show(data.id);
		if (response?.id) {
			errors.id = 'ID already exist.';
			return false;
		}
		return true;
	}
	catch (e) {
		return true;
	}
};
const close = () => {
	emit('close');
	isOpen.value = false;
};

const validateId = () => {
	if (!client.value.id.trim()) {
		errors.id = 'The ID is required';
	}
	else {
		errors.id = '';
	}
};
const validatePassword = () => {
	if (!client.value.password) {
		errors.password = 'Password is invalid';
	}
	else if (client.value.password.length < 12) {
		errors.password = 'Password must be at least 12 characters long';
	}
	else if (!/^[a-zA-Z0-9_+\-.:]+$/.test(client.value.password)) {
		errors.password = 'Password can only contain alphanumeric characters and the special characters: _ + - . :';
	}
	else {
		errors.password = '';
	}
};
defineExpose({ open, close });
</script>
