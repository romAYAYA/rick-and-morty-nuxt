<template>
  <div class="card-wrapper max-w-sm bg-[#4969AC] border border-[#4969AC]-700 rounded-lg h-full relative overflow-hidden flex flex-col justify-between">
    <img
      :src="character.image"
      alt=""
      class="w-full rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
    />
    <div class="p-5">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Name: {{ character.name }}
      </h5>
      <h6 class="mb-2 text-xl font-bold tracking-tight">
        Status:
        <span :class="getStatusColorClass(character.status)">{{ character.status }}</span>
        | Race: {{ character.species }}
      </h6>
    </div>
    <nuxt-link
      class="flex justify-center bg-transparent hover:bg-[#D6C5BE] text-[#D6C5BE] font-semibold hover:text-white py-2 px-3 border-t border-[#D6C5BE] hover:border-transparent rounded"
      :to="`/characters/${character.id}`"
    >ADVENTURES</nuxt-link>
  </div>
</template>

<script setup>
const { character } = defineProps(['character'])

const getStatusColorClass = (status) => {
  if (status === 'Alive') {
    return 'text-[#CAE870]'
  } else if (status === 'Dead') {
    return 'text-[#E25154]'
  } else {
    return 'text-[#050404]'
  }
}
</script>

<style scoped>
.card-wrapper {
  height: 100%;
  overflow: hidden;
}

.card-wrapper:hover .w-full {
  transform: scale(1.05);
}
</style>
