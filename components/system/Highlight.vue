<script setup lang="ts">

</script>

<template>
    <span class="highlight">
        <slot></slot>
    </span>
</template>

<style scoped lang="scss">
.highlight {
    color: var(--primary);

    font-weight: inherit;
}
</style>