<script setup lang="ts">
const props = defineProps<{
    width?: string
}>()

const width = computed(() => props.width || "100%")
</script>

<template>
    <div class="seperator"></div>
</template>

<style scoped lang="scss">
.seperator {
    width: v-bind(width);
    height: var(--border-width);
    background: var(--neutral);

    border-radius: var(--border-radius);
}
</style>