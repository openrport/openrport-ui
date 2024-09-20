<template>
	<div
		class="flex flex-col flex-1 overflow-hidden bg-white divide-y rounded-lg shadow divide-gray-50 dark:divide-gray-700 dark:bg-gray-900"
	>
		<div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
			<div class="flex items-center content-center flex-1 max-h-16">
				<h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
					Tags &amp; Labels
				</h3>
				<p class="max-w-2xl mt-1 text-sm leading-6 text-gray-500 dark:text-gray-500"></p>
			</div>
			<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
				<Dialog class="flex items-center justify-center h-screen">
					<DialogTrigger as-child>
						<Button
							class="bg-primary-800 hover:bg-primary-800 focus-visible:outline-primary-800 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:focus-visible:outline-gray-400 text-white disabled:text-gray-500 cursor-pointer rounded-md px-2.5 py-1.5 text-sm relative font-semibold shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						>
							<span
								class="flex items-center justify-center gap-x-2"
							>
								<svg
									data-v-ca945699=""
									xmlns="http://www.w3.org/2000/svg"
									width="14px"
									height="14px"
									viewBox="0 0 24 24"
									class="icon"
								>
									<path
										fill="currentColor"
										d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
									></path>
								</svg>
								Edit
							</span>
						</Button>
					</DialogTrigger>
					<DialogContent class="block h-full">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save
								when you're done.
							</DialogDescription>
						</DialogHeader>
						<div class="grid gap-4 py-4">
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="name" class="text-right">
									Name
								</Label>
								<Input
									id="name"
									value="Pedro Duarte"
									class="col-span-3"
								/>
							</div>
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="username" class="text-right">
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
							<Button type="submit"> Save changes </Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
		<div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
			<div class="w-full h-full">
				<div class="flex flex-wrap gap-0.5 lg:gap-1">
					<span v-for="tag in tags" class="bg-primary-800-50 dark:bg-primary-800/10 text-primary-800 dark:text-primary-800-400 ring-primary-800/20 dark:ring-primary-800-400/30 px-2 py-1 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								class="icon">
								<g
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5">
									<path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"></path>
									<path d="M6 6h.008v.008H6V6Z"></path>
								</g>
							</svg>
            </span
						><span>{{ tag }}</span>
          </span>
          <span v-for="label in Object.keys(labels).map(key => [key, labels[key]])" class="bg-vtd-primary-50 dark:bg-vtd-primary-500/10 text-vtd-primary-700 dark:text-vtd-primary-400 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 pr-2 inline-flex items-center gap-x-1.5 rounded-md text-xs font-medium ring-1 ring-inset">
            <!---->
            <span class="bg-vtd-primary-500 dark:bg-vtd-primary-500 text-vtd-primary-200 dark:text-vtd-primary-200 ring-vtd-primary-600/20 dark:ring-vtd-primary-400/30 px-2 py-1 rounded-l">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" class="icon">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3Z"></path>
                  <path d="M6 6h.008v.008H6V6Z"></path>
                </g>
              </svg>
              {{ label[0] }}
            </span>
            <span>{{ label[1] }}</span>
            <!---->
          </span>
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

  const props = defineProps({
    tags: {
      type: Array,
      default: []
    },
    labels: {
      type: Object,
      default: {},
    }
  })
</script>
