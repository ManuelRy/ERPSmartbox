<template>
  <section
    class="bg-customOrange-400 dark:bg-gray-900 relative mt-24 pb-1 mb-12 font-poppins"
  >
    <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="flex flex-col md:flex-row">
        <div class="relative md:w-1/2 w-full md:transform md:-translate-y-12">
          <img
            src="/img/app.png"
            alt="ComingSoonApp"
            class="w-full max-w-md mx-auto transform -translate-y-12"
          />
        </div>
        <div class="md:w-1/2 w-full mt-10 text-center md:text-left md:ml-10">
          <h1 class="text-5xl font-bold text-white">COMING SOON!</h1>
          <p class="mt-12 text-2xl font-normal text-white">
            Secure Your Belongings with SmartBox
          </p>
          <p class="mt-8 text-2xl font-normal text-white">
            Experience the convenience of a digital locker through SmartBox app.
          </p>
          <p class="mt-8 text-2xl font-medium text-white">Will be available on both</p>
          <div class="-mt-8 flex justify-center md:justify-start space-x-1">
            <img src="/img/app_store.svg" alt="App Store" class="w-36" />
            <img src="/img/google.svg" alt="Google Play" class="w-36" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ComingSoon",
};
</script>

<style>
/* Custom styles if needed */
</style>
