<script setup lang="ts">
import { OnClickOutside } from "@vueuse/components"


export type SelectOption = {
    img?: string,
    value: string | number
}

const props = defineProps<{
    options: SelectOption[],
    value: SelectOption | null
}>()

const open = ref(false)
const model = useModel(props, "value")


function setModel(option: SelectOption) {
    open.value = false
    model.value = option
}
</script>

<template>
    <OnClickOutside @trigger="open = false">
        <SystemFlex class="selector" direction="column">
            <SystemFlex @click="open = true" class="icon-preview" justify="center">
                <NuxtImg v-if="model?.img" :src="model?.img" class="option-icon" />
                <Icon v-else name="material-symbols:search" color="var(--secondary)" class="search-icon" />
            </SystemFlex>


            <SystemFlex class="options-wrapper" v-if="open && props.options.length > 0">
                <SystemFlex class="options" direction="column">
                    <SystemFlex v-for="option in props.options" @click="setModel(option)" :key="option.value" class="option" align="center" justify="center" gap="1rem">
                        <SystemFlex v-if="option.img" class="selection-img" align="center" justify="center">
                            <NuxtImg class="option-icon" :src="option.img" loading="lazy"/>
                        </SystemFlex>
                    </SystemFlex>
                </SystemFlex>
            </SystemFlex>
        </SystemFlex>
    </OnClickOutside>
</template>

<style scoped lang="scss">

.selector {
    cursor: pointer;

    .icon-preview {
        width: 5rem;

        position: relative;
        z-index: 8;
    }
}

.options-wrapper {
    --options-height: 12.5rem;

    display: flex;
    flex-direction: column;

    position: relative;

    .options {
        margin-top: 0.5rem;
        
        position: absolute;

        z-index: 9;
        
        border-radius: var(--border-radius);
        border: solid var(--border-width) var(--neutral) !important;
        background: var(--background);


        overflow-y: auto;
        overflow-x: hidden;

        max-width: 100%;
        width: 100%;

        :nth-last-child(-n+1) {
            border-bottom: none;
        }
    }
}

.search-icon {
    width: 1.25rem;
    height: 1.25rem;

    opacity: 0.4;
}


.option-icon {
    width: 3rem;
    min-height: 2rem;

    border-radius: 5px;

    object-fit: cover;
}

.option {
    bottom: 0;
    display: flex;
    align-items: center;

    border-bottom: solid 1px var(--neutral);

    min-height: var(--normal-height);


    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background-color: var(--neutral);
        border-color: var(--secondary);
    }
}
</style>