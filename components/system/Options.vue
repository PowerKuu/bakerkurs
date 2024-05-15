<script setup lang="ts">
const props = defineProps<{
    options: string[],
    selected?: number
}>()

const modelSelected = useModel(props, "selected")

function clickOption(index: number) {
    modelSelected.value = index
}
</script>

<template>
    <SystemFlex>
        <SystemOption 
            v-for="(option, index) of props.options" 
            :key="index" 
            @click="clickOption(index)" 
            :selected="modelSelected == index"
        >
            {{ option }}
        </SystemOption>
    </SystemFlex>
</template>

<style scoped lang="scss">

</style>