// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["webring-banner"].includes(tag),
    },
  },

  app: {
    head: {
      title: "Dominik Schwaiger",
      script: [
        {
          async: true,
          src: "https://polyring.ch/embed.js",
        },
      ],
    },
  },

  css: [
    "~/assets/colors.scss",
    "~/assets/global.scss",
    "bootstrap-icons/font/bootstrap-icons.scss",
  ],

  modules: ["@nuxtjs/i18n", "nuxt-file-storage", "@nuxt/image"],

  i18n: {
    locales: [
      { code: "en", file: "en-GB.json" },
      { code: "de", file: "de-CH.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_and_default",
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  fileStorage: { mount: process.env.FILE_MOUNT },

  image: {
    domains: ["dominik-schwaiger.ch"],
    presets: {
      placeholder: {
        modifiers: {
          quality: 10,
          blur: 5,
        },
      },
      thumbnail: {
        modifiers: {
          quality: 40,
        },
      },
      full: {
        modifiers: {
          quality: 100,
        },
      },
    },
  },

  compatibilityDate: "2024-08-19",
});
