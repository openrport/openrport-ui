<template>
    <Modal :is-active="is_active" title="Add Client Access" @close="closeModal" save-button-text="Add Client Access"
        @save="save">
        <div
            class="tw-p-3 tw-overflow-y-auto modal-height tw-relative tw-h-full tw-max-h-full tw-min-h-[280px] tw-transition-all dark:tw-text-gray-200">
            <div class="tw-relative">
                <div class="tw-flex tw-flex-col tw-mt-4">
                    <div class="tw-relative tw-mt-1 tw-flex tw-w-full tw-flex-col">
                        <input v-model="client.id"
                            class="form-control primary tw-input-text focus:tw-border-1 tw-peer tw-order-2 tw-block tw-h-10 tw-w-full tw-rounded tw-bg-transparent tw-text-theme-inverted tw-shadow-sm focus:tw-outline-0 focus:tw-ring-0 sm:tw-text-sm" />
                        <label
                            class="tw-order-1 tw-flex tw-pb-1 tw-pl-1 tw-text-theme-label peer-focus:tw-text-primary tw-text-sm tw-font-normal">ID</label>
                    </div>
                    <div
                        class="tw-caption tw-mb-6 tw-mt-1 tw-px-3 tw-text-[10.5px] tw-tracking-[0.35px] tw-text-theme-inverted tw-text-opacity-80">
                        Use meaningful names as ID to organize your clients better or <a
                            class="tw-text-primary tw-underline" @click.prevent="generateRandomID" href="#">generate a
                            random ID </a> instead. </div>
                </div>
                <div class="tw-flex tw-flex-col tw-mt-4">
                    <div class="tw-relative tw-mt-1 tw-flex tw-w-full tw-flex-col">
                        <input v-model="client.password"
                            class="form-control primary tw-input-text focus:tw-border-1 tw-peer tw-order-2 tw-block tw-h-10 tw-w-full tw-rounded tw-bg-transparent tw-text-theme-inverted tw-shadow-sm focus:tw-outline-0 focus:tw-ring-0 sm:tw-text-sm"
                            placeholder=" " type="text" autocomplete="off">
                        <label
                            class="tw-order-1 tw-flex tw-pb-1 tw-pl-1 tw-text-theme-label peer-focus:tw-text-primary tw-text-sm tw-font-normal">Password</label>
                    </div>
                    <div
                        class="tw-mb-4 tw-mt-2 tw-px-3 tw-text-right tw-text-sm tw-font-normal tw-tracking-[0.35px] tw-text-theme-inverted tw-text-opacity-80">
                        {{ client.password.length }}</div>
                </div>
                <div
                    class="tw-relative tw-mt-1 tw-flex tw-px-4 tw-py-2 tw-text-sm tw-font-normal tw-text-primary before:tw-absolute before:tw-inset-0 before:tw-bg-primary before:tw-bg-opacity-10">
                    <div class="tw-mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="tw-icon tw-relative tw-z-20 tw-h-5 tw-w-5" width="24px"
                            height="24px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z">
                            </path>
                        </svg>
                    </div>
                    <div class="tw-relative tw-z-20"> The password must be at least 12 characters long. Only
                        Alphanumeric and the following special characters _ + - . : are allowed. </div>
                </div>
                <div
                    class="tw-relative tw-mt-1 tw-flex tw-px-4 tw-py-2 tw-text-sm tw-font-normal tw-text-primary before:tw-absolute before:tw-inset-0 before:tw-bg-primary before:tw-bg-opacity-10">
                    <div class="tw-mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="tw-icon tw-relative tw-z-20 tw-h-5 tw-w-5" width="24px"
                            height="24px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z">
                            </path>
                        </svg>
                    </div>
                    <div class="tw-relative tw-z-20"> The ID and the password are case-sensitive. </div>
                </div>
            </div>
        </div>
    </Modal>
</template>
<script setup lang="ts">
import { randomSanitizedPassword, randomID } from "@/lib/utils";

const props = defineProps({
    is_active: {
        type: Boolean,
        default: false
    },
})

const client = ref({
    id: '',
    password: randomSanitizedPassword(15)
});

const emit = defineEmits(["close", "save"]);

const closeModal = () => {
    emit("close");
}
const save = () => {
    emit("save", client.value);
}

const generatePassword = () => {
    client.value.password = randomSanitizedPassword(15);
}
const generateRandomID = () => {
    client.value.id = randomID(10)
}
</script>
<style scoped>
input.primary {
    background-color: transparent;
    border-color: #e5e7eb;
    color: #374151;
}
</style>
