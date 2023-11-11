<template>
  <div class="scrolling-text-container">
    <p
      class="scrolling-text text-white text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl"
    >
      Yeah, I'm DESIGNER
    </p>
  </div>
  <div class="text-white py-20">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24"
    >
      <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
        <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
          Wubba lubba
        </h1>
        <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
          dub dub
        </h2>
        <p class="text-sm md:text-base text-gray-50 mb-4">
          This seems like a good time for a drink and a cold, calculated speech
          with sinister overtones. A speech about politics, about order,
          brotherhood, power... but speeches are for campaigning. Now is the
          time for action
        </p>
        <nuxt-link
          to="/characters"
          class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
        >
          Explore Now
        </nuxt-link>
      </div>
      <div
        class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 md:ml-12 lg:w-2/3 justify-center"
      >
        <div class="h-64 flex items-center">
          <img
            class="mirrored-image xl:inline-block w-full max-w-xl3 mx-auto"
            src="~/assets/images/hero-gif.gif "
          />
        </div>
      </div>
    </div>
  </div>

  <div class="px-4 py-6 text-center md:px-6 lg:text-left">
    <div
      class="w-full mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
    >
      <div class="grid items-center gap-6 md:gap-8 lg:grid-cols-2">
        <div class="mb-6 lg:mb-0">
          <img
            src="~/assets/images/phone.gif"
            class="w-full rounded-lg shadow-lg max-w-md mx-auto"
            alt="Image"
          />
        </div>
        <div class="mt-6 lg:mt-0">
          <h1
            class="mt-2 mb-8 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl"
          >
            “Sometimes science is more art than science.” — Rick
          </h1>
        </div>
      </div>
    </div>
  </div>

  <div class="px-4 py-6 text-center md:px-6 lg:text-left">
    <div
      class="w-full mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
    >
      <div class="grid items-center gap-6 md:gap-8 lg:grid-cols-2">
        <div class="mt-6 lg:mt-0">
          <h1
            class="mt-2 mb-8 text-xl font-bold tracking-tight md:text-xl xl:text-xl"
          >
            “I’ll tell you how I feel about school, Jerry: It’s a waste of time.
            Bunch of people runnin’ around bumpin’ into each other, got a guy up
            front says, ‘Two plus two,’ and the people in the back say, ‘Four.’
            Then the bell rings and they give you a carton of milk and a piece
            of paper that says you can go take a dump or somethin’. I mean, it’s
            not a place for smart people, Jerry. I know that’s not a popular
            opinion, but that’s my two cents on the issue.” — Rick
          </h1>
        </div>
        <div class="mb-6 lg:mb-0">
          <img
            src="~/assets/images/phone2.gif"
            class="w-full rounded-lg shadow-lg max-w-md mx-auto"
            alt="Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.mirrored-image {
  transform: scaleX(-1);
}

.scrolling-text-container {
  overflow: hidden;
}

.scrolling-text {
  white-space: nowrap;
  animation: scrollText 20s linear infinite;
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
