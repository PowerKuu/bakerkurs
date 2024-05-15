<script setup lang="ts">
const answers = useStorageDeep<{
    [key: number]: number
}>("answers", {})

const config = useConfig()
</script>

<template>
    <SystemFlex class="wrapper" direction="column" gap="1.5rem">
        <SystemFlex direction="column" gap="10rem">
            <SystemH1>

            </SystemH1>

            <SystemFlex direction="column" gap="2rem">
                <SystemH2>

                </SystemH2>

                <SystemFlex gap="2rem" wrap="wrap">

                </SystemFlex>
            </SystemFlex>
        </SystemFlex>
    </SystemFlex>
</template>

<style scoped lang="scss">
.wrapper {
    padding: 8rem var(--page-padding);
}

.image {
    width: 100%;
    border-radius: var(--border-radius);
    height: 300px;

    object-fit: cover;
    object-position: 50% 70%;
}
</style>