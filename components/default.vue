<template>
  <div>
    <header class="sticky top-0 z-1000 shadow-lg bg-orange-400">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="flex items-start">
          <NuxtImg src="/img/logo.png" alt="logo.png" class="w-auto h-16" />
        </NuxtLink>
        <ul class="nav-link flex gap-4 mt-5">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/service">Service</NuxtLink></li>
          <div class="hamburger" @click="toggleMenu">
            <Icon name="mdi:hamburger-menu" />
          </div>
          <!-- <li>
            <UButton
              :icon="
                isDark
                  ? 'i-heroicons-moon-20-solid'
                  : 'i-heroicons-sun-20-solid'
              "
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
          </li> -->
        </ul>
      </nav>
    </header>

    <!-- Output page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<style scoped>
/* .router-link-exact-active {
  color: #12b488;
} */
@media (max-width: 768px) {
  .nav-link {
    display: none;
  }
  .hamburger-menu {
    display: block; /* Show hamburger menu icon */
    cursor: pointer;
  }
}
.hamburger-menu {
  display: none; /* Hide hamburger menu icon by default */
}
</style>
