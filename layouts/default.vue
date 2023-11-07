<template>
  <div class="flex flex-col min-h-screen bg-[#050404]">
    <Header class="sticky top-0" />
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

<script setup></script>
