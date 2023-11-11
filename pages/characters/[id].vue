<template>
  <div></div>
</template>

<script setup>
const store = useCharactersStore()
const { fetchCharacters } = store
const { characters } = storeToRefs(store)
await fetchCharacters()
</script>

<style lang="scss" scoped></style>
