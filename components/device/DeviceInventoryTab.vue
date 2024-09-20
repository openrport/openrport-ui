<template>
    <div class="flex flex-wrap mt-4 space-x-4 xl:flex-nowrap">
        <div class="w-full space-y-4 xl:w-1/2">
            <DeviceRportClientCard :device="device"/>
            <DeviceGroupsCard :groups="device?.groups"/>
            <DeviceTagsLabelsCard :labels="device?.labels" :tags="device?.tags"/>
            <DeviceOS :device="device"/>
        </div>
        <div class="w-full space-y-4 xl:w-1/2">
            <DeviceBenchmarkCard :device="device" :metrics="metrics"/>
            <DeviceIPAddresses :ipv4="device?.ipv4" :ipv6="device?.ipv6"/>
            <DeviceUpdateStatus :device="device" />
            <DeviceAllowedUserGroups />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
  device: {
    type: Object,
    required: true,
  },
  metrics: {
    type: Array,
    default: []
  }
})
</script>