<template>
    <no-clients v-if="nbclient === 0" />
    <no-client-selected v-else />
</template>
<script setup lang="ts">

const statusStore = useStatusStore();
const nbclient = ref(0);
onBeforeMount(async () => {
    await statusStore.fetchNbClients()
    nbclient.value = statusStore.nbClient
})
</script>
