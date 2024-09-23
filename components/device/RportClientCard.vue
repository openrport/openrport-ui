<template>
	<div class="card mt-3">
		<div class="card-header">
			<h5 class="card-title">
				RPort Client
			</h5>
			-- <a
				href="#"
				class="btn btn-primary me-0"
			>Button</a> --
		</div>
		<div class="card-body table-responsive">
			<div class="row">
				<table class="table">
					<tbody>
						<tr>
							<td class="border-0 p-0 text-primary">
								<strong>ID:</strong>
							</td>
							<td class="border-0 p-0">
								{{ device?.id }}
							</td>
						</tr>
						<tr>
							<td class="border-0 p-0 text-primary">
								<strong>Hostname:</strong>
							</td>
							<td class="border-0 p-0">
								{{ device?.hostname }}
							</td>
						</tr>
						<tr>
							<td class="border-0 p-0 text-primary">
								<strong>Version:</strong>
							</td>
							<td class="border-0 p-0">
								{{ device?.version }}
							</td>
						</tr>
						<tr>
							<td class="border-0 p-0 text-primary">
								<strong>Auth ID:</strong>
							</td>
							<td class="border-0 p-0 ">
								{{ device?.client_auth_id }}
							</td>
						</tr>
						<tr v-if="device?.last_heartbeat_at">
							<td class="border-0 p-0 text-primary">
								<strong>Last hearthbeat:</strong>
							</td>
							<td class="border-0 p-0">
								{{ formatedDate(device?.last_heartbeat_at) }}
							</td>
						</tr>
						<tr v-else>
							<td class="border-0 p-0 text-primary">
								<strong>Disconnected since:</strong>
							</td>
							<td class="border-0 p-0">
								{{ formatedDate(device?.disconnected_at) }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	device: Object,
	required: true,
});

const formatedDate = (dateString) => {
	const date = new Date(dateString);
	return `${date.getUTCDate().toString().padStart(2, '0')}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCFullYear().toString().substr(-2)} ${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}:${date.getUTCSeconds().toString().padStart(2, '0')} UTC`;
};
</script>

<style lang="">

</style>
