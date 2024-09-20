<template>
	<div
		class="flex flex-col flex-1 overflow-hidden bg-white divide-y rounded-lg shadow divide-gray-50 dark:divide-gray-700 dark:bg-gray-900"
	>
		<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
			<div class="flex items-center content-center flex-1 max-h-16">
				<h3
					class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50"
				>
					Updates Status
				</h3>
				<p
					class="max-w-2xl mt-1 text-sm leading-6 text-gray-500 dark:text-gray-500"
				></p>
			</div>
			<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
				<button
					class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					type="button"
				>
					<span class="flex items-center justify-center gap-x-2"
						><svg
							data-v-ca945699=""
							xmlns="http://www.w3.org/2000/svg"
							width="14px"
							height="14px"
							viewBox="0 0 24 24"
							class="icon"
						>
							<path
								fill="currentColor"
								d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"
							></path>
						</svg>
						Reload</span
					>
				</button>
			</div>
		</div>
		<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
			<div class="w-full h-full">
				<div class="w-full">
					<div class="p-0">
						<div class="flex items-center justify-between">
							<div class="flex flex-col">
								<div class="flex">
									<span class="mr-2 inline-flex min-w-[32px] items-center justify-center rounded-full bg-primary-800 text-white">{{ device?.updates_status?.updates_available }}</span>
                  <span class="font-medium text-gray-900 dark:text-gray-50">Updates</span>
								</div>
								<div class="mt-2">
									<span class="mr-2 inline-flex min-w-[32px] items-center justify-center rounded-full bg-warning text-white">{{ device?.updates_status?.security_updates_available }}</span>
                  <span class="font-medium text-gray-900 dark:text-gray-50">Security Updates</span>
								</div>
							</div>
							<div>
								<Dialog
									class="flex items-center justify-center h-screen"
								>
									<DialogTrigger as-child>
										<Button
											class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
										>
											More Details
										</Button>
									</DialogTrigger>
									<DialogContent class="block h-full">
										<DialogHeader>
											<DialogTitle
												>Edit profile</DialogTitle
											>
											<DialogDescription>
												Make changes to your profile
												here. Click save when you're
												done.
											</DialogDescription>
										</DialogHeader>
										<div class="grid gap-4 py-4">
											<div
												class="grid grid-cols-4 items-center gap-4"
											>
												<Label
													for="name"
													class="text-right"
												>
													Name
												</Label>
												<Input
													id="name"
													value="Pedro Duarte"
													class="col-span-3"
												/>
											</div>
											<div
												class="grid grid-cols-4 items-center gap-4"
											>
												<Label
													for="username"
													class="text-right"
												>
													Username
												</Label>
												<Input
													id="username"
													value="@peduarte"
													class="col-span-3"
												/>
											</div>
										</div>
										<DialogFooter>
											<Button type="submit">
												Save changes
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
								<!-- <button
									class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
									type="button"
								>
									<span
										class="flex items-center justify-center gap-x-2"
									>
										More Details
									</span>
								</button> -->
							</div>
						</div>
						<div class="flex items-center justify-between mt-8">
							<div
								class="italic text-gray-900 dark:text-gray-400"
							>
								Last status from {{ formatedDate(device?.updates_status?.refreshed) }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { Button } from "@/components/ui/button";
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
	} from "@/components/ui/dialog";
	import { Input } from "@/components/ui/input";
	import { Label } from "@/components/ui/label";
  import {formatedDate} from "~/lib/utils";

  const props = defineProps({
    device: {
      type: Object,
      required: true,
    }
  })
</script>
