<template>
  <div class="flex flex-col min-h-screen">
    <Header class="sticky top-0" />
    <slot />

    <Footer class="mt-auto" />
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
</script>
