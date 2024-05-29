<script setup lang="ts">

</script>

<template>
    <SystemFlex direction="column" gap="0.5rem" class="item">
        <img src="https://placehold.co/600x400"/>

        <SystemFlex align="center" justify="space-between" gap="1rem">
            <SystemP class="title">
                Klassisk pizza Napolitana
            </SystemP>

            <SystemFlex class="time-box" gap="0.25rem" align="center">
                <SystemP class="time">
                    4.5
                </SystemP>

                <Icon name="ph:clock" size="1.3rem" color="var(--primary)"/>
            </SystemFlex>
        </SystemFlex>
    </SystemFlex>
</template>

<style scoped lang="scss">
.item {
    padding: 1rem;
}

.title {
    font-size: 1.25rem;
}

.time {
    font-size: 1rem;
}

.time-box {
    background: #F6F6F6;
    padding: 0.5rem 1rem;
}
</style>