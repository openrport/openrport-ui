<template>
	<div
		class="flex flex-col flex-1 overflow-hidden bg-white divide-y rounded-lg shadow divide-gray-50 dark:divide-gray-700 dark:bg-gray-900"
	>
		<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
			<div class="flex items-center content-center flex-1 max-h-16">
				<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
					Operating System
				</h3>
				<p class="max-w-2xl mt-1 text-sm leading-6 text-gray-500 dark:text-gray-500" />
			</div>
		</div>
		<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
			<div class="w-full h-full">
				<div>
					<table class="w-full">
						<tbody>
							<tr class="flex flex-col md:table-row">
								<td
									class="w-full p-1 font-medium tracking-tight whitespace-nowrap text-primary-800 md:w-fit md:min-w-min"
								>
									OS Full Name:
								</td>
								<td class="w-full p-1">
									{{ device?.os_full_name }}
								</td>
							</tr>
							<tr class="flex flex-col md:table-row">
								<td
									class="w-full p-1 font-medium tracking-tight whitespace-nowrap text-primary-800 md:w-fit md:min-w-min"
								>
									OS Family:
								</td>
								<td class="w-full p-1">
									{{ device?.os_family }}
								</td>
							</tr>
							<tr class="flex flex-col md:table-row">
								<td
									class="w-full p-1 font-medium tracking-tight whitespace-nowrap text-primary-800 md:w-fit md:min-w-min"
								>
									OS Version:
								</td>
								<td class="w-full p-1">
									{{ device?.os_version }}
								</td>
							</tr>
							<tr class="flex flex-col md:table-row">
								<td
									class="w-full p-1 font-medium tracking-tight whitespace-nowrap text-primary-800 md:w-fit md:min-w-min"
								>
									OS Virtualization System:
								</td>
								<td class="w-full p-1">
									{{ device?.os_virtualization_system }}
								</td>
							</tr>
							<tr class="flex flex-col md:table-row">
								<td
									class="w-full p-1 font-medium tracking-tight whitespace-nowrap text-primary-800 md:w-fit md:min-w-min"
								>
									OS Virtualization Role:
								</td>
								<td class="w-full p-1">
									{{ device?.os_virtualization_role }}
								</td>
							</tr>
							<tr class="flex flex-col md:table-row">
								<td
									class="w-full p-1 font-medium tracking-tight whitespace-nowrap text-primary-800 md:w-fit md:min-w-min"
								>
									Timezone:
								</td>
								<td class="w-full p-1">
									{{ device?.timezone }}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	device: {
		type: Object,
		required: true,
	},
});
</script>
