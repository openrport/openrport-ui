<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div class="h-full flex-1">
				<div class="relative z-20 flex h-16 items-center justify-between">
					<div class="">
						<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
							Commands
						</h3>
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
							Execute command on multiple clients
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
						<div class="primary col-span-2">
							<div class="max-h-[550px] min-h-[550px] overflow-y-auto px-6 py-4">
								<div class="flex flex-col">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											id="commandName"
											v-model="form.name"
											class="border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
											placeholder=" "
											type="text"
											autocomplete="off"
										>
										<label
											class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
											for="commandName"
										>Command name</label>
									</div>
								</div>
								<ExecutionTags v-model="form.tags" />
								<div class="flex flex-col mt-1">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											id="commandTimeout"
											v-model.number="form.timeout_sec"
											class="border-white text-white focus:border-white input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
											placeholder="300"
											type="number"
											min="1"
											autocomplete="off"
										>
										<label
											class="order-1 flex pb-1 pl-1 text-white text-sm font-normal"
											for="commandTimeout"
										>Time out (seconds)</label>
									</div>
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
								kind="commands"
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
						title="commands"
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
import { useJobExecution } from '~/composables/useJobExecution';
import { useClientSelectionTargets } from '~/composables/useClientSelectionTargets';
import { useLibraryEditor } from '~/composables/useLibraryEditor';
import type { SchedulePayload } from '~/types';

useHead({ title: 'Commands' });

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
} = useLibraryEditor('commands');
const { jobs, loading, executeError, executeMultipleClients, clearJobs } = useJobExecution('commands');
const { hasSelection, targets, scheduleTargets, selectorListeners } = useClientSelectionTargets(clearJobs);

const isExecutingDisabled = computed(() => !hasSelection.value || !form.content.trim());

const scheduleExecution = computed<Omit<SchedulePayload, 'name' | 'schedule' | 'overlaps'>>(() => ({
	type: 'command',
	command: form.content,
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
		command: form.content,
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

.command-editor .prism-editor-wrapper {
  overflow: visible
}

.command-editor .prism-editor-wrapper .prism-editor__editor,.command-editor .prism-editor-wrapper .prism-editor__textarea {
  white-space: pre
}

.command-editor .prism-editor-wrapper .prism-editor__textarea:focus {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
}

.command-editor .prism-editor__line-number {
  --tw-text-opacity: 1!important;
  color: #9ca3af!important;
  color: rgb(156 163 175/var(--tw-text-opacity))!important;
  font-size: .75rem!important;
  line-height: 1rem!important
}
</style>
