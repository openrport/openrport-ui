<template>
	<div>
		<slot v-if="isActive" />
	</div>
</template>

<script setup>
const props = defineProps({
	isActive: {
		type: Boolean,
		required: true,
	},
});
</script>
