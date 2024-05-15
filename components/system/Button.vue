<script setup lang="ts">
const props = withDefaults(defineProps<{
    background?: string
    color?: string
    border?: string

    icon?: string,
    reverse?: boolean
}>(), {
    background: "var(--primary)",
    color: "var(--background)",
    icon: "ic:baseline-keyboard-arrow-right",
})

const borderCSS = computed(() => {
    return `var(--border-width) solid ${props.border || props.background}`
})

const slots = useSlots()
</script>

<template>
    <SystemFlex
        :style="{
            background: props.background,
            border: borderCSS,
        }"

        align="center"  

        class="button"

        gap="0.25rem"

        :data-reverse="props.reverse"
    >
        <SystemP class="text" :style="{
            color: props.color
        }">
            <slot></slot>
        </SystemP>

        <slot name="icon"></slot>
        <Icon v-if="!slots.icon" :name="icon" size="1.4rem" :color="color"></Icon>
    </SystemFlex>
</template>

<style scoped lang="scss">
.button {
    border-radius: 10px;
    padding: 0 1.5em;
    height: var(--normal-height);

    user-select: none;

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    .text {
        font-weight: 500;
        white-space: nowrap;
    }

    &:hover {
        opacity: 0.8;
    }

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &[data-reverse="true"] {
        flex-direction: row-reverse;
    }
}
</style>