<template>
    <Hero/>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Footer from "~/components/Footer.vue";
import debounce from 'lodash/debounce';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>