// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'fr',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        vueI18n: {
            fallbackLocale: 'fr',
            messages: {
                en: {
                  welcome: 'Welcome'
                },
                fr: {
                  welcome: 'Bienvenue'
                },
            }
        }
    }
})
