<template>
  <button @click="loadNextPage">next</button>
  <button @click="loadPrevPage">prev</button>

  <div class="grid grid-cols-4 gap-4">
    <div v-for="character in characters.results" :key="character.id">
      <p>name: {{ character.name }}</p>
      <img :src="character.image" alt="" />
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

<style lang="scss" scoped></style>
