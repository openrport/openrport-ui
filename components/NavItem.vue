<script>

export default {
    props: ['url', 'name', 'iconName'],
    components: {
        
    }
}
</script>

<template>
    <a class="nav-link mx-3 px-3" :href="url">
        <span class="nav-link-icon d-md-none d-lg-inline-block me-3">
            
        </span>
        <span class="nav-link-title">
            {{ name }}
        </span>
    </a>
</template>