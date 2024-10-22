<template>
	<Modal
		v-model="isOpen"
		title="Install client"
		ok-text="Close"
		cancel-text="Cancel"
		:show-cancel="true"
		@close="close"
		@ok="close"
	>
		<div
			v-if="isLoading"
			class="absolute inset-0 flex items-center justify-center overflow-hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24px"
				height="24px"
				viewBox="0 0 24 24"
				class="icon mr-2 w-full flex-1 animate-spin text-vtd-primary-500"
			>
				<path
					fill="currentColor"
					d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
					opacity=".25"
				/>
				<path
					fill="currentColor"
					d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
				>
					<animateTransform
						attributeName="transform"
						dur="0.75s"
						repeatCount="indefinite"
						type="rotate"
						values="0 12 12;360 12 12"
					/>

				</path>

			</svg>
		</div>
		<div
			v-else
			class="-m-3"
		>
			<div class="flex w-auto flex-col p-3">
				<div class="my-2 flex w-full bg-white p-3 text-sm text-black-087">
					<div class="flex w-1/2 items-center justify-start">
						<div class="inline-flex w-max cursor-pointer ml-3">
							<div class="flex gap-1">
								<span class="font-bold">ID</span>
								<span>{{ client.id }}</span>
							</div>
						</div>
						<div class="inline-flex w-max cursor-pointer ml-3">
							<button class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="icon"
									width="16px"
									height="16px"
									viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
								/></svg>
							</button>
						</div>
					</div>
					<div class="flex w-1/2 items-center justify-end">
						<div class="inline-flex w-max cursor-pointer ml-3">
							<div
								data-v-298c7968=""
								class="flex gap-1"
							>
								<span
									data-v-298c7968=""
									class="font-bold"
								>Password</span>
								<span data-v-298c7968="">{{ client.password }}8</span>
							</div>
						</div><div class="inline-flex w-max cursor-pointer ml-3">
							<button
								class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="icon"
									width="16px"
									height="16px"
									viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
								/></svg>
							</button>
						</div>
					</div>
				</div>
				<div
					class="mt-3 flex items-end"
				>
					<div
						class="w-1/2"
					>
						<p
							class="pb-2"
						>
							How does the client connect?
						</p>
					</div>
					<div
						class="w-1/2"
					>
						<div>
							<div class="relative mt-1 flex w-full flex-col">
								<select
									v-model="selectedConnectUrl"
									class="primary focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
								>
									<option
										v-for="connect in status.connect_url"
										:key="connect"
										:value="connect"
									>
										{{ connect }}
									</option>
								</select><label
									class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary order-1 text-sm font-medium"
								>Connect URL</label>
							</div><!----><!---->
						</div>
					</div>
				</div>
				<div
					class="mt-3"
				>
					<div
						v-for="option in INSTALLER_OPTIONS"
						:key="option.id"
						class="flex flex-col mt-2"
					>
						<label
							v-if="option.id !== 'tacoscript'"
							class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
						>
							<input
								v-model="selectedOptions[option.id]"
								type="checkbox"
								class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								@change="updateCommand"
							>{{ option.label }}</label>
						<label
							v-else
							class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label"
						>
							<input
								v-model="selectedOptions[option.id]"
								type="checkbox"
								class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								@change="updateCommand"
							>Install &nbsp;<a
								href="https://kb.openrport.io/digging-deeper/commands-and-scripts/tacoscript"
								class="text-primary underline"
								target="_blank"
							>Tacoscript </a>&nbsp; along with the RPort client</label>
					</div>
				</div>
				<div
					class="mt-3 pl-6"
				>
					<p
						class="pb-4 text-sm text-gray-700"
					>
						The pairing service is free and secure. No data is stored. There are a lot more options and parameters. <a
							href="https://kb.openrport.io/connecting-clients"
							class="text-primary underline"
							target="_blank"
						>Learn more</a>
					</p>
				</div>
			</div>
			<ClientsInstallationCommand
				:linux-code="linuxCode"
				:windows-code="windowsCode"
				:disabled="false"
			/>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import type { ClientAuth } from '~/types';
import { INSTALLER_OPTIONS } from '~/constants';
import Modal from '~/components/Modal.vue';
import { useInstaller } from '~/composables/useInstaller';

const isOpen = ref(false);
const client = ref<Partial<ClientAuth> | null>(null);
const status = ref(null);
const selectedConnectUrl = ref('');

const { isLoading, error, installers, fetchInstaller } = useInstaller();

const selectedOptions = ref({});
const emit = defineEmits(['close', 'save']);

const close = () => {
	emit('close');
	isOpen.value = false;
	client.value = null;
	status.value = null;
	selectedConnectUrl.value = '';
};
const open = async (clientAccess?: Partial<ClientAuth>, statusServer) => {
	isOpen.value = true;
	client.value = clientAccess;
	status.value = statusServer;
	if (statusServer.connect_url.length > 0) {
		selectedConnectUrl.value = statusServer.connect_url[0];
		await updateInstaller();
	}
};

const generateCommand = (platform: 'linux' | 'windows') => {
	return computed(() =>
		Object.entries(selectedOptions.value)
			.filter(([id, isSelected]) => {
				if (!isSelected) return false;
				const option = INSTALLER_OPTIONS.find(opt => opt.id === id);
				return platform === 'windows'
					? option?.platformSupport === 'all'
					: true;
			})
			.map(([id]) => {
				const option = INSTALLER_OPTIONS.find(opt => opt.id === id);
				return `-${option?.flag}`;
			})
			.join(' '),
	);
};

const linuxCommand = generateCommand('linux');

const windowsCommand = generateCommand('windows');

const linuxCode = computed(() => `${installers.linux} ${linuxCommand.value}`);
const windowsCode = computed(() => `${installers.windows} ${windowsCommand.value}`);
function initializeOptions() {
	INSTALLER_OPTIONS.forEach((option) => {
		selectedOptions.value[option.id] = true;
	});
}

async function updateInstaller() {
	if (!client.value?.id || !selectedConnectUrl.value || !status.value?.fingerprint) {
		return;
	}

	await fetchInstaller({
		client_id: client.value.id,
		connect_url: selectedConnectUrl.value,
		fingerprint: status?.value?.fingerprint as string,
		password: client.value.password ?? '',
	}, status?.value?.pairing_url as string);
}

onMounted(() => {
	initializeOptions();
});

watch(() => selectedConnectUrl.value, updateInstaller);

onUnmounted(() => {
	client.value = null;
	status.value = null;
	selectedConnectUrl.value = '';
});
defineExpose({ open, close });
</script>
