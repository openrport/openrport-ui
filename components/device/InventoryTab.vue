<template>
	<div class="row">
		<div class="col w-100">
			<RportClientCard :device="device" />
			<GroupsCard :groups="device?.groups" />
			<TagsLabelsCard
				:tags="device?.tags"
				:labels="device?.labels"
			/>
			<OperatingSystemCard :device="device" />
		</div>
		<div class="col w-100">
			<BenchmarkCard />
			<IPAddressessCard />
			<UpdatesStatusCard :updates="device?.updates_status" />
			<AllowedUserGroupsCard />
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
		type: Object,
	},
});
</script>
