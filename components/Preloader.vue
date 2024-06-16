<template>
  <div
    v-if="isLoading"
    class="preloader relative flex justify-center items-center bg-white"
  >
    <div
      class="absolute animate-spin rounded-full h-80 w-80 border-t-4 border-b-4 border-orange-500"
    ></div>
    <img
      :src="'/img/logo.png'"
      class="rounded-full h-auto w-72 preloader-image animate-fade-in delay-1000"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: 1.5s;
}

.preloader-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animate-fade-in {
  animation: fade-in 1s;
}
.animate-fade-out {
  animation: fade-out 1s;
}
</style>
