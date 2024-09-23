<template>
	<div class="page-header">
		<div class="row align-items-center mb-2">
			<div class="col">
				<h2 class="page-title">
					{{ title }}
				</h2>
				<div class="text-secondary mt-1">
					{{ description }}
				</div>
			</div>
			<div
				v-if="hasAction"
				class="col-auto ms-auto d-print-none"
			>
				<div class="d-flex">
					<a
						href="#"
						class="btn btn-primary rounded"
						@click.prevent="action"
					>
						{{ actionName }}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits(['action']);
const props = defineProps({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	hasAction: {
		type: String,
	},
	actionName: {
		type: String,
	},
});

const action = async () => {
	emit('action', true);
};
</script>
