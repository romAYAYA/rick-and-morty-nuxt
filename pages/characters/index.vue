<template>
  <button @click="loadNextPage">next</button>
  <button @click="loadPrevPage">prev</button>

  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
    <div v-for="character in characters.results" :key="character.id">
      <CharacterCard :character="character" />
    </div>
  </div>
</template>

<script setup>
import CharacterCard from '~/components/CharacterCard.vue'

const store = useCharactersStore()
const { fetchCharacters } = store
const { characters } = storeToRefs(store)
await fetchCharacters()

async function loadNextPage() {
  if (store.page < 42) {
    store.page++
    await fetchCharacters()
  }
}

async function loadPrevPage() {
  if (store.page > 1) {
    store.page--
    await fetchCharacters()
  }
}
</script>

<style  scoped></style>
