<script setup lang="ts">
const props = defineProps<{
    disabled?: boolean
    label: string

    multiple?: boolean
    preventValid?: boolean

    accept?: string
}>()

const fileElement = ref<HTMLInputElement | null>(null)
const lastFiles = ref<FileList>()

const emit = defineEmits<{
    (e: "upload", value: FileList): void
}>()

function openFilePicker(event: Event) {
    const target = event.target as HTMLElement | null

    if (props.disabled || target?.tagName == "INPUT") return
    fileElement.value?.click()
}

function selectFile() {
    if (props.disabled || fileElement.value?.tagName != "INPUT") return

    const files = fileElement.value.files
    if (!files) return
    if (files.length == 0) return

    emit("upload", files)
    lastFiles.value = files
}

watch(() => props.disabled, () => {
    if (props.disabled) {
        lastFiles.value = undefined

        if (fileElement.value) {
            fileElement.value.value = ""
        }
    }
})
</script>

<template>
    <SystemFlex :data-disabled="disabled" :data-has-value="!!lastFiles && preventValid != true" @click="openFilePicker" class="upload" align="center" justify="space-between" gap="1rem">        
        <SystemP class="text text-overflow">
            {{ label }}
        </SystemP>

        <Icon color="var(--secondary)" class="upload-icon" name="material-symbols:drive-folder-upload"></Icon>
    
        <input :multiple="multiple" :accept="accept" :name="multiple ? `files[]` : undefined" @input="selectFile" ref="fileElement" type="file" class="file-input" />
    </SystemFlex>
</template>

<style scoped lang="scss">
.file-input {
    display: none;
    pointer-events: none;
}

.upload {
    height: var(--normal-height);
    border: var(--border-width) solid var(--neutral);
    border-radius: var(--border-radius);

    background: var(--background);

    padding: 0 1rem;

    cursor: pointer;

    transition: 0.2s;

    &[data-disabled="true"] {
        cursor: not-allowed;
        opacity: 0.4;
    }

    .upload-icon {
        min-width: 1.5rem;
        min-height: 1.5rem;
    }

    .text, .upload-icon {
        opacity: 0.8;
        transition: 0.2s;
    }

    &[data-has-value="true"] {
        border-color: var(--weak-primary);
    }

    &:hover {
        .upload-icon {
            opacity: 1;
        }

        .text {
            opacity: 1;
        }

        background: var(--neutral);
    }
}
</style>