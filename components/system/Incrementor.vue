<script setup lang="ts">
const props = defineProps<{
    value?: number

    min?: number
    max?: number
    step?: number

    placeholder?: string
}>()

const model = useModel(props, "value")

function add(value: number) {
    if (!model.value || isNaN(model.value)) { 
        model.value = 0
    }

    const expected = model.value + value

    if (props.max != undefined && expected >= props.max) return
    if (props.min != undefined && expected <= props.min) return
    

    model.value = expected
}
</script>

<template>
    <SystemFlex class="incrementor" align="center">
        <SystemFlex class="minus" @click="add(-(props.step ?? 1))" align="center" justify="center">
            <Icon name="material-symbols:remove-rounded" color="var(--secondary)"></Icon>
        </SystemFlex>

        <input 
            class="input" 
            type="number" 
            v-model="model" 

            :min="min" 
            :max="max"
            :step="step"
            :placeholder="placeholder"
        >
        
        <SystemFlex class="plus" @click="add(props.step ?? 1)" align="center" justify="center">
            <Icon name="material-symbols:add-rounded" color="var(--secondary)"></Icon>
        </SystemFlex>
    </SystemFlex>
</template>

<style scoped lang="scss">
.incrementor {
    width: 100%;

    max-height: var(--normal-height);
    min-height: var(--normal-height);

    &, * {
        user-select: none;
    }

    .input {
        flex: 1;
        width: 100%;
        height: 100%;

        border: 0;
        outline: 0;

        border-radius: 0;
        font-size: 1.125rem;
        font-weight: inherit;
        font-weight: 400;


        font-family: inherit;

        text-align: center;

        border: var(--border-width) solid var(--neutral);
        border-left: 0;
        border-right: 0;

        // Hide arrows

        appearance: textfield;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        appearance: textfield;
        -moz-appearance: textfield;


        &::placeholder {
            opacity: 0.5;
        }
    }

    .minus, .plus {
        height: 100%;
        border: var(--border-width) solid var(--neutral);
        padding: 0.75rem;

        background: var(--background);
    
        cursor: pointer;

        transition: 0.2s;


        &:hover {
            background-color: var(--neutral);
        }
    }

    .minus {
        border-bottom-left-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
    }

    .plus {
        border-bottom-right-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }
}
</style>