// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
        modules: [
          '@nuxt/content',
          '@nuxtjs/tailwindcss',
          '@nuxt/image-edge',
        ],

        tailwindcss: {
          cssPath: '~/assets/css/main.css',
        },
        content: {
          highlight: {
            theme: 'material-palenight',
          },
        },
        image: {
          cloudinary: {
            baseURL: 'https://res.cloudinary.com/dgawamzxe/image/upload/v1686654357/Portfolio/'
          }
        },


})
