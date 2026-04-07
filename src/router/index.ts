import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/formation",
    name: "Formation",
    component: () => import("../views/Formation.vue")
  },
  {
    path: "/experiences",
    name: "Experience",
    component: () => import("../views/Experience.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
