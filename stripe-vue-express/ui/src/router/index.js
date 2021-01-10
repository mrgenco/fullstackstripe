import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SuccessPage from "../views/SuccessPage.vue";
import ErrorPage from "../views/ErrorPage.vue";
import PrebuiltCheckoutPage from "../views/PrebuiltCheckoutPage.vue";
import CustomFlowPage from "../views/CustomFlowPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/success",
    name: "SuccessPage",
    component: SuccessPage,
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: ErrorPage,
  },
  {
    path: "/prebuiltcheckout",
    name: "PrebuiltCheckoutPage",
    component: PrebuiltCheckoutPage,
  },
  {
    path: "/customflow",
    name: "CustomFlowPage",
    component: CustomFlowPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
