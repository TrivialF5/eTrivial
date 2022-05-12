import { createRouter, createWebHistory } from "vue-router";
import Category from "../views/Category.vue";
import Questions from "../views/Questions.vue";
import Loading from "../views/Loading.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "loading", component: Loading },
    { path: "/category", name: "category", component: Category },
    { path: "/question/:difficulty/:id", name: "question", component: Questions },
  ],
});

export default router;
