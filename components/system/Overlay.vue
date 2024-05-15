<script setup lang="ts">
</script>

<template>
    <div class="overlay"></div>
</template>

<style scoped lang="scss">
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #ffffff;
    opacity: 0.75;

    transform: translateZ(0);
    backface-visibility: hidden;
}
</style>