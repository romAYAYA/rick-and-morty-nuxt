import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCharactersStore = defineStore('characters', () => {
  const characters = ref()
  const setCharacters = (data) => (characters.value = data)

  const fetchCharacters = async () => {
    try {
      const res = await $fetch('https://rickandmortyapi.com/api/character')
      setCharacters(res)
    } catch (err) {
      console.log(err)
    }
  }
})
