<template>
	<div class="class relative max-h-[1720px] min-h-[480px] flex-1">
		<div class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-theme-dark/80">
			<span class="text-primary"> Execute commands on many clients concurrently. The client list
				will be defined by: </span>
			<div class="flex w-1/4 flex-col items-center justify-center space-y-2">
				<button
					class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
					type="button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 256 256"
						class="icon"
					>
						<path
							fill="currentColor"
							d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z"
						/>
					</svg><span>Individual Clients</span>
				</button><button
					class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
					type="button"
				>
					<svg
						data-v-ca945699=""
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 2048 2048"
						class="icon"
					>
						<path
							fill="currentColor"
							d="M1664 1536h-128v-128h128v128zm-256 0h-128v-128h128v128zm256-512h-128V896h128v128zm-256 0h-128V896h128v128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15h1408zm64 1152H256v384h1536v-384zm0-512H256v384h1536V768zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320h1536zm-256-256h128v128h-128V384zm-256 0h128v128h-128V384z"
						/>
					</svg><span>Client Groups</span>
				</button><button
					class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
					type="button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						class="icon"
					>
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
						/>
					</svg><span>Clients Matching</span>
				</button>
				<button
					class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none flex w-full items-start justify-start space-x-2 bg-primary"
					type="button"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						class="icon"
					>
						<g
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
						>
							<path
								d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"
							/>
							<path d="M6 6h.008v.008H6V6Z" />
						</g>
					</svg><span>Clients by tags</span>
				</button>
			</div>
		</div>
		<div class="relative z-10">
			<div class="sm:hidden">
				<label
					class="sr-only"
					for="tabs"
				>Select an option</label><select
					id="tabs"
					class="block w-full rounded-md border-gray-300 bg-theme focus:border-primary focus:ring-primary"
					name="tabs"
				>
					<option class="text-theme-inverted">
						Individual Clients
					</option>
					<option class="text-theme-inverted">
						Client Groups
					</option>
					<option class="text-theme-inverted">
						Clients Matching
					</option>
					<option class="text-theme-inverted">
						Clients by tags
					</option>
				</select>
			</div>
			<div class="hidden sm:block">
				<div class="border-b border-gray-200">
					<div
						aria-label="Tabs"
						class="-mb-px flex"
					>
						<button
							class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 256 256"
								class="icon"
							>
								<path
									fill="currentColor"
									d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z"
								/>
							</svg>
							<span>Individual Clients</span>
						</button>
						<button
							class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 2048 2048"
								class="icon"
							>
								<path
									fill="currentColor"
									d="M1664 1536h-128v-128h128v128zm-256 0h-128v-128h128v128zm256-512h-128V896h128v128zm-256 0h-128V896h128v128zm320-896q40 0 75 15t61 41t41 61t15 75v1472H128V320q0-40 15-75t41-61t61-41t75-15h1408zm64 1152H256v384h1536v-384zm0-512H256v384h1536V768zm0-128V320q0-26-19-45t-45-19H320q-26 0-45 19t-19 45v320h1536zm-256-256h128v128h-128V384zm-256 0h128v128h-128V384z"
								/>
							</svg>
							<span>Client Groups</span>
						</button>
						<button
							class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
								/>
							</svg>
							<span>Clients Matching</span>
						</button>
						<button
							class="border-transparent text-theme-inverted hover:border-primary hover:text-primary group flex w-1/4 items-center justify-center space-x-1 border-b-2 px-1 py-4 text-center text-sm font-medium"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon"
							>
								<g
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
								>
									<path
										d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"
									/>
									<path d="M6 6h.008v.008H6V6Z" />
								</g>
							</svg>
							<span>Clients by tags</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
