<template>
  <div class="inline-flex">
    <button
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      @click="loadPrevPage"
    >
      Prev
    </button>
    <button
      @click="loadNextPage"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
    >
      Next
    </button>
  </div>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
    <div v-for="character in characters.results" :key="character.id">
      <CharacterCard :character="character" />
    </div>
  </div>
</template>

<script setup>
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

<style scoped></style>
