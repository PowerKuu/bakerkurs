<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <SystemFlex direction="column" gap="0.25rem">
        <SystemPSmall>
            {{ name }}
        </SystemPSmall>

        <slot></slot>
    </SystemFlex>
</template>

<style scoped lang="scss">

</style>