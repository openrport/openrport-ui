<template>
    <div class="card">
        <div class="card-body">
            <div class="card">
                <div class="card-body">
                    <div class="jumbotron text-center">
                        <IconCircleKey :size="60" stroke-width="1" />
                        <p class="display-6">The vault is locked or not initialized.</p>
                        <div class="my-3">
                            <a href="#">Learn more</a>
                        </div>
                        <p class="lead">
                            <a class="btn btn-lime btn-lg rounded-pill" href="#" role="button">Unlock vault</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { IconCircleKey } from '@tabler/icons-vue';
export default {
    components: {
        IconCircleKey
    }
}
</script>
<style></style>