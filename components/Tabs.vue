<template>
    <div class="row">
        <div class="col">
            <ul class="nav nav-underline d-flex flex-nowrap" data-bs-toggle="tabs">
                <li v-for="(tab, index) in tabs" :key="index" @click="activateTab(index)" class="nav-item flex-fill">
                    <a class="nav-link align-items-center justify-content-center py-3" :class="{ 'active': activeTabIndex === index }" data-bs-toggle="tab">
                        <component :is="tab.icon" class="me-1"/>
                        {{ tab.title }}
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="tab-content">
        <slot :activeTabIndex="activeTabIndex"></slot>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        defaultTabIndex: {
            type: Number,
            default: 0
        },
        tabs: {
            type: Array,
            required: true
        },
    });
    const activeTabIndex = ref(props.defaultTabIndex);

    const activateTab = (index) => {
        activeTabIndex.value = index;
    };

</script>
<style>
.nav-underline .nav-link {
    cursor: pointer;
    font-weight: 600;
}
</style>
