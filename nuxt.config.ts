export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    ['@pinia/nuxt', { autoImport: ['defineStore', 'acceptHMRUpdate'] }],
  ],
  imports: {
    dirs: ['stores'],
  },
})
