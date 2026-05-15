import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi-svg"
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n"
import { useI18n } from "vue-i18n"
import { i18n } from "@/i18n"

export default createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n })
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#7FFFD4",
          "on-primary": "#000000"
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#26946f",
          "on-primary": "#000000"
        }
      }
    }
  }
})
