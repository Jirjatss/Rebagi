import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import Register from "../view/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
