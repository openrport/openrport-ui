<template>
    <div class="card mt-3">
        <div class="card-header">
            <h5 class="card-title">Updates Status</h5>
            <div class="card-actions">
                <a href="#" class="btn btn-primary">
                    <IconReload :size="20" class="me-2" />
                    Reload
                </a>
            </div>
        </div>
        <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <div class="col my-2">
                    <div class="my-1">
                        <span class="badge badge-pill bg-blue text-white me-2">{{ updates?.updates_available }}</span>
                        <strong>Updates</strong>
                    </div>
                    <div>
                        <span class="badge badge-pill bg-yellow text-white me-2">{{ updates?.security_updates_available }}</span>
                        <strong>Security Updates</strong>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary" @click="openModal">More details</button>
                </div>
            </div>
            <div class="my-2">
                <strong>
                    <em>Last status from {{ formattedDate(updates?.refreshed)}}</em>
                </strong>
            </div>
        </div>
    </div>
    <Modal :is-active="modalIsActive" title="Available updates for My raspberry" @close="closeModal" saveButtonText="Ok">
        <div class="row">
            <div class="col overflow-y-hidden">
                <table class="table min-w-max">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Security Update</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="update in updates?.update_summaries">
                            <td>{{ update.title }}</td>
                            <td class="w-40">
                                <span class="flex items-center justify-end"><svg data-v-ca945699="" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="icon"><path fill="currentColor" d="M12 21.85q-.275 0-.513-.038t-.437-.112q-3.1-1.15-5.075-4.1T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.55-1.975 6.5t-5.075 4.1q-.2.075-.437.113T12 21.85Zm0-1.95q2.425-.75 4.05-2.962T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12v7.9Z"></path></svg><span class="pl-2">Security Update</span></span>
                            </td>
                            <td>{{ updates.description }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Modal>
</template>
<script>
import Modal from '../../components/Modal.vue';
import { IconReload } from '@tabler/icons-vue';
export default {
    components: {
        Modal,
        IconReload
    },
    props: {
        updates: {
            type: Object
        }
    },
    data() {
        return {
            modalIsActive: false,
        }
    },
    methods: {
        openModal() {
            this.modalIsActive = true;
        },
        closeModal() {
            this.modalIsActive = false;
        },
        formattedDate(dateString) {
            const date = new Date(dateString);
            return `${date.getUTCDate().toString().padStart(2, '0')}.${
                (date.getUTCMonth() + 1).toString().padStart(2, '0')}.${
                date.getUTCFullYear().toString().substr(-2)} ${
                date.getUTCHours().toString().padStart(2, '0')}:${
                date.getUTCMinutes().toString().padStart(2, '0')}:${
                date.getUTCSeconds().toString().padStart(2, '0')}`
        }
    }
}
</script>
<style lang="">

</style>
