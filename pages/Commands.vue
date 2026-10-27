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
						<div class="primary col-span-2">
							<div class="max-h-[550px] min-h-[550px] overflow-y-auto px-6 py-4">
								<div class="flex flex-col">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											id="commandName"
											v-model="commandName"
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
								<ExecutionTags v-model="commandTags" />
								<div class="flex flex-col mt-1">
									<div class="relative mt-1 flex w-full flex-col">
										<input
											id="commandTimeout"
											v-model.number="timeoutSec"
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
							</div>
							<div class="flex h-[55px] items-center justify-center border-t border-[#133B66]">
								<div class="grid grid-cols-3 rounded-l-md">
									<button
										class="cursor-not-allowed hover:opacity-100 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none col-span-3 secondary"
										disabled
										type="button"
									>
										Save
									</button>
								</div>
								<button
									class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none ml-2 bg-white bg-opacity-10"
									type="button"
								>
									Load
								</button>
							</div>
						</div>
						<div class="col-span-5">
							<div
								class="command-editor max-h-[550px] min-h-[550px] overflow-auto bg-[#224A75] text-xs text-gray-200"
								@keydown.meta.enter.prevent="execute"
								@keydown.ctrl.enter.prevent="execute"
							>
								<command-editor v-model="command" />
							</div>
							<ExecutionToolbar
								v-model:abort-on-error="abortOnError"
								v-model:execute-concurrently="executeConcurrently"
								:disabled="isExecutingDisabled"
								:loading="loading"
								@execute="execute"
							/>
						</div>
					</div>
					<div
						v-if="executeError"
						class="mt-4 rounded bg-red-50 p-2.5 text-sm font-medium text-red-800"
					>
						{{ executeError }}
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
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import ExecutionTags from '~/components/custom/ExecutionTags.vue';
import ExecutionToolbar from '~/components/ExecutionToolbar.vue';
import { useJobExecution } from '~/composables/useJobExecution';
import { useClientSelectionTargets } from '~/composables/useClientSelectionTargets';

useHead({ title: 'Commands' });

const commandName = ref('');
const commandTags = ref<string[]>([]);
const command = ref('');
const timeoutSec = ref(300);
const abortOnError = ref(true);
const executeConcurrently = ref(false);

const { jobs, loading, executeError, executeMultipleClients, clearJobs } = useJobExecution('commands');
const { hasSelection, targets, selectorListeners } = useClientSelectionTargets(clearJobs);

const isExecutingDisabled = computed(() => !hasSelection.value || !command.value.trim());

const execute = async () => {
	if (isExecutingDisabled.value || loading.value || !targets.value) {
		return;
	}
	await executeMultipleClients({
		command: command.value,
		...targets.value,
		execute_concurrently: executeConcurrently.value,
		abort_on_error: abortOnError.value,
		timeout_sec: timeoutSec.value || 300,
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
