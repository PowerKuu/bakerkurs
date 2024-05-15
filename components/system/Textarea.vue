<script setup lang="ts">
const props = defineProps<{
    placeholder: string
    value?: string

    preventValid?: boolean
}>()

const model = useModel(props, "value")
</script>

<template>
    <textarea type="text" :data-has-value="!!model && preventValid != true"  class="textarea" :placeholder="placeholder" v-model="model" />
</template> 

<style scoped lang="scss">
.textarea {
    font-size: 1.125rem;
    color: var(--text);
    font-weight: 400;
    border: var(--border-width) solid var(--neutral);
    border-radius: var(--border-radius);
    padding: 0.5rem 0.7rem;
    width: 100%;

    font-family: inherit;

    resize: none;
    outline: none;

    transition: 0.2s;

    &:focus {
        outline: none;

        border-color: var(--primary);
    }

    &[data-has-value="true"] {
        border-color: var(--weak-primary);
    }

    &::placeholder {
        color: var(--text);
        opacity: 0.3;
    }
}
</style>