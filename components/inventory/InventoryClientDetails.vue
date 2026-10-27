<template>
	<DeviceInventoryTab
		:device="client"
		:metrics="metrics"
	/>
</template>

<script setup lang="ts">
import DeviceInventoryTab from '~/components/device/DeviceInventoryTab.vue';
import type { Client, ClientMetric } from '~/types';

const props = defineProps<{
	client: Client;
}>();

const metrics = ref<ClientMetric[]>([]);

// Same cards as the client page, with its CPU / memory / IO usage
onMounted(async () => {
	const { $api } = useNuxtApp();
	try {
		metrics.value = (await $api.clients.metrics(props.client.id)).data;
	}
	catch {
		metrics.value = [];
	}
});
</script>
