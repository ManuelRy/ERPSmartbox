<script setup>
import { useScroll } from "@vueuse/core";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Footer from "~/components/Footer.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div>
    <Scroll-progress style="z-index: 1051 !important" />
    <NavBar style="z-index: 1050 !important; position: relative" />
    <Hero />
      <T&C />
    <Footer />
  </div>
</template>
