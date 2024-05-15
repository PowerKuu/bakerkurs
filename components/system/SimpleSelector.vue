<script setup lang="ts">
import { OnClickOutside } from "@vueuse/components"

export type SelectOption = {
    label: string,
    img?: string,
    value: string | number
}

const props = defineProps<{
    options: SelectOption[],
    value: SelectOption | null

    placeholder?: string
    search?: string

    disableSearch?: boolean

    requireSelection?: boolean
}>()

const model = useModel(props, "value")
const open = ref(false)

const searchModel = useModel(props, "search")


const searchOptions = computed(() => {
    if (props.disableSearch) return props.options

    const filtered = props.options.filter(
        (option) => {
            if (!searchModel.value) return true
            return option.label.toLowerCase().includes(searchModel.value.toLowerCase())
        }
    )

    return filtered
})

function setModel(option: SelectOption) {
    open.value = false
    model.value = option
}

function inputSearch() {
    model.value = null
}

function keydownSearch(event: Event) {
    if (props.disableSearch) return event.preventDefault()
}

watch(model, (newValue) => {
    if (!newValue) return
    searchModel.value = newValue.label
})

if (props.value) {
    searchModel.value = props.value.label
}
</script>

<template>
    <OnClickOutside @trigger="open = false">
        <SystemFlex class="selector" direction="column">
            <SystemInput @input="inputSearch" @keydown="keydownSearch" :focus="open" @focusin="open = true" :preventValid="!model && requireSelection" class="input" :placeholder="placeholder" v-model:value="searchModel">
                <template #icon>
                    <NuxtImg v-if="model?.img" :src="model?.img" class="option-icon" />
                    <Icon v-else name="material-symbols:search" color="var(--secondary)" class="search-icon" />
                </template>
            </SystemInput>

            <SystemFlex class="options-wrapper" v-if="open && searchOptions.length > 0">
                <SystemFlex class="options" direction="column">
                    <SystemFlex v-for="option in searchOptions" @click="setModel(option)" :key="option.value" class="option" align="center" gap="1rem">
                        <SystemFlex v-if="option.img" class="selection-img" align="center" justify="center">
                            <NuxtImg class="option-icon" :src="option.img" height="1.5rem" loading="lazy"/>
                        </SystemFlex>

                        <SystemP>{{ option.label }}</SystemP>
                    </SystemFlex>
                </SystemFlex>
            </SystemFlex>
        </SystemFlex>
    </OnClickOutside>
</template>

<style scoped lang="scss">

.selector {
    .input {
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

        max-height: var(--options-height);

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
    width: 1.5rem;
    max-height: 1.5rem;
}

.option {
    bottom: 0;
    display: flex;
    align-items: center;

    border-bottom: solid 1px var(--neutral);
    padding-left: 0.5rem;

    min-height: var(--normal-height);

    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background-color: var(--neutral);
        border-color: var(--secondary);
    }
}
</style>