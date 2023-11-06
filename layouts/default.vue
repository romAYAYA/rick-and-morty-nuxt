<template>
  <div class="flex flex-col min-h-screen bg-[#101827]">
    <Header class="sticky top-0" />
    <slot />
    <Footer class="mt-auto" />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
