// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  plugins: ['~/plugins/supabase.js'],
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
  
  // image: {
  //   dir: 'assets/img'
  // }
})

