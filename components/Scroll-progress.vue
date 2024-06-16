<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", function () {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressBar = document.getElementById("scroll-progress");
      const progress = (scrolled / scrollableHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  }
});
</script>

<template>
  <div id="scroll-progress" class="bg-blue-900 h-1 fixed top-0 left-0 z-50">
    
  </div>
</template>
