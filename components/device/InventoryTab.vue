<template>
  <div class="row">
    <div class="col w-100">
      <RportClientCard :device="device"></RportClientCard>
      <GroupsCard :groups="device?.groups"></GroupsCard>
      <TagsLabelsCard :tags="device?.tags" :labels="device?.labels"></TagsLabelsCard>
      <OperatingSystemCard :device="device"></OperatingSystemCard>
    </div>
    <div class="col w-100">
      <BenchmarkCard></BenchmarkCard>
      <IPAddressessCard></IPAddressessCard>
      <UpdatesStatusCard :updates="device?.updates_status"></UpdatesStatusCard>
      <AllowedUserGroupsCard></AllowedUserGroupsCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import RportClientCard from '../components/device/RportClientCard.vue';
import GroupsCard from '../components/device/GroupsCard.vue';
import TagsLabelsCard from '../components/device/TagsLabelsCard.vue';
import OperatingSystemCard from '../components/device/OperatingSystemCard.vue';
import BenchmarkCard from '../components/device/BenchmarkCard.vue';
import IPAddressessCard from '../components/device/IPAddressessCard.vue';
import UpdatesStatusCard from '../components/device/UpdatesStatusCard.vue';
import AllowedUserGroupsCard from '~/components/device/AllowedUserGroupsCard.vue';

const props = defineProps({
  device: {
    type: Object
  }
})
</script>
