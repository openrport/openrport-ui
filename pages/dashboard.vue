<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-devices-sidebar :accordion-items="accordionItems" />
			<NuxtPage />
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
const clientStore = useClientStore();
const accordionItems = ref([
	{ title: 'All', content: 'Content for item 1' },
	{ title: 'Favorites', content: 'Content for item 2' },
]);

onBeforeMount(async () => {
	await clientStore.loadGroups();
	updateGroupsItems();
});
const updateGroupsItems = () => {
	accordionItems.value = [];
	accordionItems.value.push({ title: 'All', content: 'Content for item 1', id: 'all' });
	accordionItems.value.push({ title: 'Favorites', content: 'Content for item 2', id: 'favorites' });

	clientStore.groups.forEach((group) => {
		accordionItems.value.push({ title: group.id, id: group.id, content: `${group.description} - (${group.num_clients})` });
	});
};
</script>
