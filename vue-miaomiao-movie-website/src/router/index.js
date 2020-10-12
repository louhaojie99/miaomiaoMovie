import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/movie",
  },
  {
    path: "/movie",
    name: "Movie",
    component: () => import("../views/movie/index.vue"),
    children: [
      {
        path: "/",
        redirect: "/movie/city",
      },
      {
        path: "city",
        name: "City",
        component: () => import("../views/movie/City.vue"),
      },
      {
        path: "now",
        name: "Now",
        component: () => import("../views/movie/Now.vue"),
      },
      {
        path: "comming",
        name: "Comming",
        component: () => import("../views/movie/Comming.vue"),
      },
      {
        path: "search",
        name: "Search",
        component: () => import("../views/movie/Search.vue"),
      },
    ],
  },
  {
    path: "/cinema",
    name: "Cinema",
    component: () => import("../views/cinema/index.vue"),
    children: [
      {
        path: "/",
        redirect: "/cinema/allcity",
      },
      {
        path: "allcity",
        name: "Allcity",
        component: () => import("../views/cinema/Allcity.vue"),
      },
      {
        path: "brand",
        name: "Brand",
        component: () => import("../views/cinema/Brand.vue"),
      },
      {
        path: "feature",
        name: "Feature",
        component: () => import("../views/cinema/Feature.vue"),
      },
    ],
  },
  // 我的
  {
    path: "/mine",
    name: "Mine",
    component: () => import("../views/mine/index.vue"),
  },
  // 购票
  {
    path: "/ticket",
    name: "Ticket",
    component: () => import("../views/ticket/index.vue"),
  },
  // 详情页
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/detail/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkActiveClass: "active",
});

export default router;
