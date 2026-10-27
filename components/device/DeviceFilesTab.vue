<template>
	<div class="relative w-full px-1 pb-12">
		<div class="min-h-[400px]">
			<div class="relative mb-4 flex h-14 items-center rounded border border-gray-300 dark:border-gray-600">
				<IconUpload
					:size="20"
					class="absolute left-2.5 text-theme-label"
				/>
				<input
					id="deviceUploadFile"
					ref="fileInput"
					type="file"
					class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
					@change="onFileChange"
				>
				<span class="pl-10 text-sm text-theme-label">{{ fileName || 'Local file to be uploaded' }}</span>
				<button
					v-if="fileName"
					class="absolute right-1 z-10 rounded-full p-1 primary-text"
					type="button"
					title="Remove file"
					@click="clearFile"
				>
					<IconCircleX :size="24" />
				</button>
			</div>
			<div class="mb-4 flex flex-col">
				<label
					:class="labelClass"
					for="deviceUploadDest"
				>Remote path (folder + file name, e.g. /tmp/test.txt, C:\Windows\temp\test.txt)</label>
				<input
					id="deviceUploadDest"
					v-model="form.dest"
					:class="inputClass"
					type="text"
					autocomplete="off"
				>
			</div>
			<label :class="toggleRowClass">
				<span>Force overwriting existing files (optional)</span>
				<input
					v-model="form.force"
					type="checkbox"
					:class="checkboxClass"
				>
			</label>
			<label :class="toggleRowClass">
				<span>Sync (optional)</span>
				<input
					v-model="form.sync"
					type="checkbox"
					:class="checkboxClass"
				>
			</label>
			<div :class="infoClass">
				<IconInfoCircle
					:size="22"
					class="shrink-0"
				/>
				<div>
					If sync is enabled, the client looks if a file already exists on the destination. If the md5 sum of the destination equals the md5 sum of the source, and if the ownership and mode are as desired (Linux only), the copy is skipped, and the process is considered successfully.
				</div>
			</div>
			<template v-if="!isWindows">
				<div class="mb-4 flex flex-col">
					<label
						:class="labelClass"
						for="deviceUploadMode"
					>Mode (optional)</label>
					<input
						id="deviceUploadMode"
						v-model="form.mode"
						:class="inputClass"
						type="text"
						autocomplete="off"
					>
				</div>
				<div :class="infoClass">
					<IconInfoCircle
						:size="22"
						class="shrink-0"
					/>
					<div>Enter the file permissions (mode) of the remote file using four-digit numeric octal notation. e.g. 0500</div>
				</div>
				<div class="mb-4 flex flex-col">
					<label
						:class="labelClass"
						for="deviceUploadUser"
					>User (optional)</label>
					<input
						id="deviceUploadUser"
						v-model="form.user"
						:class="inputClass"
						type="text"
						autocomplete="off"
					>
				</div>
				<div class="mb-4 flex flex-col">
					<label
						:class="labelClass"
						for="deviceUploadGroup"
					>Group (optional)</label>
					<input
						id="deviceUploadGroup"
						v-model="form.group"
						:class="inputClass"
						type="text"
						autocomplete="off"
					>
				</div>
				<div :class="infoClass">
					<IconInfoCircle
						:size="22"
						class="shrink-0"
					/>
					<div>Specify the user and group the file should belong to. If not set, the file is owned by the user and group that runs the rport client.</div>
				</div>
			</template>
			<div
				v-for="error in errors"
				:key="error"
				class="mb-4 flex items-center gap-4 rounded bg-red-600 p-4 text-sm font-medium text-white"
				role="alert"
			>
				<IconInfoCircle :size="20" />
				<div>{{ error }}</div>
			</div>
			<div class="flex items-center justify-center py-4">
				<button
					class="rounded-md bg-primary px-4 py-2.5 text-sm font-bold uppercase text-white shadow-sm hover:opacity-80"
					type="button"
					@click="upload"
				>
					Upload
				</button>
			</div>
		</div>
		<div
			v-if="isDisconnected"
			class="absolute inset-0 z-20 flex justify-center bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90"
		>
			<span class="mt-2 flex h-11 items-center rounded border border-primary px-4 text-sm primary-text opacity-50">
				<IconInfoCircle
					:size="18"
					class="pr-1"
				/>
				Client disconnected
			</span>
		</div>
		<ActionDialog
			v-model="progressOpen"
			title="Upload progress"
			size="sm:w-[480px]"
		>
			<div class="px-3 py-5">
				<div
					v-if="progress.status === 'uploading'"
					class="relative flex h-4 w-full items-center justify-center rounded bg-gray-300"
				>
					<div
						class="absolute left-0 h-4 rounded bg-primary transition-all"
						:style="{ width: `${progress.percent}%` }"
					/>
					<span class="relative text-sm font-medium text-white">{{ progress.percent }}%</span>
				</div>
				<div
					v-else-if="progress.status"
					:class="['flex items-center gap-4 rounded p-4 text-sm text-white', progress.status === 'done' ? 'bg-primary' : 'bg-red-600']"
				>
					{{ progress.message }}
				</div>
			</div>
		</ActionDialog>
	</div>
</template>

