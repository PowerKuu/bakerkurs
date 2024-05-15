<script setup lang="ts">
const props = defineProps<{
    value?: boolean
}>()

const model = useModel(props, "value")
</script>

<template>
    <SystemFlex align="center" justify="center" tabindex="0" :data-checked="model" @click="model = !model" class="checkbox">
        <Icon color="var(--background)" class="check" name="ph:check-bold"></Icon>
    </SystemFlex>
</template>

<style scoped lang="scss">
.checkbox {
    width: 1.5rem;
    height: 1.5rem;
    border: var(--border-width) solid var(--neutral);
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;

    user-select: none;

    background: var(--background);

    &:hover {
        border-color: var(--primary);
    }

    &[data-checked="true"] {
        border-color: var(--primary);
        background: var(--primary);

        .check {
            visibility: visible;
        }
    }

    .check {
        width: 0.9rem;
        height: 0.9rem;
        visibility: hidden;
    }
}
</style>