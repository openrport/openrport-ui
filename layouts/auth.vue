<template>
	<div
		class="absolute bottom-4 left-4 right-4 top-4 flex justify-between overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-400"
	>
		<div class="flex h-full w-2/5 items-center justify-center px-8">
			<slot />
		</div>
		<div class="bg-primary-800 flex h-full w-3/5 flex-col items-stretch justify-between py-6">
			<div class="flex items-center justify-end px-6">
				<img
					src="https://qoqbcjgo.users.openrport.io/_nuxt/rport.30b0ff6d.svg"
					width="100"
					height="100"
				>
			</div>
			<div class="relative w-full">
				<div class="flex w-full items-end justify-end">
					<img
						src="https://qoqbcjgo.users.openrport.io/_nuxt/login.06da0762.svg"
						alt=""
						class="relative w-full trangray-x-28 transform pr-1"
						height="100"
						width="100"
					>
				</div>
				<div class="absolute bottom-0 left-6 flex w-full gap-4 text-xxs font-normal text-white opacity-80">
					<p>© RealVNC Ltd.</p>
					<p>All rights reserved</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import {getProvider} from "~/composables/useAuth";
//
// getProvider();
const provider = useState('provider');

await callOnce(async () => {

});
</script>
