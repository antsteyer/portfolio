import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import { routes } from "@/router/routes"
import { createAppVuetify } from "@/plugins/vuetify"
import { i18n, initLocale } from "@/i18n"
import "@/theme/main.scss"

export const createApp = ViteSSG(App, { routes }, ({ app, isClient }) => {
  app.use(i18n)
  app.use(createAppVuetify())
  if (isClient) initLocale()
})
