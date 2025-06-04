// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons'
  ],
  app: {
    head: {
      script: [
        {
        src: 'https://contra.com/static/embed/sdk.js',
        async: true
      }
    ]
    }
  },
  lucide: {
    namePrefix: 'LIcon'
  }
})