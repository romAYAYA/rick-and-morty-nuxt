import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [],
    page: 1,
  }),

  getters: {
    hasMorePages: (state) =>
      computed(() => state.page < state.characters.info.pages),
  },

  actions: {
    async fetchCharacters() {
      try {
        const nextPage = `https://rickandmortyapi.com/api/character?page=${this.page}`
        const { data } = await useFetch(nextPage)
        if (data.value) {
          this.characters = data.value
        }
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    },
  },
})
