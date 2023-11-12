<template>
  <div>
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-8"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Episode name</th>
          <th scope="col" class="px-6 py-3">Air Date</th>
          <th scope="col" class="px-6 py-3">Episode</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="episode in episodes.results" :key="episode.id">
          <td
            v-if="
              episode.characters.some((character) =>
                character.endsWith(currentCharacter.id.toString())
              )
            "
            class="px-6 py-4"
          >
            {{ episode.name }}
          </td>
          <td
            v-if="
              episode.characters.some((character) =>
                character.endsWith(currentCharacter.id.toString())
              )
            "
            class="px-6 py-4"
          >
            {{ episode.air_date }}
          </td>
          <td
            v-if="
              episode.characters.some((character) =>
                character.endsWith(currentCharacter.id.toString())
              )
            "
            class="px-6 py-4"
          >
            {{ episode.episode }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { episodes, currentCharacter } = defineProps([
  'episodes',
  'currentCharacter',
])
</script>

<style lang="scss" scoped></style>
