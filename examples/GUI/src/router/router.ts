import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Index from "@/components/Index.vue";
import NotFound from "@/components/NotFound.vue";
import SearchMusic from "@/components/SearchMusic.vue";
import { createWebHistory, createRouter, createWebHashHistory, RouterOptions, RouteRecordRaw } from "vue-router";
import Netease from "@/components/Netease.vue";
import Download from "@/components/Download.vue";
import Cloud from "@/components/Cloud.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "home",
        alias: "/",
        component: Home,
      },
      {
        path: "search",
        component: SearchMusic,
      },
      {
        path: "netease",
        component: Netease,
      },
      {
        path: "download",
        component: Download,
      },
      {
        path: "cloud",
        component: Cloud,
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
} as RouterOptions);

export default router;
