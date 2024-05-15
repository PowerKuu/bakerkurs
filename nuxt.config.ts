const urls = {
    host: "https://kysnorway.no",
    link: "https://kysnorway.no"
}

export default defineNuxtConfig({
    ssr: false,
    modules: ["@vueuse/nuxt", "@nuxt/image", "nuxt-icon", "@nuxtjs/seo", "nuxt-site-config"],
    ogImage: {
        enabled: false,
    },
    
    runtimeConfig: {
        public: {
            LINK_URL: urls.link,
            HOST_URL: urls.host,
        }
    },

    site: {
        url: urls.host,
        name: "Gjærbakst test av kysnorway.no",
        description: "KYS Gjærbakst test er en nettside som lar deg teste dine bakkunnskaper. Utfør testen for å finne ut om du er en ekte baker!",
        defaultLocale: "no",
        locales: ["en", "no"]
    }
})