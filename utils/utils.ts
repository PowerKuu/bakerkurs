let globalRef: Ref<any> | null  = null


function getStorage(type: "local" | "session", isMounted = false) {
    if (!isMounted) return null
    return (type === "local" ? localStorage : sessionStorage) || null
}

export function useStorageDeep<T>(key: string, initialValue?: T, type: "local" | "session" = "local") {
    const mounted = useMounted()

    let storage = getStorage(type, mounted.value)
    const valueInStorage = storage != null ? storage.getItem(key) : null

    const storageValue = ref<T>(valueInStorage ? JSON.parse(valueInStorage) : initialValue)

    let currentUpdate = false

    onMounted(() => {
        storage = getStorage(type, true)!
        
        const localStorageItem = storage.getItem(key)


        if (localStorageItem) {
            storageValue.value = JSON.parse(localStorageItem)
        }

        if (!globalRef) globalRef = ref(0)

        watch(globalRef, () => {
            if (!storage) return
            if (currentUpdate) return currentUpdate = false

            const localStorageItem = storage.getItem(key)

            if (localStorageItem) {
                storageValue.value = JSON.parse(localStorageItem)
            }
        })

    })

    watchDeep(storageValue, () => {
        if (!storage) return
        if (JSON.stringify(storageValue.value) == "{}") return
        
        storage.setItem(key, JSON.stringify(storageValue.value))

        currentUpdate = true

        if (globalRef) globalRef.value++
    })


    return storageValue
}

export function getExternalPath(path: string) {
    const config = useRuntimeConfig()

    return new URL(path, config.public.HOST_URL).href
}

export function getLinkPath(path: string) {
    const config = useRuntimeConfig()

    return new URL(path, config.public.LINK_URL).href
}


export function getConfigFromLang(lang: string): Config {
    return configs[lang]
}

export function useConfig() {
    const lang = useStorageDeep("lang", "no")
    const manualLang = useStorageDeep("manualLang", false)

    getLang().then((newLang) => {
        if (manualLang.value) return
        lang.value = newLang
    })

    return computed(() => {
        return getConfigFromLang(lang.value)
    })
}


export async function getLang() {
    const normalLang = ["en", "sv", "nb", "nn"]
    const noVariantLang = ["nb", "nn"]

    return new Promise<string>((resolve) => {
        onMounted(() => {
            const nLang = navigator.language.split("-")

            const lang = nLang[0].toLowerCase()

            const langExists = normalLang.includes(lang)

            if (!langExists) return resolve("en")

            const isNo = noVariantLang.includes(lang)

            if (isNo) return resolve("no")

            resolve(lang)
        })
    })
}