<script setup lang="ts">
const slots = useSlots()

const justify = computed(() => slots.center ? "center" : "space-between")
</script>

<template>
    <SystemFlex class="navbar" align="center" :justify="justify">
        <slot name="left"></slot>
        <slot name="middle"></slot>
        <slot name="center" v-if="slots.center"></slot>
        <slot name="right"></slot>
    </SystemFlex>
</template>

<style scoped lang="scss">
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    z-index: 10;

    padding: 1rem var(--page-padding);
    background: var(--primary);
}
</style>