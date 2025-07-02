// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['nuxt-zod-i18n', '@nuxtjs/i18n', '@nuxt/ui-pro', ],

  zodI18n: {
    localeCodesMapping: {
      'en-US': 'en',
      'en-GB': 'en',
      'ru-RU': 'ru'
    }
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ru', language: 'ru-RU' }
    ],
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieCrossOrigin: true
    }
  },
})