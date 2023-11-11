<template>
  <div class="flex flex-col items-center mt-8 px-4">
    <img
      :src="currentCharacter.image"
      alt=""
      class="rounded-full w-248 h-248 object-cover mb-4"
    />
    <div class="text-center">
      <p class="text-2xl font-bold text-white">{{ currentCharacter.name }}</p>
      <div class="grid grid-cols-1 gap-2 mt-4 md:grid-cols-2 md:gap-4">
        <p class="text-lg text-gray-300">
          Status: {{ currentCharacter.status }}
        </p>
        <p class="text-lg text-gray-300">
          Gender: {{ currentCharacter.gender }}
        </p>
        <p class="text-lg text-gray-300">
          Origin: {{ currentCharacter.origin.name }}
        </p>
        <p class="text-lg text-gray-300">
          Location: {{ currentCharacter.location.name }}
        </p>
      </div>
    </div>
  </div>
  <img
    src="~assets/images/Crashing_Ship.png"
    alt=""
    class="hidden lg:block absolute w-64 top-20 right-0 mt-8 mr-8"
  />
</template>

<script setup>
const { currentCharacter } = defineProps(['currentCharacter'])
</script>

<style scoped></style>
