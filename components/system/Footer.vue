<script setup lang="ts">

</script>

<template>
    <SystemFlex class="footer" justify="space-between" align="center">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </SystemFlex>
</template>

<style scoped lang="scss">
.footer {
    padding: 3rem var(--page-padding);
    border-top: var(--border-width) solid var(--neutral);
}
</style>