import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const SITE_NAME = "Antoine Steyer"

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: HomeView, meta: { title: "Accueil" } },
  {
    path: "/formation",
    name: "Formation",
    component: () => import("../views/FormationView.vue"),
    meta: { title: "Formation" }
  },
  {
    path: "/experiences",
    name: "Experience",
    component: () => import("../views/ExperienceView.vue"),
    meta: { title: "Expériences" }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
    meta: { title: "Contact" }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach(to => {
  const pageTitle = to.meta.title as string | undefined
  document.title = pageTitle ? `${pageTitle} — ${SITE_NAME}` : SITE_NAME
})

export default router
