<script setup lang="ts">
const props = defineProps<{
    open: boolean

    maxWidth?: string
    disable?: boolean
}>()

const openModel = useModel(props, "open")
const isInitialModel = ref(true)


const maxWidthCSS = computed(() => props.maxWidth ? props.maxWidth : "1000px")

watch(openModel, () => isInitialModel.value = false)

function close() {
    if (props.disable) return
    openModel.value = false
}
</script>

<template>
    <div class="popup-wrapper" :data-show="openModel" :data-initial="isInitialModel">
        <SystemOverlay class="overlay" @click="close"></SystemOverlay>

        <SystemFlex class="popup">
            <slot></slot>
        </SystemFlex>
    </div>
</template>

<style scoped lang="scss">
.popup {
    position: fixed;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    z-index: 1000;

    width: 90vw;
    max-width: v-bind(maxWidthCSS);
}

@media screen and (max-width: 600px) {
    .popup {
        min-width: 100%;
    }
}

.overlay {
    z-index: 999;
}

.popup-wrapper {
    z-index: 100;

    &[data-show="false"][data-initial="true"] {
        display: none;
    }

    &[data-show="false"][data-initial="false"] {
        pointer-events: none; 
        animation: fadeOut 0.5s forwards;
    }

    &[data-show="true"][data-initial="true"] {
        display: block;
    }

    &[data-show="true"][data-initial="false"] {
        animation: fadeIn 0.5s forwards;
    }
}

@keyframes fadeIn {
    from {
        display: block;
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        display: none;
    }
    
}
</style>