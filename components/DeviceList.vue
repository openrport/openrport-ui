<template>

    <Accordion :items="accordionItems">
        <template v-slot:title="{ item }">
            {{ item.title }}
        </template>
        <template v-slot:content="{ item }">
            {{ item.content }}
        </template>
    </Accordion>
</template>
<script setup>
import {
    IconFolder,
    IconBrandDebian
} from '@tabler/icons-vue';
import Accordion from './Accordion.vue';

const props = defineProps({
    accordionItems: Array,
    default: [
        { title: "All", content: "Content for item 1" },
        { title: "Favorites", content: "Content for item 2" },
    ]
});
</script>
<style>
.hover:hover {
    background-color: rgb(226 232 240);
}

.router-link-active,
.router-link-exact-active {
    background-color: #0369a1;
    color: #fff;
}

.router-link-active:hover {
    color: #fff
}
</style>
