import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [],
    page: 1,
    currentCharacter: null,
  }),

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

    async fetchCharacterById(id) {
      try {
        const characterUrl = `https://rickandmortyapi.com/api/character/${id}`
        const { data } = await useFetch(characterUrl, { key: id })
        this.currentCharacter = data
      } catch (error) {
        console.error(`Error fetching character with id ${id}:`, error)
      }
    },
  },
})
