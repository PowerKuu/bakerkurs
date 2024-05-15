<script setup lang="ts">
const props = defineProps<{
    selected?: boolean
}>()
</script>

<template>
    <SystemFlex class="option border" align="center" justify="space-between" :data-selected="selected">
        <SystemP><slot></slot></SystemP>

        <SystemFlex class="circle"></SystemFlex>
    </SystemFlex>
</template>

<style scoped lang="scss">
.option {
    padding: 1rem;
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;

    &, * {
        transition: all 0.3s;
    }

    .circle {
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
        min-height: 1.5rem;
        
        border: 2px solid var(--secondary);
        border-radius: 50%;
    }

    &:hover {
        border-color: var(--weak-primary);

        .circle {
            background-color: var(--weak-primary);
        }
    }


    &[data-selected="true"] {
        border-color: var(--weak-primary);
        background-color: var(--weak-primary);

        .circle {
            background-color: var(--secondary);
        }
    }
}

</style>