<template>
	<div>
		<div class="flex flex-col">
			<label
				class="pb-1 pl-1 text-sm text-theme-label"
				for="scheduleName"
			>Schedule name</label>
			<input
				id="scheduleName"
				v-model="form.scheduleName"
				:class="inputClass"
				type="text"
				autocomplete="off"
			>
			<p
				v-if="errors.scheduleName"
				class="mt-1 pl-1 text-xs text-red-600"
			>
				{{ errors.scheduleName }}
			</p>
		</div>
		<slot name="after-name" />
		<p class="mt-4 text-sm font-medium">
			Executed at:
		</p>
		<div class="mt-2 flex flex-wrap items-center justify-between gap-6">
			<div class="flex flex-col space-y-2">
				<div
					v-for="field in cronFields"
					:key="field.key"
					class="flex flex-col"
				>
					<div class="flex items-center">
						<div class="w-[184px] shrink-0">
							<input
								v-model="form[field.key]"
								:class="inputClass"
								:placeholder="field.label"
								:aria-label="field.label"
								type="text"
								autocomplete="off"
							>
						</div>
						<span class="ml-2 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{{ field.hint }}</span>
					</div>
					<p
						v-if="errors[field.key]"
						class="mt-1 pl-1 text-xs text-red-600"
					>
						{{ errors[field.key] }}
					</p>
				</div>
			</div>
			<div class="flex max-w-2xl flex-1 items-start rounded border-r-4 border-primary bg-white p-4 shadow-md dark:bg-slate-900">
				<IconInfoCircle
					:size="22"
					class="primary-text mr-4 shrink-0"
				/>
				<div class="text-sm">
					<p class="font-semibold">
						Cron syntax expected:
					</p>
					<p class="mt-2">
						multiple values seperated by a comma allowed, e.g. minutes = 0,15,30,45 to execute every 15 minutes.
					</p>
					<p>ranges seperated by a dash allowed, e.g. hours = 2-5 to execute only from 2 to 5 am.</p>
					<p>steps seperated by a slash allowed, e.g. minutes = */5 to execute every five minutes.</p>
				</div>
			</div>
		</div>
		<div class="mt-6 border-t border-gray-200 pt-4">
			<label class="flex cursor-pointer select-none items-center text-sm text-theme-label">
				<input
					v-model="form.overlaps"
					type="checkbox"
					class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
				>
				Allow overlaps, by default execution is skipped, if previous job is still running
			</label>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconInfoCircle } from '@tabler/icons-vue';
import { cronFields, type ScheduleTimingForm, type ScheduleTimingKey } from '~/composables/useScheduleTimingForm';

defineProps<{
	errors: Partial<Record<ScheduleTimingKey, string>>;
}>();

const form = defineModel<ScheduleTimingForm>({ required: true });

const inputClass = 'primary input-text block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm';
</script>
