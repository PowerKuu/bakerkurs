<script setup lang="ts">
const lang = useStorageDeep("lang")
const manualLang = useStorageDeep("manualLang", false)


const selectOptions = Object.values(configs).map((config) => {
    return {
        img: config.flag,
        value: config.code
    }
})

const selectedOption = computed({
    get: () => {
        return selectOptions.find((option) => option.value == lang.value) || null
    },
    set: (value) => {
        if (!value) return
        manualLang.value = true
        lang.value = value.value
    }
})
//                    <SystemIconSelector class="lang" :options="selectOptions" v-model:value="selectedOption"></SystemIconSelector>

</script>

<template>
    <SystemStyleSetup></SystemStyleSetup>

    <SystemFlex>
        <SystemTopNav>
            <template #left>
                <SystemFlex gap="1.5rem">
                    <SystemP class="white">OM OSS</SystemP>
                    <SystemP class="white">INPIRASJON</SystemP>
                </SystemFlex>
            </template>

            <template #middle>
                <SystemFlex align="center" gap="0.5rem">
                    <NuxtLink href="https://kysnorway.com/">
                        <SystemP class="white head">
                            KYS
                        </SystemP>
                    </NuxtLink>
                </SystemFlex>
            </template>

            <template #right>
                <SystemFlex gap="1.5rem">
                    <SystemP class="white">FRAKT</SystemP>
                    <SystemP class="white">KONTAKT OSS</SystemP>
                </SystemFlex>
            </template>
        </SystemTopNav>
        
        <NuxtPage></NuxtPage>

        <SystemFlex class="footer" direction="column" gap="2rem">
            <SystemFlex justify="space-between">
                <SystemFlex direction="column" gap="0.5rem">
                    <SystemP class="white head">
                        KYS
                    </SystemP>

                    <SystemH3 class="gray">
                        Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit dolorem ipsum.
                    </SystemH3>
                </SystemFlex>

                <SystemFlex gap="5rem">
                    <SystemFlex direction="column" gap="0.5rem">
                        <SystemPBold class="white">
                            PRODUKT
                        </SystemPBold>

                        <SystemP class="gray">
                            Om Oss
                        </SystemP>

                        <SystemP class="gray">
                            Produkter
                        </SystemP>

                        <SystemP class="gray">
                            Kontakt Oss
                        </SystemP>
                    </SystemFlex>

                    <SystemFlex direction="column" gap="0.5rem">
                        <SystemPBold class="white">
                            LOVLIG
                        </SystemPBold>

                        <SystemP class="gray">
                            Tillatelse
                        </SystemP>

                        <SystemP class="gray">
                            Angrerett
                        </SystemP>
                    </SystemFlex>

                    <SystemFlex direction="column" gap="0.5rem">
                        <SystemPBold class="white">
                            KONTAKT
                        </SystemPBold>

                        <SystemP class="gray">
                            Ta gjerne kontakt med oss på <br/> telefon eller send oss en melding
                        </SystemP>

                        <SystemP class="gray">
                            + 123 456 7890
                        </SystemP>

                        <SystemP class="gray">
                            email@example.com
                        </SystemP>
                    </SystemFlex>
                </SystemFlex>
            </SystemFlex>

            <SystemHSeperator></SystemHSeperator>

            <SystemFlex justify="space-between" align="center">
                <SystemP class="gray">
                    Copyright © 2024. All Rights Reserved
                </SystemP>

                <SystemFlex gap="1rem">
                    <img class="social-icon" src="/icons/bi_facebook.svg" alt="facebook">
                </SystemFlex>
            </SystemFlex>
        </SystemFlex>
    </SystemFlex>
</template>

<style scoped lang="scss">
.back-icon {
    height: 1.5rem;
    width: 1.5rem;
}

.social-icon {
    height: 1.5rem;
    width: 1.5rem;
}

.footer {
    padding: 3rem var(--page-padding);
    border-top: var(--border-width) solid var(--neutral);

    position: fixed;
    bottom: 0;

    width: 100%;

    background: var(--primary);
}

.head {
    font-weight: 600;
    font-size: 2.2rem;

    &:hover {
        text-decoration: underline;
    }
}

.gray {
    color: #cccccc;
}

.white {
    color: #ffffff;
}
</style>