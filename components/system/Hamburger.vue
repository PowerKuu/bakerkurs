<script setup lang="ts">
const props = defineProps<{
    showMenu: boolean
}>()

const showMenu = useModel(props, "showMenu")
</script>

<template>
    <Icon @click="showMenu = !showMenu" name="solar:hamburger-menu-linear" class="hamburger"></Icon>

    <SystemOverlay @click="showMenu = false" v-if="showMenu"></SystemOverlay>

    <SystemFlex :data-show="showMenu" class="hamburger-menu" gap="1.5rem" direction="column">
        <Icon @click="showMenu = !showMenu" color="var(--text)" name="akar-icons:cross" class="cross"></Icon>
        
        <SystemFlex gap="1rem" direction="column" align="start">
            <slot></slot>
        </SystemFlex>
    </SystemFlex>
</template>

<style scoped lang="scss">
.hamburger {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}

.hamburger-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: max(40vw, 500px);
    height: 100%;

    padding: 5rem var(--page-padding);

    background: var(--background);
    backdrop-filter: blur(5px);

    &[data-show="false"] {
        animation: fadeOut 0.4s forwards;
    }

    &[data-show="true"] {
        animation: fadeIn 0.4s forwards;
    }
}

@keyframes fadeIn {
    from {
        display: flex;
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

.cross {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
}
</style>