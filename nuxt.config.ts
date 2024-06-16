// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  colorMode: {
    preference: 'light',
  },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-aos", "@nuxtjs/supabase"],
  css: [
    '~/assets/css/main.css',
    'animate.css/animate.min.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildDir: '.output', // ensure this matches with your publish directory
  target: 'static', 
  // image: {
  //   dir: 'assets/img'
  // }
})

