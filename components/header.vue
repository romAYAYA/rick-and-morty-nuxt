<template>
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-[#4969AC] py-2 lg:py-4"
  >
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="ml-2 w-1/4 md:w-full">
        <nuxt-link to="/" class="text-3xl text-[#D7C6BE] font-bold">
          Wubba Lubba
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
<style scoped>
nav {
  z-index: 999;
}
</style>
