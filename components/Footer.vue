<template>
  <footer
    class="bg-customGray-300 dark:bg-gray-900 overflow-hidden font-poppins"
    data-aos="fade-up"
  >
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between md:px-12">
        <div class="mb-6 md:mb-0 flex flex-col items-start">
          <a href="/" class="flex items-center">
            <img
              src="/img/SmartBox_Logo.png"
              class="w-40 h-40 -ml-1.5"
              alt="SmartBox Logo"
            />
          </a>
          <h2 class="mt-2 mb-6 text-lg font-medium text-left">Contact Us</h2>
          <p class="mb-6 flex items-center">
            <Icon name="fa6-solid:envelope" class="mr-2" />
            hello.wearesmartbox@gmail.com
          </p>
          <p class="mb-6 flex items-center">
            <Icon name="fa6-solid:location-dot" class="mr-2" />
            Russian Federation Blvd (110), Phnom Penh 120404
          </p>
          <p class="mb-6 flex items-center">
            <Icon name="fa6-solid:phone" class="mr-2" />
            (+855) 10 505 302
          </p>
        </div>
        <div
          class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-7"
        >
          <div>
            <h2
              class="mb-6 text-md font-bold text-black uppercase dark:text-white"
            >
              Service
            </h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="/storage" class="hover:text-orange-400">Storage</a>
              </li>
              <li class="mb-4">
                <a href="/delivery" class="hover:text-orange-400">Delivery</a>
              </li>
              <li class="mb-4">
                <a href="/events" class="hover:text-orange-400">Events</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-md font-bold text-black uppercase dark:text-white"
            >
              About
            </h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <nuxt-link to="/#About"
                  ><a class="hover:text-orange-400">About Us</a></nuxt-link
                >
              </li>
              <li class="mb-4">
                <a href="/" class="hover:text-orange-400">Careers</a>
              </li>
              <li class="mb-4">
                <a href="/" class="hover:text-orange-400">News</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-md font-bold text-black uppercase dark:text-white"
            >
              Terms
            </h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li>
                <a href="/terms" class="hover:text-orange-400"
                  >Terms & Conditions</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="md:px-12">
        <hr class="my-6 border-black dark:border-white lg:my-8" />
      </div>
      <div class="sm:flex sm:items-center sm:justify-between md:px-12">
        <div
          class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <h2 class="text-lg font-bold text-left">Follow Us</h2>
          <ul class="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61556244512123&mibextid=LQQJ4d"
                class="hover:text-orange-400"
              >
                <Icon name="gravity-ui:logo-facebook" class="w-8 h-8" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/smartbox_cambodia?igsh=MWtzZzhraHh1YjRqbQ=="
                class="hover:text-orange-400"
              >
                <Icon name="radix-icons:instagram-logo" class="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-6 sm:mt-0 text-center sm:text-left">
          <span class="text-sm text-black dark:text-gray-400">
            © 2024
            <a href="https://flowbite.com/" class="hover:underline">SmartBox™</a
            >. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
