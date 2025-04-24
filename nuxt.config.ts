import { FILE_MOUNT } from "./server/utils/constants";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },

  site: { url: "https://dominik-schwaiger.ch", name: "Dominik Schwaiger" },

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

  modules: ["@nuxtjs/i18n", "nuxt-file-storage", "@nuxt/image", "@nuxtjs/seo"],

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

  fileStorage: { mount: FILE_MOUNT },

  image: {
    domains: ["localhost", "dominik-schwaiger.ch"],
    presets: {
      placeholder: {
        modifiers: {
          quality: 80,
          width: 1920,
          blur: 50,
        },
      },
      thumbnail: {
        modifiers: {
          quality: 60,
          width: 1920,
        },
      },
      full: {
        modifiers: {
          quality: 100,
        },
      },
    },
    ipx: {
      maxAge: 60 * 60 * 24 * 365, // 1 Year
    },
  },

  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: true,
    sources: ["/api/__sitemap__/urls"],
  },
  robots: {
    enabled: true,
  },
  seo: {
    // seo utils
    enabled: false,
  },
  schemaOrg: {
    enabled: false,
  },
  linkChecker: {
    enabled: false,
  },

  compatibilityDate: "2024-08-19",

  devtools: {
    enabled: true,
  },

  experimental: {
    inlineRouteRules: true, // enable inline rules, used for robots.txt (defineRouteRules)
  },
});
