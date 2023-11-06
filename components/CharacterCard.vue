<template>
  <div class="max-w-sm bg-[#4969AC] border border-[#4969AC]-700 rounded-lg">
    <img :src="character.image" alt="" class="w-full rounded-t-lg" />
    <div class="p-5">
      <nuxt-link to="">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ character.name }}
        </h5>
      </nuxt-link>
      <nuxt-link
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        :to="`/characters/${character.id}`"
        >Hi</nuxt-link
      >
    </div>
  </div>
</template>

<script setup>
const { character } = defineProps(['character'])
</script>

<style scoped></style>
