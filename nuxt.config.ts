// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: { appManifest: false },
  // compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-24",
});
