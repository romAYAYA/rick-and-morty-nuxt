<template>
  <div class="flex flex-col min-h-screen bg-[#050404]">
    <Header class="sticky top-0" />
    <LoadingComponent v-if="isLoading" />
    <div class="mx-12 my-8">
      <slot />
    </div>

    <Footer class="mt-auto" />
  </div>
</template>

<script setup>
import LoadingComponent from '~/components/LoadingComponent.vue'

const nuxtApp = useNuxtApp()
const isLoading = ref(false)

nuxtApp.hook('page:start', () => {
  isLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})
</script>
