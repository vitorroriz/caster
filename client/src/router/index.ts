import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Catalog from "../views/catalog/Catalog.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
