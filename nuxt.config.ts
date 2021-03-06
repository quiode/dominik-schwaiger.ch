import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true,
        typeCheck: true,
    },
    meta: {
        title: 'Dominik Schwaiger'
    },
    css: ['~/assets/colors.scss', '~/assets/global.scss', 'bootstrap-icons/font/bootstrap-icons.scss'],
})
