<template>
    <page-wrapper isExtra="true">
        <div class="container mt-4">
            <div class="row">
                <div class="col">
                    <device-page-header title="My Raspberry">
                        <template v-slot:action>
                            <a href="#" class="pe-3">
                                <IconReload :size="16" />
                                Reload
                            </a>
                            <a href="#">
                                <IconHeart :size="16" />
                            </a>
                        </template>
                        <template v-slot:description>
                            <div class="p-2">
                                <div class="text-secondary mt-1">186.31.191.124 / 192.168.1.59</div>
                            </div>
                        </template>
                    </device-page-header>
                </div>
            </div>
            <div class="row">
                <tabs :tabs="tabs" :default-tab-index="0" v-slot:default="{ activeTabIndex }">
                    <tab :key="0" :is-active="activeTabIndex === 0">
                        <div class="row">
                            <div class="col w-100">
                                <RportClientCard></RportClientCard>
                                <GroupsCard></GroupsCard>
                                <TagsLabelsCard></TagsLabelsCard>
                                <OperatingSystemCard></OperatingSystemCard>
                            </div>
                            <div class="col w-100">
                                <BenchmarkCard></BenchmarkCard>
                                <IPAddressessCard></IPAddressessCard>
                                <UpdatesStatusCard></UpdatesStatusCard>
                                <AllowedUserGroupsCard></AllowedUserGroupsCard>
                            </div>
                        </div>
                    </tab>
                    <tab :key="1" :is-active="activeTabIndex === 1">
                        <page-header title="Tunnels" actionName="Reload" />
                        <!-- <page-table /> -->
                        <div class="card table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <tr>
                                        <th>Client</th>
                                        <th>Allowed clients</th>
                                        <th>Exposed port</th>
                                        <th>HTTP proxy</th>
                                        <th>Protocol</th>
                                        <th>Destination</th>
                                        <th>Port</th>
                                        <th>Name</th>
                                        <th>Created at</th>
                                        <th class="w-1"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>My raspberry</td>
                                        <td class="text-secondary">
                                            192.168.0.1
                                        </td>
                                        <td class="text-secondary">
                                            <a href="#" class="text-reset">27000</a>
                                        </td>
                                        <td class="text-secondary">
                                            <span class="badge">Disabled</span>
                                        </td>
                                        <td>tcp:ssh</td>
                                        <td>127.0.0.1</td>
                                        <td>22</td>
                                        <td></td>
                                        <td>1 minute ago</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="#" class="btn dropdown-toggle border-0"
                                                    data-bs-toggle="dropdown">...</a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Copy</a>
                                                    <a class="dropdown-item" href="#">Launch</a>
                                                    <a class="dropdown-item" href="#">Terminate</a>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                                <!-- <tfoot>
                                </tfoot> -->
                            </table>
                            <div class="row">
                                <div class="col">
                                    <div class="p-2">Showing 1 to 0 of 0 results</div>
                                </div>
                            </div>
                        </div>
                    </tab>
                    <tab :key="2" :is-active="activeTabIndex === 2">
                        <div class="mt-3">
                            <vault-locked></vault-locked>
                        </div>
                    </tab>
                    <tab :key="3" :is-active="activeTabIndex === 3">
                        <div class="mt-3">
                            <vault-locked></vault-locked>
                        </div>
                    </tab>
                    <tab :key="4" :is-active="activeTabIndex === 4">
                        <div class="mt-3">
                            <command-editor></command-editor>
                        </div>
                    </tab>
                    <tab :key="5" :is-active="activeTabIndex === 5">
                        <div class="mt-3">
                            <command-editor></command-editor>
                        </div>
                    </tab>
                    <tab :key="6" :is-active="activeTabIndex === 6">

                    </tab>
                    <tab :key="7" :is-active="activeTabIndex === 7">
                    </tab>
                    <tab :key="8" :is-active="activeTabIndex === 8">
                    </tab>
                    <tab :key="9" :is-active="activeTabIndex === 9">
                        <div class="card table-responsive mt-3">
                            <table class="table table-vcenter">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Schedule</th>
                                        <th>Last execution time</th>
                                        <th>Client selection</th>
                                        <th>Last Status</th>
                                        <th class="w-1"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>My raspberry</td>
                                        <td class="text-secondary">
                                            192.168.0.1
                                        </td>
                                        <td class="text-secondary">
                                            <a href="#" class="text-reset">27000</a>
                                        </td>
                                        <td class="text-secondary">
                                            <span class="badge">Disabled</span>
                                        </td>
                                        <td>tcp:ssh</td>
                                        <td>127.0.0.1</td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="#" class="btn dropdown-toggle border-0"
                                                    data-bs-toggle="dropdown">...</a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Copy</a>
                                                    <a class="dropdown-item" href="#">Launch</a>
                                                    <a class="dropdown-item" href="#">Terminate</a>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col">
                                    <div class="p-2">Showing 1 to 0 of 0 results</div>
                                </div>
                            </div>
                        </div>
                    </tab>
                </tabs>
            </div>
        </div>
        

    </page-wrapper>
</template>
<script>
import RportClientCard from '../components/device/RportClientCard.vue';
import GroupsCard from '../components/device/GroupsCard.vue';
import TagsLabelsCard from '../components/device/TagsLabelsCard.vue';
import OperatingSystemCard from '../components/device/OperatingSystemCard.vue';
import BenchmarkCard from '../components/device/BenchmarkCard.vue';
import IPAddressessCard from '../components/device/IPAddressessCard.vue';
import UpdatesStatusCard from '../components/device/UpdatesStatusCard.vue';
import AllowedUserGroupsCard from '~/components/device/AllowedUserGroupsCard.vue';
import { IconTag, IconReload, IconPencil, IconCircleKey, IconHeart } from '@tabler/icons-vue';
export default {
    components: {
        RportClientCard,
        GroupsCard,
        TagsLabelsCard,
        OperatingSystemCard,
        BenchmarkCard,
        IPAddressessCard,
        UpdatesStatusCard,
        AllowedUserGroupsCard,
        IconTag,
        IconReload,
        IconPencil,
        IconCircleKey,
        IconHeart
    },
    data() {
        return {
            modalIsActive: false,
            tabs: [
                { title: 'Inventory' },
                { title: 'Tunnels' },
                { title: 'Meta-Data' },
                { title: 'Documents' },
                { title: 'Commands' },
                { title: 'Scripts' },
                { title: 'Monitoring' },
                { title: 'Files' },
                { title: 'Audit' },
                { title: 'Schedules' },
            ]
        };
    },
    methods: {
        openModal() {
            this.modalIsActive = true;
        },
        closeModal() {
            this.modalIsActive = false;
        }
    }
};
</script>