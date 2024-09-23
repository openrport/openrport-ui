<template>
	<div
		class="flex flex-col flex-1 overflow-hidden bg-white divide-y rounded-lg shadow divide-gray-50 dark:divide-gray-700 dark:bg-gray-900"
	>
		<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
			<div class="flex items-center content-center flex-1 max-h-16">
				<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
					IP Addresses
				</h3>
				<p class="max-w-2xl mt-1 text-sm leading-6 text-gray-500 dark:text-gray-500" />
			</div>
		</div>
		<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
			<div class="w-full h-full">
				<div class="flex flex-wrap gap-0.5 lg:gap-1">
					<div class="flex w-full p-1 leading-tight">
						<div class="p-1 font-medium text-primary-800">
							ipv4
						</div>
						<div class="overflow-hidden p-1">
							<span
								v-for="(ip, index) in ipv4"
								class="pl-1 first:pl-0"
								:class="{ hidden: !ipv4View && index >0 }"
							>
								<div class="inline-flex cursor-pointer w-max">
									<span>{{ index > 0 ? ' , ':'' }}{{ ip }}</span>
								</div>
							</span>
							<span
								class="cursor-pointer px-1 py-0.5"
								@click="toggleIpv4"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16px"
									height="16px"
									viewBox="0 0 24 24"
									class="icon"
								>
									<path
										fill="currentColor"
										d="M6 14q-.825 0-1.413-.588T4 12q0-.825.588-1.413T6 10q.825 0 1.413.588T8 12q0 .825-.588 1.413T6 14Zm6 0q-.825 0-1.413-.588T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .825-.588 1.413T12 14Zm6 0q-.825 0-1.413-.588T16 12q0-.825.588-1.413T18 10q.825 0 1.413.588T20 12q0 .825-.588 1.413T18 14Z"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div class="flex w-full p-1 leading-tight">
						<div class="p-1 font-medium text-primary-800">
							ipv6
						</div>
						<div class="p-1 overflow-hidden">
							<span
								v-for="(ip, index) in ipv6"
								class="pl-1 first:pl-0"
								:class="{ hidden: !ipv6View && index >0 }"
							>{{ index > 0 ? ' , ':'' }}{{ ip }}</span>
							<span
								class="cursor-pointer px-1 py-0.5"
								@click="toggleIpv6"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16px"
									height="16px"
									viewBox="0 0 24 24"
									class="icon"
								>
									<path
										fill="currentColor"
										d="M6 14q-.825 0-1.413-.588T4 12q0-.825.588-1.413T6 10q.825 0 1.413.588T8 12q0 .825-.588 1.413T6 14Zm6 0q-.825 0-1.413-.588T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .825-.588 1.413T12 14Zm6 0q-.825 0-1.413-.588T16 12q0-.825.588-1.413T18 10q.825 0 1.413.588T20 12q0 .825-.588 1.413T18 14Z"
									/>
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const ipv4View = ref(false);
const ipv6View = ref(false);

const props = defineProps({
	ipv4: {
		type: Array,
		default: [],
	},
	ipv6: {
		type: Array,
		default: [],
	},

});

const toggleIpv4 = () => {
	ipv4View.value = !ipv4View.value;
};
const toggleIpv6 = () => {
	ipv6View.value = !ipv6View.value;
};
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
