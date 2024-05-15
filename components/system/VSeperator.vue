<script setup lang="ts">
const props = defineProps<{
    height?: string
}>()

const height = computed(() => props.height || "100%")
</script>

<template>
    <div class="seperator"></div>
</template>

<style scoped lang="scss">
.seperator {
    height: v-bind(height);
    width: var(--border-width);
    background: var(--neutral);

    border-radius: var(--border-radius);
}
</style>