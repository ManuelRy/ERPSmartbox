<script setup>
const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <NuxtLink @click="scrollTop">
        <button
            class="fixed z-50 bottom-5 right-5 p-4 border-0 w-12 h-14 rounded-md shadow-lg bg-blue-900 hover:bg-orange-500 text-white text-lg font-semibold transition-colors duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
            </svg>
            <span class="sr-only">Go to top</span>
        </button>
    </NuxtLink>
</template>
