<template>
	<form
		novalidate
		@submit.prevent="save"
	>
		<div class="relative z-20 flex h-16 items-center">
			<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
				Settings
			</h3>
		</div>
		<div class="mt-4 flex flex-col gap-y-8">
			<div :class="cardClass">
				<div class="px-4 py-4 sm:px-6">
					<h3 :class="cardTitleClass">
						General
					</h3>
				</div>
				<div class="space-y-4 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
					<div class="flex flex-col">
						<label
							:class="labelClass"
							for="settingsTheme"
						>Selected theme</label>
						<select
							id="settingsTheme"
							v-model="form.theme"
							:class="inputClass"
						>
							<option
								v-for="theme in THEMES"
								:key="theme"
								:value="theme"
							>
								{{ theme }}
							</option>
						</select>
					</div>
					<div
						v-if="isChrome"
						class="flex flex-col"
					>
						<label
							:class="labelClass"
							for="settingsSshChrome"
						>Use Secure Shell Extension for Chrome</label>
						<select
							id="settingsSshChrome"
							v-model="form.sshUseChromeApp"
							:class="inputClass"
							:disabled="!secureShellInstalled"
						>
							<option :value="true">
								Yes
							</option>
							<option :value="false">
								No
							</option>
						</select>
						<div class="flex items-center justify-between pl-1 pt-1 text-sm text-gray-500">
							<div>
								<span>Launch SSH connections directly in your browser.</span>
								<a
									:href="SECURE_SHELL_DOWNLOAD_URL"
									class="ml-1 primary-text"
									target="_blank"
									rel="noopener"
								>Requires the Secure Shell extension for Chrome.</a>
							</div>
							<a
								v-if="!secureShellInstalled"
								:href="SECURE_SHELL_DOWNLOAD_URL"
								:class="primaryButtonClass"
								target="_blank"
								rel="noopener"
							>Install Now</a>
						</div>
					</div>
					<div class="flex flex-col">
						<label
							:class="labelClass"
							for="settingsHistory"
						>Command history max entries</label>
						<input
							id="settingsHistory"
							v-model.number="form.commandHistoryMaxEntries"
							:class="inputClass"
							type="number"
							min="0"
							max="200"
						>
						<p
							v-if="submitted && errors.commandHistoryMaxEntries"
							:class="errorClass"
						>
							{{ errors.commandHistoryMaxEntries }}
						</p>
						<p
							v-else
							class="mt-1 pl-1 text-sm text-gray-500"
						>
							0 - 200
						</p>
					</div>
				</div>
			</div>
			<div :class="cardClass">
				<div class="px-4 py-4 sm:px-6">
					<h3 :class="cardTitleClass">
						RDP
					</h3>
				</div>
				<div class="space-y-4 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
					<div class="flex flex-col">
						<label
							:class="labelClass"
							for="settingsRdpConnect"
						>Open non-browser-based RDP connections with</label>
						<select
							id="settingsRdpConnect"
							v-model="form.rdpConnectType"
							:class="inputClass"
						>
							<option
								v-for="option in RDP_CONNECT_TYPES"
								:key="option.value"
								:value="option.value"
							>
								{{ option.text }}
							</option>
						</select>
					</div>
					<div
						v-if="form.rdpConnectType === 'microsoft_remote_desktop'"
						class="grid grid-cols-2 gap-4"
					>
						<div class="flex flex-col">
							<label
								:class="labelClass"
								for="settingsRdpWidth"
							>Preferred window width for RDP connections</label>
							<select
								id="settingsRdpWidth"
								v-model.number="form.rdpWindowResolution.width"
								:class="inputClass"
							>
								<option
									v-for="width in RDP_WINDOW_WIDTHS"
									:key="width"
									:value="width"
								>
									{{ width }}
								</option>
							</select>
						</div>
						<div class="flex flex-col">
							<label
								:class="labelClass"
								for="settingsRdpHeight"
							>Preferred window height for RDP connections</label>
							<select
								id="settingsRdpHeight"
								v-model.number="form.rdpWindowResolution.height"
								:class="inputClass"
							>
								<option
									v-for="height in RDP_WINDOW_HEIGHTS"
									:key="height"
									:value="height"
								>
									{{ height }}
								</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col">
						<label
							:class="labelClass"
							for="settingsRdpUser"
						>Default RDP username</label>
						<input
							id="settingsRdpUser"
							v-model="form.defaultRdpUsername"
							:class="inputClass"
							type="text"
							autocomplete="off"
						>
					</div>
					<div class="flex flex-col">
						<label
							:class="labelClass"
							for="settingsRdpKeyboard"
						>Local keyboard layout for browser-based RDP</label>
						<select
							id="settingsRdpKeyboard"
							v-model="form.rdpLocalKeyboardLayout"
							:class="inputClass"
						>
							<option
								v-for="layout in RDP_KEYBOARD_LAYOUTS"
								:key="layout.value"
								:value="layout.value"
							>
								{{ layout.text }}
							</option>
						</select>
					</div>
					<button
						:class="primaryButtonClass"
						type="button"
						@click="templateOpen = true"
					>
						Edit the RDP File Template
					</button>
				</div>
			</div>
			<div class="flex justify-end">
				<button
					:class="primaryButtonClass"
					type="submit"
				>
					Save settings
				</button>
			</div>
		</div>
		<RdpFileTemplateDialog v-model="templateOpen" />
	</form>
