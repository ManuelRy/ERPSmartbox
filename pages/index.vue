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
    <!-- <Preloader /> -->
    <Scroll-progress style="z-index: 1051 !important" />
    <NavBar style="z-index: 1050 !important; position: relative" />
    <Hero />
    <div class="content-container">
      <About-us id="About" />
      <Services />
    </div>
    <ComingSoon />
    <Contact id="Contact" />
    <Scroller />
    <Footer />
  </div>
</template>

<style scoped>
.content-container {
  margin-left: 50px;
  margin-right: 50px;
}
</style>
