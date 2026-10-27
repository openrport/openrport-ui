<template>
	<new-page-wrapper>
		<div class="mx-auto h-screen max-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
			<div>
				<div class="relative z-20 flex h-16 items-center justify-between">
					<h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
						Schedules
					</h3>
					<button
						class="bg-primary hover:bg-primary-800 text-white cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300"
						type="button"
						@click="refresh"
					>
						<span class="flex items-center justify-center gap-x-2">
							<IconRefresh
								:size="16"
								:class="{ 'animate-spin': pending }"
							/>
							<span>Refresh</span>
						</span>
					</button>
				</div>
				<div class="relative z-10 w-full">
					<ScheduleList ref="list" />
					<div class="h-12 w-full" />
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import { IconRefresh } from '@tabler/icons-vue';
import ScheduleList from '~/components/schedules/ScheduleList.vue';

useHead({ title: 'Schedules' });

const list = ref<InstanceType<typeof ScheduleList> | null>(null);
const pending = computed(() => list.value?.pending ?? true);
const refresh = () => list.value?.refresh();
</script>
