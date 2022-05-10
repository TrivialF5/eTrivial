import { createRouter, createWebHistory } from "vue-router";
import Category from "../views/Category.vue";
import Questions from "../views/Questions.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "category", component: Category },
    { path: "/question/:id", name: "question", component: Questions },
  ],
});

export default router;
