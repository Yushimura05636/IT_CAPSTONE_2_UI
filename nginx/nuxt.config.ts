// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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
    },
    server: {
      port: 3001, // Change to any available port
      host: '0.0.0.0', // Change to '0.0.0.0' if you want it to be accessible externally
    },
  },

  ssr: false,
  compatibilityDate: '2024-09-06',
})
