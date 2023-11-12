<template>
  <div v-for="episode in episodes.results" :key="episode.id">
    <div
      v-if="
        episode.characters.some((character) =>
          character.endsWith(currentCharacter.id.toString())
        )
      "
    >
      {{ episode.name }}
    </div>
  </div>
</template>

<script setup>
const { episodes, currentCharacter } = defineProps([
  'episodes',
  'currentCharacter',
])
console.log(episodes)
</script>

<style lang="scss" scoped></style>
