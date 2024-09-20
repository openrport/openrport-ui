<template>

    <div
        class="flex flex-1 flex-col divide-y divide-gray-50 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-900">
        <div class="px-4 py-4 sm:flex sm:items-center sm:px-6">
            <div class="flex max-h-16 flex-1 content-center items-center">
                <h3 class="text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
                  {{ device?.name?.toUpperCase() }}
                </h3>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-500">
                </p>
            </div><!---->
        </div>
        <div class="flex-1 px-4 py-5 text-gray-950 dark:text-gray-50 sm:p-6">
            <div class="h-full w-full">
                <div class="overflow-hidden">
                    <table class="w-full max-w-full">
                        <tbody>
                            <tr class="flex flex-col md:table-row">
                                <td
                                    class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                                    ID:</td>
                                <td class="w-full"><span
                                        class="w-full truncate">{{device?.id}}</span>
                                </td>
                            </tr>
                            <tr class="flex flex-col md:table-row">
                                <td
                                    class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                                    Hostname:</td>
                                <td class="w-full">
                                    <div class="inline-flex w-max cursor-pointer">
                                        <span>{{device?.hostname}}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="flex flex-col md:table-row">
                                <td
                                    class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                                    Version:</td>
                                <td class="w-full">{{device?.version}}</td>
                            </tr>
                            <tr class="flex flex-col md:table-row">
                                <td
                                    class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                                    Auth ID:</td>
                                <td class="w-full"><a href="/client-access#prod-queoaccess-iot"
                                        class="">{{device?.client_auth_id}}</a>
                                </td>
                            </tr><!---->
                            <tr class="flex flex-col md:table-row" v-if="device?.last_heartbeat_at">
                                <td
                                    class="w-full whitespace-nowrap p-1 font-medium tracking-tight text-primary md:w-fit md:min-w-min">
                                    Last heartbeat:</td>
                                <td class="w-full p-1">{{ formatedDate(device?.last_heartbeat_at) }}</td>
                            </tr><!---->
                        </tbody>
                    </table>
                </div>
            </div>
        </div><!---->
    </div>
    
</template>
<script setup>

const props = defineProps({
    device: Object,
    required: true
})


const formatedDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getUTCDate().toString().padStart(2, '0')}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date.getUTCFullYear().toString().substr(-2)} ${date.getUTCHours().toString().padStart(2, '0')}:${date.getUTCMinutes().toString().padStart(2, '0')}:${date.getUTCSeconds().toString().padStart(2, '0')} UTC`
}
</script>
<style lang="">

</style>
