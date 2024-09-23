<template>
	<div class="card mt-3">
		<div class="card-header">
			<h5 class="card-title">
				Groups
			</h5>
		</div>
		<div class="card-body">
			<div class="tags-list">
				<span
					v-for="group in groups"
					class="tag bg-azure-lt"
				>
					<IconServer :size="15" />
					{{ group }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { IconTag, IconServer } from '@tabler/icons-vue';

const props = defineProps({
	groups: {
		type: Array,
	},
});
</script>

<style></style>
