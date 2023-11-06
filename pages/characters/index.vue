<template>
  <div v-for="character in characters.results" :key="character.id">
    <p>name: {{ character.name }}</p>
    <img :src="character.image" alt="" />
    <p>name: {{ character.episode }}</p>
  </div>
</template>

<script setup>
const { data: characters } = await useFetch(
  'https://rickandmortyapi.com/api/character'
)
</script>

<style lang="scss" scoped></style>
