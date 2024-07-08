// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      NUXT_API_URL: process.env.NUXT_API_URL,
    },
  },
  content: {
    watch: {
      ws: {
        port: 4000,
        showURL: true,
      },
    },
  },
  app: {
    // head: {
    //   link: [
    //     {
    //       rel: "stylesheet",
    //       href: "https://cdn.jsdelivr.net/npm/quill@2.0.1/dist/quill.core.css",
    //     },
    //     {
    //       rel: "stylesheet",
    //       href: "https://cdn.jsdelivr.net/npm/quill@2.0.1/dist/quill.snow.css",
    //     },
    //   ],
    //   script: [
    //     { src: "https://cdn.jsdelivr.net/npm/quill@2.0.1/dist/quill.core.js" },
    //   ],
    // },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/mdc",
    "@nuxt/test-utils/module",
  ],
  mdc: {
    highlight: {
      theme: "github-dark",
      langs: ["ts"],
      wrapperStyle: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },
  primevue: {
    // cssLayerOrder: 'reset,primevue',
    // cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    importPT: { from: "~/presets/lara/" },
    options: {
      unstyled: false,
      ripple: true,
      inputStyle: "filled",
    },
  },
  css: [
    "quill/dist/quill.snow.css",
    "quill/dist/quill.bubble.css",
    "quill/dist/quill.core.css",
    "primevue/resources/themes/aura-light-green/theme.css",
    "primeicons/primeicons.css",
    "~/assets/css/base.css",
    "~/assets/scss/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  tailwindcss: {
    config: {
      content: ["presets/**/*.{js,vue,ts}"],
      theme: {
        extend: {
          colors: {
            "primary-50": "rgb(var(--primary-50))",
            "primary-100": "rgb(var(--primary-100))",
            "primary-200": "rgb(var(--primary-200))",
            "primary-300": "rgb(var(--primary-300))",
            "primary-400": "rgb(var(--primary-400))",
            "primary-500": "rgb(var(--primary-500))",
            "primary-600": "rgb(var(--primary-600))",
            "primary-700": "rgb(var(--primary-700))",
            "primary-800": "rgb(var(--primary-800))",
            "primary-900": "rgb(var(--primary-900))",
            "primary-950": "rgb(var(--primary-950))",
            "surface-0": "rgb(var(--surface-0))",
            "surface-50": "rgb(var(--surface-50))",
            "surface-100": "rgb(var(--surface-100))",
            "surface-200": "rgb(var(--surface-200))",
            "surface-300": "rgb(var(--surface-300))",
            "surface-400": "rgb(var(--surface-400))",
            "surface-500": "rgb(var(--surface-500))",
            "surface-600": "rgb(var(--surface-600))",
            "surface-700": "rgb(var(--surface-700))",
            "surface-800": "rgb(var(--surface-800))",
            "surface-900": "rgb(var(--surface-900))",
            "surface-950": "rgb(var(--surface-950))",
          },
        },
      },
    },
  },
});
