<template>
  <div>
    <p class="text-3xl text-[#D7C6BE] font-bold">Loading...</p>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const loading = ref(false)
nuxtApp.hook('page:start', () => {
  loading.value = true
})
nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>

<style scoped></style>
