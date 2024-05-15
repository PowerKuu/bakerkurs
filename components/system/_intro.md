## How to get started with the Kleven-system

Install dependencies
```bash
npm i sass
npm i @vueuse/nuxt
npm i nuxt-icon
npm i @nuxt/image


npm i @vueuse/components
```ttt

Configure ```nuxt.config.ts```

```ts
export default defineNuxtConfig({
    modules: [
        "@vueuse/nuxt",
        "@nuxt/image",
        "nuxt-icon"
    ]
})
```

#### Configure the _StyleSetup.vue file

Add it to the app.vue

```html
<template>
    <SystemStyleSetup></SystemStyleSetup>
    <NuxtPage></NuxtPage>
</template>
```
