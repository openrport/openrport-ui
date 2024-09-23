<template>
	<dialog
		:is-active="is_active"
		:title="action === 'create' ? 'New User' : 'Edit User'"
		save-button-text="Save"
		@close="closeModal"
		@save="save"
	>
		<div
			class="tw-p-3 tw-overflow-y-auto modal-height tw-relative tw-h-full tw-max-h-full tw-min-h-[280px] tw-transition-all dark:tw-text-gray-200"
		>
			<div class="tw-relative">
				<div class="tw-flex tw-flex-col tw-mt-4">
					<div class="tw-relative tw-mt-1 tw-flex tw-w-full tw-flex-col">
						<input
							v-model="user.username"
							class="form-control primary tw-input-text focus:tw-border-1 tw-peer tw-order-2 tw-block tw-h-10 tw-w-full tw-rounded tw-bg-transparent tw-text-theme-inverted tw-shadow-sm focus:tw-outline-0 focus:tw-ring-0 sm:tw-text-sm"
						>
						<label
							class="tw-order-1 tw-flex tw-pb-1 tw-pl-1 tw-text-theme-label peer-focus:tw-text-primary tw-text-sm tw-font-normal"
						>Username</label>
					</div>
				</div>
				<div class="tw-flex tw-flex-col tw-mt-4">
					<div class="tw-relative tw-mt-1 tw-flex tw-w-full tw-flex-col">
						<label
							class="tw-flex tw-pb-1 tw-pl-1 tw-text-theme-label peer-focus:tw-text-primary tw-text-sm tw-font-normal"
						>Groups</label>
						<Multiselect
							v-model="user.groups"
							mode="tags"
							:close-on-select="false"
							:create-option="false"
							:searchable="true"
							:options="groups?.map(item => item.name)"
						/>
					</div>
				</div>
				<div class="tw-mt-4 tw-pl-0.5 tw-text-sm tw-text-theme-inverted">
					Password
				</div>
				<div class="tw-flex tw-items-center tw-justify-between">
					<div class="tw-flex tw-flex-col tw-mt-4 tw-w-full">
						<div class="tw-relative tw-mt-1 tw-flex tw-w-full tw-flex-col">
							<input
								v-model="user.password"
								class="form-control primary tw-input-text focus:tw-border-1 tw-peer tw-order-2 tw-bloc tw-h-10 tw-w-full tw-rounded tw-bg-transparent tw-text-theme-inverted tw-shadow-sm focus:tw-outline-0 focus:tw-ring-0 sm:tw-text-sm"
								type="text"
								autocomplete="off"
							>
							<label
								class="tw-absolute tw-left-1.5 tw-top-1.5 tw-z-10 tw-origin-[0] -tw-trangray-y-4 tw-scale-75 tw-transform tw-px-1 tw-text-theme-label tw-duration-300 peer-placeholder-shown:tw-top-1/2 peer-placeholder-shown:-tw-trangray-y-1/2 peer-placeholder-shown:tw-scale-100 peer-focus:tw-top-1.5 peer-focus:-tw-trangray-y-4 peer-focus:tw-scale-75 peer-focus:tw-px-1 tw-text-theme-label peer-focus:tw-text-primary tw-bg-theme tw-text-sm tw-font-normal"
							>Password</label>
						</div>
					</div>
					<button
						class="tw-mt-5 tw-flex tw-h-10 tw-w-12 tw-items-center tw-justify-center hover:tw-bg-theme-light"
						@click="generatePassword"
					>
						<svg
							data-v-ca945699=""
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							class="icon"
						>
							<path
								fill="currentColor"
								d="M22 18v4h-4v-3h-3v-3h-3l-2.26-2.26c-.55.17-1.13.26-1.74.26a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 .61-.09 1.19-.26 1.74L22 18M7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"
							/>
						</svg>
					</button>
				</div>
				<div class="tw-flex tw-flex-col tw-mt-4">
					<div class="tw-relative tw-mt-1 tw-flex tw-w-full tw-flex-col">
						<input
							v-model="user.confirmPassword"
							class="form-control primary tw-input-text focus:tw-border-1 tw-peer tw-order-2 tw-block tw-h-10 tw-w-full tw-rounded tw-bg-transparent tw-text-theme-inverted tw-shadow-sm focus:tw-outline-0 focus:tw-ring-0 sm:tw-text-sm"
							type="text"
							autocomplete="off"
						>
						<label
							class="tw-absolute tw-left-1.5 tw-top-1.5 tw-z-10 tw-origin-[0] -tw-trangray-y-4 tw-scale-75 tw-transform tw-px-1 tw-text-theme-label tw-duration-300 peer-placeholder-shown:tw-top-1/2 peer-placeholder-shown:-tw-trangray-y-1/2 peer-placeholder-shown:tw-scale-100 peer-focus:tw-top-1.5 peer-focus:-tw-trangray-y-4 peer-focus:tw-scale-75 peer-focus:tw-px-1 tw-text-theme-label peer-focus:tw-text-primary tw-bg-theme tw-text-sm tw-font-normal"
						>Confirm
							password</label>
					</div>
				</div>
			</div>
		</div>
	</dialog>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
// import { randomPassword } from "@/lib/utils";

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
const closeModal = () => {
	emit('close');
};

const save = () => {
	emit('save', user.value);
};
const generatePassword = async () => {
	const password = randomPassword(16);
	user.value.password = password;
	user.value.confirmPassword = password;
};
</script>

<style scoped>
input.primary {
    background-color: transparent;
    border-color: #e5e7eb;
    color: #374151;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
