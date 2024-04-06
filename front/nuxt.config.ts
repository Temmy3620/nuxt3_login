// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  
  components: [{
    path: '~/components/',
    pathPrefix: false,
  }],
  devtools: { enabled: true },
  
  ssr: false,

  app:{
    head: {
      title: "My App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon",type: "image/x-icon", href: "/favicon.ico" }, 
      ],
    },
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  

  proxy: { // <= 追加
    '/api': 'http://localhost:8080', // <= 追加
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
  
  
  
  
})
