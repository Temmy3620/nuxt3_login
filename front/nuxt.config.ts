// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{
    path: '~/components/',
    pathPrefix: false,
  }],
  devtools: { enabled: true },
  
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  

  proxy: { // <= 追加
    '/api': 'http://localhost:8000', // <= 追加
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  
  
  
})
