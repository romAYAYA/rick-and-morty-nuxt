<template>
  <Head>
    <Title>Wubba Lubba </Title>
    <Meta name="characters" content="Rick & Morty Characters" />
  </Head>

  <div class="flex flex-col min-h-screen bg-[#050404]">
    <Header class="sticky top-0" />
    
    <LoadingComponent v-if="loading" />

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
