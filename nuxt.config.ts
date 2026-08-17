import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2026-08-16',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      titleTemplate: '%s | Cosmo Tech',
      meta: [
        { name: 'description', content: 'Cosmo Tech delivers enterprise IT, interior design and implementation, consultancy, and turnkey project delivery.' },
        { name: 'theme-color', content: '#06182c' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  routeRules: { '/': { prerender: true }, '/about': { prerender: true }, '/services': { prerender: true }, '/technology': { prerender: true }, '/leadership': { prerender: true }, '/contact': { prerender: true } },
  typescript: { strict: true }
})
