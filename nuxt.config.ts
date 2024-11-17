// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  plugins : [
    '~/plugins/ably.js',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME,
      apiBaseURL: process.env.API_BASE_URL,
      ablyApiKey: process.env.ABLY_API_KEY,
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    },
  },

  ssr: true,
  compatibilityDate: '2024-09-06',
})
