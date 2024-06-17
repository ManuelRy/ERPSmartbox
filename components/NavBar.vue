<template>
  <div class="justify-center w-full font-inter">
    <nav
      class="bg-white dark:bg-gray-900 fixed z-1000 top-0 left-0 right-0 w-full border-b border-gray-200 dark:border-gray-600 shadow-md">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse"
          @click.native="setActiveAndScroll('/', '#')">
          <img src="/img/logo.png" class="h-16" alt="Smartbox Logo" />
        </nuxt-link>
        <div class="flex md:hidden">
          <button @click="toggleMenu" data-collapse-toggle="navbar-sticky" type="button"
            class="ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div :class="menuClasses" class="items-center w-full md:flex md:w-auto" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:ml-auto">
            <li>
              <nuxt-link exact to="/" @click.native="setActiveAndScroll('/', '#')" :class="linkClasses('/')"
                class="navbar-link block py-2 px-3 text-lg rounded md:p-0">HOME</nuxt-link>
            </li>
            <li>
              <a @click="handleLinkClick('/about', '#About')" :class="linkClasses('/about')"
                class="navbar-link block py-2 px-3 text-lg rounded md:p-0">ABOUT</a>
            </li>
            <li class="relative" @mouseover="showDropdown" @mouseleave="hideDropdown">
              <a @click="handleLinkClick('/services', '#services')" :class="linkClasses('/services')"
                class="navbar-link block py-2 px-3 text-lg rounded md:p-0">SERVICES
                <svg class="inline w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </a>
              <div id="dropdown"
                class="absolute left-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-black" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <nuxt-link @click.native="setActiveAndScroll('/storage', '#')" :class="linkClasses('/storage')"
                      to="/storage"
                      class="block px-4 py-2 hover:bg-orange-200 dark:hover:bg-gray-600 text-black">Storage</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link @click.native="setActiveAndScroll('/delivery', '#')" :class="linkClasses('/delivery')"
                      to="/delivery"
                      class="block px-4 py-2 hover:bg-orange-200 dark:hover:bg-gray-600 dark:hover:text-white text-black">Delivery</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link @click.native="setActiveAndScroll('/events', '#')" :class="linkClasses('/events')"
                      to="/events"
                      class="block px-4 py-2 hover:bg-orange-200 dark:hover:bg-gray-600 dark:hover:text-white text-black">Events</nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a @click="handleLinkClick('/contact', '#Contact')" :class="linkClasses('/contact')"
                class="navbar-link block py-2 px-3 text-lg rounded md:p-0">CONTACT</a>
            </li>
            <li>
              <nuxt-link exact to="/login" @click.native="setActiveAndScroll('/login', '#')" :class="linkClasses('/login')"
                class="navbar-link block py-2 px-3 text-lg rounded md:p-0">SIGN IN</nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link exact to="/profile" @click.native="setActiveAndScroll('/profile', '#')" :class="linkClasses('/profile')"
                class="navbar-link block py-2 px-3 text-lg rounded md:p-0">PROFILE</nuxt-link>
            </li> -->
            <li>
              <div v-if="user" class="flex">
                <nuxt-link to="/profile" class="mr-5">PROFILE</nuxt-link>
                <a class="cursor-pointer" @click="logout">LOGOUT</a>
              </div>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const dropdownOpen = ref(false);
const route = useRoute();
const activeItem = ref(route.path);

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const logout = async () =>
{
  //1. make user null
  //2. remove the JTW from cookies 

  const {error} = await supabase.auth.signOut();

  try {
    await $fetch('/api/_supabase/session', {
    method: 'POST',
    body: {event: "SIGNED_OUT", session: null}
  })
    
  } catch (error) {
    return console.log(error);

  }

  user.value = null;
  navigateTo('/');
  
  //3. Navigate to homepage

};
watch(() => route.path, (newPath) => {
  activeItem.value = newPath;
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const showDropdown = () => {
  dropdownOpen.value = true;
};

const hideDropdown = () => {
  dropdownOpen.value = false;
};

const setActive = (item) => {
  activeItem.value = item;
};

const setActiveAndScroll = (item, selector) => {
  setActive(item);
  scrollToElement(selector);
};

const handleLinkClick = (item, selector) => {
  setActiveAndScroll(item, selector);
  isMenuOpen.value = false;
};

const scrollToElement = (selector) => {
  const element = document.querySelector(selector);
  const navbarHeight = document.querySelector("nav").offsetHeight;
  if (element) {
    window.scrollTo({
      top: element.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
};

const linkClasses = (item) => {
  return {
    "navbar-link-active":
      activeItem.value === item ||
      (activeItem.value.startsWith("/services") && item === "/services"),
    "navbar-link": true,
  };
};

const menuClasses = computed(() => {
  return {
    hidden: !isMenuOpen.value,
    block: isMenuOpen.value,
    "transition-all": true,
    "duration-300": true,
    "ease-in-out": true,
  };
});
</script>

<style>
.navbar-link {
  position: relative;
  color: black;
  cursor: pointer;
}

.navbar-link:hover,
.navbar-link-active {
  color: orange;
}

.navbar-link::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -6px;
  left: 0;
  background-color: currentColor;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.navbar-link:hover::after,
.navbar-link-active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.relative:hover #dropdown {
  display: block;
}
</style>
