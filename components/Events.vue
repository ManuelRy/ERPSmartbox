<template>
  <section class="bg-customOrange-300 dark:bg-gray-900 font-poppins">
    <div class="container mx-auto py-10 px-4 sm:py-20 sm:px-6 lg:px-48">
      <h1
        class="p-4 mb-6 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-blue-900 dark:text-white text-center"
      >
        Events
      </h1>
      <p
        class="text-gray-800 dark:text-gray-300 text-center text-balance font-medium mb-6 sm:mb-12 text-lg sm:text-xl lg:text-2xl"
      >
        SmartBox provides a self-storage service at events, meetings, concerts
        and many more with full support from our teams.
      </p>
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10"
      >
        <h1
          class="p-4 mb-6 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold text-orange-500 dark:text-white text-center"
        >
          Contact Us for More Information
        </h1>
        <div
          class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <p
            class="text-gray-800 dark:text-gray-300 text-center font-medium text-base sm:text-lg lg:text-xl flex items-center"
          >
            <Icon name="fa6-solid:envelope" class="mr-2" />
            hello.wearesmartbox@gmail.com
          </p>
          <br />
          <p
            class="text-gray-800 dark:text-gray-300 text-center font-medium text-base sm:text-lg lg:text-xl flex items-center"
          >
            <Icon name="fa6-solid:phone" class="mr-2" />
            (+855) 10 505 302
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientBG 15s ease infinite;
}
</style>
