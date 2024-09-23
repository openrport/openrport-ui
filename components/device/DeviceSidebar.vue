<template>
	<aside class="navbar navbar-vertical flex-column navbar-expand-lg navbar-extra-w">
		<div class="container-fluid">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#device-filter"
				aria-controls="device-filter"
				aria-expanded="false"
				aria-label="Toggle navigation"
				@click="toggleDeviceBarNav"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div
				id="device-filter"
				:class="['collapse']"
				class="navbar-collapse"
			>
				<DeviceFilter />
				<DeviceList :accordion-items="accordionItems" />
			</div>
		</div>
	</aside>
</template>

<script setup>
const {
	isDeviceBarOpen,
	isSettingsBarOpen,
	toggleDeviceBarNav,
	toggleSettingsBarNav,
} = useNavigationBars();

const props = defineProps({
	accordionItems: [
		{ title: 'All', content: 'Content for item 1' },
		{ title: 'Favorites', content: 'Content for item 2' },
	],
});
</script>
