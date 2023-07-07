import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue"),
    redirect: "/tools",
    children: [
      {
        path: "/tools",
        name: "tools",
        component: () => import("@/views/tools/index.vue"),
      },
      {
        path: "/document",
        name: "document",
        component: () => import("@/views/document/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
