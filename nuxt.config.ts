import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },
  css: ['~/assets/css/tailwind.css'],
  components: [
    { path: '~/components/admin', pathPrefix: false, global: true },
    { path: '~/components/manager', pathPrefix: false, global: true },
    { path: '~/components/private', pathPrefix: false, global: true },
    { path: '~/components/public', pathPrefix: false, global: true },
    { path: '~/components/ui', pathPrefix: false, global: true }
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
