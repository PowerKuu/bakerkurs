<script setup lang="ts">
interface Props {
    tag: string
    gap: string,
    direction: "row" | "row-reverse" | "column" | "column-reverse",
    align: "start" | "center" | "end" | "stretch",
    justify: "start" | "center" | "end" | "stretch" | "space-around" | "space-between" | "space-evenly"
    alignSelf: "start" | "center" | "end" | "stretch" | "auto"
    justifySelf: "start" | "center" | "end" | "stretch" | "space-around" | "space-between" | "space-evenly" | "auto"
    wrap: "nowrap" | "wrap" | "wrap-reverse",
    
    grow: string,
    
    height: string
    width: string
}

const props = withDefaults(defineProps<Partial<Props>>(), {
    tag: "div",
    direction: "row",
    gap: "0",
    align: "stretch",
    justify: "stretch",
    alignSelf: "auto",
    justifySelf: "auto",
    grow: "0 1 auto",
    wrap: "nowrap",
    height: "auto",
    width: "auto"
})

const style = computed(() => {
    return {
        "--flex-direction": props.direction,
        "--gap": props.gap,
        "--align-items": props.align,
        "--justify-content": props.justify,
        "--flex": props.grow,
        "--align-self": props.alignSelf,
        "--justify-self": props.justifySelf,
        "--wrap": props.wrap,
        "--height": props.height,
        "--width": props.width,
    }
})
</script>

<template>
    <component class="flex" :is="props.tag" :style="style">
        <slot></slot>
    </component>
</template>

<style scoped>
.flex {
    display: flex;
    flex-direction: var(--flex-direction);
    gap: var(--gap);
    align-items: var(--align-items);
    justify-content: var(--justify-content);
    flex: var(--flex);
    align-self: var(--align-self);
    justify-self: var(--justify-self);
    flex-wrap: var(--wrap);
    height: var(--height);
    width: var(--width);
}
</style>