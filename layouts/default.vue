<template>
  <div class="flex flex-col min-h-screen bg-[#050404]">
    <Header class="sticky top-0" />
    <div
      v-if="loading"
      class="text-white text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl"
    >
      Loading...
    </div>
    <marquee
      class="text-white text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl"
      >Yeah, I'm DESIGNER</marquee
    >
    <div class="mx-12 my-8">
      <slot />
    </div>
    <Footer class="mt-auto" />
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
