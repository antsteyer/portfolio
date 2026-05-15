import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/formation",
    name: "Formation",
    component: () => import("../views/FormationView.vue")
  },
  {
    path: "/experiences",
    name: "Experience",
    component: () => import("../views/ExperienceView.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue")
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
