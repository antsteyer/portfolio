import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi-svg"

export default createVuetify({
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
          primary: "#7FFFD4"
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: "#26946f"
        }
      }
    }
  }
})