<script setup lang="ts">
import { IconCircleX, IconInfoCircle, IconUpload } from '@tabler/icons-vue';
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { getHostFromUrl } from '~/utils/url';
import type { Client } from '~/types';

type UploadStatus = '' | 'uploading' | 'done' | 'fail';

const labelClass = 'pb-1 pl-1 text-sm font-medium text-theme-label';
const inputClass = 'primary input-text block h-12 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';
const toggleRowClass = 'mb-4 flex h-14 cursor-pointer items-center justify-between rounded border border-gray-300 px-4 text-sm text-theme-label dark:border-gray-600';
const checkboxClass = 'h-[18px] w-[18px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text';
const infoClass = 'mb-4 flex items-center gap-2 rounded bg-sky-50 p-2 text-sm text-sky-800 md:gap-4 md:p-4 dark:bg-sky-900/30 dark:text-sky-200';

const props = defineProps<{
	client: Client;
}>();

const config = useRuntimeConfig();
const token = useCookie('token');
const fileInput = ref<HTMLInputElement | null>(null);
const fileName = ref('');
const errors = ref<string[]>([]);
const progressOpen = ref(false);
const progress = reactive<{ percent: number; status: UploadStatus; message: string }>({ percent: 0, status: '', message: '' });
const form = reactive({ dest: '', force: false, sync: false, mode: '', user: '', group: '' });
let socket: WebSocket | null = null;

const isWindows = computed(() => props.client?.os_kernel === 'windows');
const isDisconnected = computed(() => props.client?.connection_state === 'disconnected');

const setProgress = (percent: number, status: UploadStatus, message = progress.message) => {
	Object.assign(progress, { percent, status, message });
};

const onFileChange = () => {
	fileName.value = fileInput.value?.files?.[0]?.name || '';
};

const clearFile = () => {
	fileName.value = '';
	if (fileInput.value) {
		fileInput.value.value = '';
	}
};

const validate = () => {
	const found: string[] = [];
	if (!fileInput.value?.files?.length) {
		found.push('The file field is required');
	}
	if (!form.dest) {
		found.push('The remote path field is required');
	}
	else if (/[/\\\s]/.test(form.dest.slice(-1))) {
		found.push('Remote path must contain a folder and a file name');
	}
	if (form.mode && !/^0[0-7]{3}$/.test(form.mode)) {
		found.push('Invalid input for the file permissions mode field');
	}
	return found;
};

// The upload result arrives on the uploads websocket, like the reference
const openSocket = () => new Promise<void>((resolve, reject) => {
	const protocol = config.public.apiUrl.startsWith('http:') ? 'ws:' : 'wss:';
	socket = new WebSocket(`${protocol}//${getHostFromUrl(config.public.apiUrl)}/api/v1/ws/uploads?access_token=${token.value}`);
	socket.onmessage = (event) => {
		const message = JSON.parse(event.data);
		setProgress(100, message.status === 'success' ? 'done' : 'fail', message.message);
	};
	socket.onopen = () => resolve();
	socket.onerror = error => reject(error);
});

// XHR instead of $fetch to get upload progress
const send = (body: FormData) => new Promise<void>((resolve) => {
	const request = new XMLHttpRequest();
	request.open('POST', `${config.public.apiUrl}/api/v1/files`);
	request.setRequestHeader('Authorization', `Bearer ${token.value}`);
	request.upload.onprogress = (event) => {
		if (event.lengthComputable) {
			setProgress(Math.round(event.loaded / event.total * 100), 'uploading');
		}
	};
	request.onload = () => {
		if (request.status >= 400) {
			let message = 'The file could not be uploaded.';
			try {
				message = JSON.parse(request.responseText).errors?.[0]?.title || message;
			}
			catch {
				// Keep the generic message
			}
			setProgress(100, 'fail', message);
		}
		resolve();
	};
	request.onerror = () => {
		setProgress(100, 'fail', 'The file could not be uploaded.');
		resolve();
	};
	request.send(body);
});

const upload = async () => {
	if (isDisconnected.value) {
		return;
	}
	errors.value = validate();
	if (errors.value.length) {
		return;
	}
	const body = new FormData();
	body.append('upload', fileInput.value!.files![0]);
	body.append('client_id', props.client.id);
	body.append('dest', form.dest);
	body.append('force', String(form.force));
	body.append('sync', String(form.sync));
	if (form.mode) {
		body.append('mode', form.mode);
	}
	if (form.user) {
		body.append('user', form.user);
	}
	if (form.group) {
		body.append('group', form.group);
	}
	setProgress(0, 'uploading', '');
	progressOpen.value = true;
	try {
		await openSocket();
	}
	catch {
		setProgress(100, 'fail', 'Could not connect to the uploads websocket.');
		return;
	}
	await send(body);
};

// Closing the dialog after a successful upload resets the form
watch(progressOpen, (open) => {
	if (open) {
		return;
	}
	if (progress.status === 'done') {
		clearFile();
		Object.assign(form, { dest: '', force: false, sync: false, mode: '', user: '', group: '' });
		errors.value = [];
	}
	setProgress(0, '', '');
	socket?.close();
	socket = null;
});

onBeforeUnmount(() => socket?.close());
</script>
