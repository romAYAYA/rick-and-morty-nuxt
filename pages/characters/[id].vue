<template>
  <div>{{ currentCharacter }}</div>
</template>

<script setup>
const store = useCharactersStore()
const { id } = useRoute().params
const { fetchCharacterById } = store

await fetchCharacterById(id)

const { currentCharacter } = toRefs(store)
</script>

<style lang="scss" scoped></style>
