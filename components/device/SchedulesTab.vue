<template>
	<div class="min-h-[600px] w-full px-1">
		<ScheduleList :client-id="id" />
	</div>
</template>

<script setup lang="ts">
import ScheduleList from '~/components/schedules/ScheduleList.vue';

defineProps<{
	id: string;
}>();
</script>