</template>

<script setup lang="ts">
import RdpFileTemplateDialog from '~/components/settings/RdpFileTemplateDialog.vue';
import {
	RDP_CONNECT_TYPES,
	RDP_KEYBOARD_LAYOUTS,
	RDP_WINDOW_HEIGHTS,
	RDP_WINDOW_WIDTHS,
	SECURE_SHELL_DOWNLOAD_URL,
	SECURE_SHELL_EXTENSION_ID,
	THEMES,
} from '~/constants/settings';

const cardClass = 'flex flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900';
const cardTitleClass = 'text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50';
const labelClass = 'pb-1 pl-1 text-sm font-normal text-theme-label';
const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 dark:text-gray-100 dark:[&>option]:bg-gray-900 disabled:opacity-50 sm:text-sm';
const errorClass = 'mt-1 pl-1 text-sm text-red-600';
const primaryButtonClass = 'inline-flex w-fit items-center rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-800';

const settingsStore = useSettingsStore();
const snackbar = useSnackbar();
const form = reactive(structuredClone(toRaw(settingsStore.settings)));
const submitted = ref(false);
const templateOpen = ref(false);
const secureShellInstalled = ref(false);
const isChrome = /Chrome/.test(navigator.userAgent) && !/Edg|OPR/.test(navigator.userAgent);

const errors = computed(() => {
	const found: Record<string, string> = {};
	const entries = Number(form.commandHistoryMaxEntries);
	if (String(form.commandHistoryMaxEntries) === '' || Number.isNaN(entries) || entries < 0 || entries > 200) {
		found.commandHistoryMaxEntries = 'Please enter a value between 0 and 200';
	}
	return found;
});

// The preset widths and heights go together, so picking one picks the other
watch(() => form.rdpWindowResolution.width, (width) => {
	const index = RDP_WINDOW_WIDTHS.indexOf(width);
	if (!form.rdpCustomWindowSize && index >= 0) {
		form.rdpWindowResolution.height = RDP_WINDOW_HEIGHTS[index];
	}
});
watch(() => form.rdpWindowResolution.height, (height) => {
	const index = RDP_WINDOW_HEIGHTS.indexOf(height);
	if (!form.rdpCustomWindowSize && index >= 0) {
		form.rdpWindowResolution.width = RDP_WINDOW_WIDTHS[index];
	}
});

const save = () => {
	submitted.value = true;
	if (Object.keys(errors.value).length) {
		snackbar.add({ type: 'error', text: 'Please check all fields for errors' });
		return;
	}
	settingsStore.save(form);
	snackbar.add({ type: 'success', text: 'Settings saved successfully' });
};

// Like the reference, the extension counts as installed when its page can be fetched
onMounted(async () => {
	if (!isChrome) {
		return;
	}
	try {
		await fetch(`chrome-extension://${SECURE_SHELL_EXTENSION_ID}/html/nassh.html`);
		secureShellInstalled.value = true;
	}
	catch {
		secureShellInstalled.value = false;
	}
});
</script>
