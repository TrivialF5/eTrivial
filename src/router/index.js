import { createRouter, createWebHistory } from "vue-router";
import Category from "../views/Category.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "category", component: Category },
  ],
});

export default router;
