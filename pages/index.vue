<script setup lang="ts">
const answers = useStorageDeep<{
    [key: number]: number
}>("answers", {})

const config = useConfig()
</script>

<template>
    <SystemFlex class="wrapper" direction="column" gap="1.5rem" width="100%">
        <SystemFlex direction="column" gap="10rem" width="100%">
            <SystemH1 class="head">
                VÅRE KVALITET OPPSKRIFTER
            </SystemH1>

            <SystemFlex direction="column" gap="2rem" width="100%" align="center">
                <SystemH2 class="head2">
                    Velkommen til vår oppskriftsportal
                </SystemH2>

                <SystemP class="subhead2">
                    Her finner du en rekke oppskrifter som er laget av våre kokker. Vi har alt fra enkle hverdagsretter til mer avanserte retter for spesielle anledninger.
                </SystemP>

                <SystemFlex gap="2rem" wrap="wrap">
                    <Item></Item>
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

.head {
    text-align: center;
}

.head2 {
    text-align: center;

    font-size: 2.5rem;
    font-weight: 400;
}

.subhead2 {
    text-align: center;
    font-size: 1.1rem;

    max-width: 60rem;
}
</style>