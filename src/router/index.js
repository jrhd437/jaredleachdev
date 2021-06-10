import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Skills.vue"),
  },
  {
    path: "/education",
    name: "Education",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Education.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
