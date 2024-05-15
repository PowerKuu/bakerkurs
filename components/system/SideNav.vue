<script setup lang="ts">

</script>

<template>
    <SystemFlex class="sidenav" direction="column">
        <slot></slot>
    </SystemFlex>
</template>

<style scoped lang="scss">
.sidenav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20rem;


    padding: 1rem;

    background-color: var(--secondary);
    z-index: 100;

    color: var(--background);
}
</style>