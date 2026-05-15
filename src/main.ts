import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "@/plugins/vuetify"
import { i18n, initLocale } from "@/i18n"
import "@/theme/main.scss"

initLocale()

createApp(App).use(i18n).use(router).use(vuetify).mount("#app")
