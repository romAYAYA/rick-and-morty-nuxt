<template>
  <div class="flex flex-col min-h-screen bg-[#000000]">
    <Header class="sticky top-0" />
    <div class="mx-12 my-8">
      <slot />
    </div>
    <Footer class="mt-auto" />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
