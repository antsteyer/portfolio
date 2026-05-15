import { watch } from "vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"
import { i18n } from "@/i18n"

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: HomeView, meta: { titleKey: "meta.home" } },
  {
    path: "/formation",
    name: "Formation",
    component: () => import("../views/FormationView.vue"),
    meta: { titleKey: "meta.formation" }
  },
  {
    path: "/experiences",
    name: "Experience",
    component: () => import("../views/ExperienceView.vue"),
    meta: { titleKey: "meta.experience" }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
    meta: { titleKey: "meta.contact" }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

function applyDocumentTitle(): void {
  const titleKey = router.currentRoute.value.meta.titleKey as string | undefined
  const siteName = i18n.global.t("common.siteName")
  document.title = titleKey ? `${i18n.global.t(titleKey)} — ${siteName}` : siteName
}

router.afterEach(applyDocumentTitle)
watch(i18n.global.locale, applyDocumentTitle)

export default router
