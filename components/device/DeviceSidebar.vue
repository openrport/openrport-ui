<template>
    <aside class="navbar navbar-vertical flex-column navbar-expand-lg navbar-extra-w" >
        <div class="container-fluid">
            <button @click="toggleDeviceBarNav" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#device-filter"
                    aria-controls="device-filter" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="['collapse']" class="navbar-collapse" id="device-filter">
                <DeviceFilter />
                <DeviceList  :accordionItems="accordionItems"/>
            </div>
        </div>
    </aside>
</template>

<script setup>
const {
    isDeviceBarOpen,
    isSettingsBarOpen,
    toggleDeviceBarNav,
    toggleSettingsBarNav
} = useNavigationBars();

const props = defineProps({
    accordionItems: [
        { title: "All", content: "Content for item 1" },
        { title: "Favorites", content: "Content for item 2" },
    ]
})
</script>
