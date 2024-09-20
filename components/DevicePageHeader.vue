<template>
    <div class="page-header">
        <div class="d-flex flex-row justify-content-between mb-2">
            <div class="d-flex flex-row">
                <div class="p-2">
<!--                    <IconBrandDebian color="red"/>-->
                    <component :is="IconComponent"></component>
                </div>
                <div class="p-2">
                    <h2 class="page-title">{{ title?.toUpperCase() }}</h2>
                </div>
                <div class="p-2">
                    <span class="badge bg-lime text-blue-fg tag-status badge-empty mt-2"></span>
                </div>
                <slot name="description"></slot>
            </div>
            <div class="p-2">
                <slot name="action"></slot>
            </div>
        </div>
        <div class="d-flex flex-row">

        </div>
    </div>
</template>
<script setup>
import { IconBrandDebian } from '@tabler/icons-vue';

const props = defineProps({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    hasAction: {
        type: String
    },
    actionName: {
        type: String
    },
    is_online: {
        type: Boolean
    },
    brand: {
        type: String
    }
})
const IconComponent = ref(IconBrandDebian);

const icon = computed(() => {
    switch (this.brand) {
        case this.brand.includes("ubuntu"):
            IconComponent.value = IconBrandUbuntu;
            break;
        case this.brand.includes("darwin"):
            IconComponent.value = IconBrandAppleFilled;
            break;
        case this.brand.includes("debian"):
            IconComponent.value = IconBrandDebian;
            break;
        default:
            IconComponent.value = IconBrandUbuntu;
            break;
    }
})
</script>
