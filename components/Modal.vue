<template>
    <div class="modal modal-blur " :class="{ 'is-active': isActive }" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered mh-100" role="document">
            <div class="modal-content ">
                <div class="modal-header">
                    <h3 class="modal-title">{{ title }}</h3>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                </div>
                <div class="modal-body modal-height overflow-y-auto">
                    <!-- Modal content goes here -->
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-auto" data-bs-dismiss="modal" @click="closeModal">{{closeButtonText}}</button>
                    <button type="button" class="btn btn-primary" @click="submit" data-bs-dismiss="modal">{{saveButtonText}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Modal Title'
        },
        closeButtonText: {
            type: String,
            default: 'Close'
        },
        saveButtonText: {
            type: String,
            default: 'Save changes'
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        submit() {
            this.$emit('save');
        }
    }
};
</script>

<style scoped>
.modal {
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;

    background-color: rgba(0, 0, 0, 0.5);
}
.modal-height {
    max-height: calc(100vh - 150px);
}
.modal-dialog {
    width: 100%;
}
.modal.is-active {
    display: flex;
}

</style>
