<template>
	<div class="card mt-3">
		<div class="card-header">
			<h5 class="card-title">
				Operating System
			</h5>
		</div>
		<div class="card-body">
			<table class="table">
				<tr>
					<td class="border-0 p-0 text-primary">
						<strong>OS Full Name:</strong>
					</td>
					<td class="border-0 p-0">
						{{ device?.os_full_name }}
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0 text-primary">
						<strong>OS Family:</strong>
					</td>
					<td class="border-0 p-0">
						{{ device?.os_family }}
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0 text-primary">
						<strong>OS Version:</strong>
					</td>
					<td class="border-0 p-0">
						{{ device?.os_version }}
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0 text-primary">
						<strong>OS Virtualization System:</strong>
					</td>
					<td class="border-0 p-0">
						{{ device?.os_virtualization_system }}
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0 text-primary">
						<strong>OS Virtualization Role:</strong>
					</td>
					<td class="border-0 p-0">
						{{ device?.os_virtualization_role }}
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0 text-primary">
						<strong>Timezone:</strong>
					</td>
					<td class="border-0 p-0">
						{{ device?.timezone }}
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Client } from '~/types';

const props = defineProps({
	device: {
		type: Object,
	},
});
</script>

<style lang="">

</style>
