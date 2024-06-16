<template>
  <section
    class="relative bg-[url('/img/hero.jpg')] h-screen bg-cover bg-center bg-no-repeat"
    id="bg"
  >
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    <div
      class="relative flex items-center justify-center h-full max-w-screen-xl px-4 mx-auto"
      id="image-cv"
    >
      <div
        class="font-poppins text-center p-6 flex flex-col items-center space-y-4"
      >
        <h1
          class="max-w-1xl text-4xl font-bold tracking-tight leading-none sm:text-5xl md:text-7xl xl:text-9xl text-white rounded-xl inline-block mb-6"
        >
          SMARTBOX
        </h1>
        <h1
          class="max-w-1xl text-xl tracking-tight leading-none sm:text-2xl md:text-3xl xl:text-4xl text-center rounded-xl inline-block text-white py-12"
        >
          Your Stress-Free Storage Solution
        </h1>
        <hr />
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <nuxt-link
            class="rounded-md px-5 py-3 m-1 overflow-hidden relative group cursor-pointer bg-white border-2 font-medium text-white"
            to="/#services"
          >
            <span
              class="absolute w-80 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-orange-400 top-1/2 group-hover:h-80 group-hover:-translate-y-32 ease"
            ></span>
            <span
              class="relative text-black font-bold text-lg transition duration-300 group-hover:text-white ease"
              >Explore More</span
            >
          </nuxt-link>
        </div>
      </div>
      <!-- <div class="responsive-container lg:col-span-5 lg:flex lg:justify-center">
        <img src="/img/hero/app.png" alt="mockup" class="responsive-image">
      </div> -->
    </div>
  </section>
</template>

<!-- <style>
.responsive-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.responsive-image {
  width: 80%;
  height: auto;
  max-height: 80vh; 
  object-fit: contain;
}

@media (max-width: 1583px) {
  .responsive-image {
    width: 70%; 
    max-height: 70vh; 
  }
}

@media (max-width: 1024px) {
  .responsive-image {
    width: 60%;
    max-height: 50vh; 
  }
}

@media (max-width: 807px) {
  .responsive-image {
    width: 50%; 
    max-height: 50vh;
  }
}

@media (max-width: 471px) {
  .responsive-image {
    width: 60%; 
    max-height: 120vh; 
  }
}
</style> -->
