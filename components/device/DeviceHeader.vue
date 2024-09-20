<template>
    <div class="relative z-20 flex h-16 items-center justify-between">
        <div class="">
            <h3 class="text-3xl leading-6 text-gray-800 dark:text-white">
                <div class="item-center flex flex-wrap items-center gap-4">
                    <div class="flex gap-4">
                        <div class="client-icon flex w-12 items-center justify-center" style="opacity: 1; transform: scale(1.4);">
                            <ClientIcon :os_family="device.os_family" :os_kernel="device.os_kernel" :os_full_name="device.os_full_name"/>
                        </div>
                        <h2 class="text-3xl font-bold uppercase text-primary">{{ device?.hostname?.toUpperCase() }}</h2>
                    </div>
                    <div class="hidden h-4 w-4 rounded-full lg:flex" :class="{ 'bg-error' : device?.disconnected_at !== null, 'bg-success': device?.disconnected_at === null}"></div>
                    <div class="flex items-center gap-2 text-sm font-bold text-theme-inverted-darker">
                        <div class="inline-flex w-max cursor-pointer">
                            <span>{{ device?.address }}</span>
                        </div>
                        <span class="flex items-center gap-2">
                            <span>/</span>
                            <div class="inline-flex w-max cursor-pointer">
                                <span>{{ device?.ipv4?.length > 0 ? device.ipv4[0] : ''}}</span>
                            </div>
                        </span>
                    </div>
                    <div class="hidden lg:block"></div>
                </div>
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
        </div>
        <div class="flex-1"></div>
        <div class="ml-2 flex-shrink-0">
            <div class="flex items-center justify-end gap-4">
                <button
                    class="hover:opacity-80 p-0 text-primary rounded inline-flex items-center duration-200 focus:outline-none bg-transparent text-sm font-normal uppercase"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                        class="icon mr-2">
                        <path fill="currentColor"
                            d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z">
                        </path>
                    </svg>
                    <span>Reload</span>
                </button>
                <button type="button"
                    class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 h-6 px-2 py-0 text-sm font-normal hover:bg-theme"
                    size="24px">
                    <span class="flex items-center justify-center" style="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                            class="icon">
                            <path fill="currentColor"
                                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">&nbsp;</p>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
  device: {
    type: Object,
    required: true
  }
})
import ClientIcon from "~/components/device/ClientIcon.vue";
</script>

<style scoped>
.bg-success {
  --tw-bg-opacity: 1;
  background-color: #90e884;
}
.bg-error {
  --tw-bg-opacity: 1;
  background-color: #ef4444;
}
</style>