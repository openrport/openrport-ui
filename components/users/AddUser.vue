<template>
	<Modal
		v-model="isOpen"
		title="New User"
		ok-text="Save"
		cancel-text="Cancel"
		:show-cancel="true"
		@ok="save"
		@close="close"
	>
		<div class="relative">
			<div class="flex flex-col mt-4">
				<div class="relative mt-1 flex w-full flex-col">
					<input
						v-model="user.username"
						class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
						placeholder=" "
						type="text"
						autocomplete="off"
					><label
						class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
					>Username</label>
				</div><!----><!---->
			</div><!----><!---->
			<div
				class="relative w-full text-left mt-4"
			>
				<div class="relative z-30">
					<label
						class="flex pb-1 pl-1 text-sm text-theme-inverted"
						for=""
					>Groups</label>
					<Multiselect
						v-model="user.groups"
						mode="tags"
						placeholder="Select or type in ..."
						:hide-selected="false"
						:close-on-select="false"
						:create-option="true"
						:searchable="true"
						:options="groups?.map(item => item.name)"
					/>
				</div>
			</div>
			<div class="mt-4 pl-0.5 text-sm text-theme-inverted">
				Password
			</div>
			<div class="flex items-center justify-between">
				<div
					class="flex flex-col mt-4 w-full"
				>
					<div class="relative mt-1 flex w-full flex-col">
						<input
							v-model="user.password"
							class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
							placeholder=" "
							type="text"
							autocomplete="off"
						>
						<label
							class="absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
						>Password</label>
					</div><!----><!---->
				</div>
				<button
					class="mt-5 flex h-10 w-12 items-center justify-center hover:bg-theme-light"
					@click="generatePassword"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						class="icon"
					><path
						fill="currentColor"
						d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74L22 18M7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
					/></svg>
				</button>
			</div>
			<div class="flex flex-col mt-4">
				<div class="relative mt-1 flex w-full flex-col">
					<input
						v-model="user.confirmPassword"
						class="primary input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
						placeholder=" "
						type="text"
						autocomplete="off"
					><label
						class="absolute left-1.5 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-theme-label duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 text-theme-label peer-focus:text-primary bg-theme text-sm font-normal"
						for="xBYKSlVe3g"
					>Confirm password</label>
				</div><!----><!---->
			</div><!---->
		</div>
	</Modal>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
import Modal from '~/components/Modal.vue';
import { randomPassword } from '@/lib/utils';

const isOpen = ref(false);

const props = defineProps({
	is_active: {
		type: Boolean,
		default: false,
	},
	action: {
		type: String,
		default: 'create',
	},
	groups: {
		type: Array,
		default: [],
	},
});
const user = ref({
	username: '',
	groups: [],
	password: '',
	confirmPassword: '',
});

const emit = defineEmits(['close', 'save']);
const open = () => {
	isOpen.value = true;
};
const generatePassword = async () => {
	const password = randomPassword(16);
	user.value.password = password;
	user.value.confirmPassword = password;
};

const save = () => {
	const userpayload: UserPayload = {
		username: user.value.username,
		password: user.value.password,
		groups: user.value.groups,
	};
	emit('save', userpayload);
	close();
};
const close = () => {
	isOpen.value = false;
};
onMounted(() => {
	if (props.action === 'create') {
		generatePassword();
	}
});
defineExpose({ open });
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
