<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div class="h-full flex-1">
				<div class="relative z-20 flex h-16 items-center justify-between">
					<div class="">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							Scripts
						</h3>
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
							Execute script on multiple clients
						</p>
					</div>
					<div class="flex-1" />
					<div class="ml-2 flex-shrink-0">
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
							&nbsp;
						</p>
					</div>
				</div>
				<div class="mt-5 flex h-full flex-col pb-24">
					<div class="primary relative grid grid-cols-7">
						<div
							v-if="libraryLoading"
							class="absolute inset-0 z-30 flex items-center justify-center bg-theme bg-opacity-70"
						>
							<IconLoader2
								:size="36"
								class="primary-text animate-spin"
							/>
						</div>
						<div class="bg-primary-800 col-span-2">
							<div class="max-h-[550px] min-h-[550px] overflow-y-auto px-6 py-4">
								<div class="flex flex-col">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											id="scriptName"
											v-model="form.name"
											:class="inputClass"
											placeholder=" "
											type="text"
											autocomplete="off"
										>
										<label
											class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
											for="scriptName"
										>Script name</label>
									</div>
								</div>
								<ExecutionTags v-model="form.tags" />
								<div class="flex flex-col mt-1">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											id="scriptCwd"
											v-model="form.cwd"
											:class="inputClass"
											placeholder=" "
											type="text"
											autocomplete="off"
										>
										<label
											class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
											for="scriptCwd"
										>Working Directory</label>
									</div>
								</div>
								<div class="mt-1 text-white">
									<div class="relative mt-1 flex w-full flex-col">
										<select
											id="scriptInterpreter"
											v-model="form.interpreter"
											class="border-white focus:border-white focus:border-1 peer order-2 block h-10 w-full rounded border-theme-border bg-transparent shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
										>
											<option
												v-for="option in interpreters"
												:key="option.value"
												:value="option.value"
												class="text-black"
											>
												{{ option.label }}
											</option>
										</select>
										<label
											class="order-1 flex pb-1 pl-1 text-white peer-focus:text-white order-1 text-sm font-medium"
											for="scriptInterpreter"
										>Interpreter</label>
									</div>
								</div>
								<div class="flex flex-col mt-1">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											id="scriptTimeout"
											v-model.number="form.timeout_sec"
											:class="inputClass"
											placeholder="300"
											type="number"
											min="1"
											autocomplete="off"
										>
										<label
											class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
											for="scriptTimeout"
										>Time out (seconds)</label>
									</div>
								</div>
								<div class="mt-4 flex justify-center">
									<label class="relative inline-flex cursor-pointer items-center text-theme-label">
										<input
											v-model="form.is_sudo"
											type="checkbox"
											class="peer sr-only"
										>
										<div
											class="after:border-secondary after:bg-secondary peer-checked:bg-secondary peer-checked:bg-opacity-30 peer-checked:after:border-secondary bg-gray-200 bg-opacity-30 peer h-6 w-11 rounded-full after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:ring-0"
										/>
										<span class="ml-2 text-sm text-gray-300"> Use sudo
											<span class="text-xs">(Unix only)</span>
										</span>
									</label>
								</div>
								<LibraryMeta
									v-if="loaded"
									:created-by="form.created_by"
									:created-at="form.created_at"
									:updated-by="form.updated_by"
									:updated-at="form.updated_at"
								/>
							</div>
							<LibraryActions
								kind="scripts"
								:loaded="loaded"
								:can-save="canSave"
								@save="save"
								@save-as-new="saveAsNew"
								@remove="remove"
								@open="openEntry"
							/>
						</div>
						<div class="col-span-5">
							<div
								class="command-editor max-h-[550px] min-h-[550px] overflow-auto bg-[#224A75] text-xs text-gray-200"
								@keydown.meta.enter.prevent="execute"
								@keydown.ctrl.enter.prevent="execute"
							>
								<command-editor v-model="form.content" />
							</div>
							<ExecutionToolbar
								v-model:abort-on-error="abortOnError"
								v-model:execute-concurrently="executeConcurrently"
								:disabled="isExecutingDisabled"
								:loading="loading"
								@execute="execute"
								@schedule="scheduleOpen = true"
							/>
						</div>
					</div>
					<div
						v-if="loadError || executeError"
						class="mt-4 rounded bg-red-50 p-2.5 text-sm font-medium text-red-800"
					>
						{{ loadError || executeError }}
					</div>
					<ClientSelector
						title="scripts"
						class="my-12"
						v-bind="selectorListeners"
					/>
					<ExecutedResults
						v-if="Object.keys(jobs).length > 0"
						:jobs="jobs"
						class="mt-5"
					/>
					<ScheduleDialog
						v-model="scheduleOpen"
						:execution="scheduleExecution"
					/>
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconLoader2 } from '@tabler/icons-vue';
import ExecutionTags from '~/components/custom/ExecutionTags.vue';
import ExecutionToolbar from '~/components/ExecutionToolbar.vue';
import LibraryActions from '~/components/library/LibraryActions.vue';
import LibraryMeta from '~/components/library/LibraryMeta.vue';
import ScheduleDialog from '~/components/library/ScheduleDialog.vue';
import { encodeScript, useJobExecution } from '~/composables/useJobExecution';
import { useClientSelectionTargets } from '~/composables/useClientSelectionTargets';
import { useLibraryEditor } from '~/composables/useLibraryEditor';
import type { SchedulePayload } from '~/types';

useHead({ title: 'Scripts' });

const inputClass = 'border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';

const interpreters = [
	{ value: 'cmd', label: 'cmd (Windows only)' },
	{ value: 'powershell', label: 'PowerShell (Windows only)' },
	{ value: 'systemDefaultShell', label: 'System default shell' },
	{ value: 'tacoscript', label: 'Tacoscript (Experimental)' },
];

const abortOnError = ref(true);
const executeConcurrently = ref(false);
const scheduleOpen = ref(false);

const {
	form,
	loaded,
	loading: libraryLoading,
	loadError,
	canSave,
	save,
	saveAsNew,
	remove,
	openEntry,
} = useLibraryEditor('scripts', 'systemDefaultShell');
const { jobs, loading, executeError, executeMultipleClients, clearJobs } = useJobExecution('scripts');
const { hasSelection, targets, scheduleTargets, selectorListeners } = useClientSelectionTargets(clearJobs);

const isExecutingDisabled = computed(() => !hasSelection.value || !form.content.trim());

// Same interpreter normalisation as the websocket execution
const scheduleExecution = computed<Omit<SchedulePayload, 'name' | 'schedule' | 'overlaps'>>(() => ({
	type: 'script',
	script: encodeScript(form.content),
	interpreter: form.interpreter.replace(/(\.exe|shOrShebang|systemDefaultShell)/g, ''),
	cwd: form.cwd,
	is_sudo: form.is_sudo,
	timeout_sec: Number(form.timeout_sec) || 300,
	execute_concurrently: executeConcurrently.value,
	abort_on_error: abortOnError.value,
	...scheduleTargets.value,
}));

const execute = async () => {
	if (isExecutingDisabled.value || loading.value || !targets.value) {
		return;
	}
	await executeMultipleClients({
		script: form.content,
		interpreter: form.interpreter,
		is_sudo: form.is_sudo,
		cwd: form.cwd,
		...targets.value,
		execute_concurrently: executeConcurrently.value,
		abort_on_error: abortOnError.value,
		timeout_sec: Number(form.timeout_sec) || 300,
	});
};
</script>

<style>
.command-editor .prism-editor__container {
  min-height: 520px!important;
  overflow: visible
}
</style>
