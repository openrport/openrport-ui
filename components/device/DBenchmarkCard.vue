<template>
	<div class="card mt-3">
		<div class="card-header">
			<h5 class="card-title">
				CPU, memory & diss
			</h5>
			<div class="card-actions">
				<a
					href="#"
					class="btn btn-primary"
				>
					<IconReload
						:size="20"
						class="me-2"
					/>
					Reload
				</a>
			</div>
		</div>

		<div class="card-body">
			<table class="table">
				<tr>
					<td class="border-0 p-0">
						CPU Model:
					</td>
					<td class="border-0 p-0">
						0xd
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0">
						CPU Model Name:
					</td>
					<td class="border-0 p-0">
						cortex
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0">
						Number of CPUs:
					</td>
					<td class="border-0 p-0">
						6
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0">
						CPU Usage (6.0%):
					</td>
					<td class="border-0 p-0">
						<div class="row">
							<div class="col m-0 p-0">
								<div class="progress">
									<div
										class="progress-bar"
										style="width: 38%"
										role="progressbar"
										aria-valuenow="38"
										aria-valuemin="0"
										aria-valuemax="100"
										aria-label="38% Complete"
									>
										<span class="visually-hidden">38% Complete</span>
									</div>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0">
						Total Memory:
					</td>
					<td class="border-0 p-0">
						600 MB
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0">
						Memory Usage (6.0%):
					</td>
					<td class="border-0 p-0">
						<div class="row">
							<div class="col m-0 p-0">
								<div class="progress">
									<div
										class="progress-bar"
										style="width: 38%"
										role="progressbar"
										aria-valuenow="38"
										aria-valuemin="0"
										aria-valuemax="100"
										aria-label="38% Complete"
									>
										<span class="visually-hidden">38% Complete</span>
									</div>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0">
						IO Usage (6.0%):
					</td>
					<td class="border-0 p-0">
						<div class="row">
							<div class="col m-0 p-0">
								<div class="progress">
									<div
										class="progress-bar"
										style="width: 38%"
										role="progressbar"
										aria-valuenow="38"
										aria-valuemin="0"
										aria-valuemax="100"
										aria-label="38% Complete"
									>
										<span class="visually-hidden">38% Complete</span>
									</div>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="border-0 p-0">
						Disk Usage / (6.0%):
					</td>
					<td class="border-0 p-0">
						<div class="row">
							<div class="col m-0 p-0">
								<div class="progress">
									<div
										class="progress-bar"
										style="width: 38%"
										role="progressbar"
										aria-valuenow="38"
										aria-valuemin="0"
										aria-valuemax="100"
										aria-label="38% Complete"
									>
										<span class="visually-hidden">38% Complete</span>
									</div>
								</div>
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import { IconReload } from '@tabler/icons-vue';

export default {
	components: {
		IconReload,
	},
};
</script>

<style lang="">

</style>
