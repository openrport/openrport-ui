<template>
    <div>
        <slot v-if="isActive"></slot>
    </div>
</template>
<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        required: true
    }
})
</script>
