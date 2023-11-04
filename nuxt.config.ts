export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@pinia/nuxt', { autoImport: ['defineStore', 'acceptHMRUpdate'] }],
    'nuxt-primevue',
  ],
  imports: {
    dirs: ['stores'],
  },
  primevue: {
    usePrimeVue: true,
    options: {},
    importPT: undefined,
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    directives: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    composables: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },
})
