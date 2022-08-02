import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Modal from "../components/Modal.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainView.vue"),
  },
  {
    path: "/deleteAP",
    name: "deleteAP",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/complain",
    name: "Complain",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComplainView.vue"),
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FAQView.vue"),
  },
  {
    path: "/process",
    name: "Process",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProcessView.vue"),
  },
  {
    path: "/question",
    name: "Question",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyQuestionView.vue"),
  },
  {
    path: "/search/:seq",
    name: "Search",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchView.vue"),
  },
  {
    path: "/secret/:seq",
    name: "Secret",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SecretView.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListView.vue"),
  },
  {
    path: "/modal",
    name: "Modal",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Modal.vue"),
  },
  {
    path: "/accordion",
    name: "Accordion",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Accordion.vue"),
  },
  {
    path: "/accordion_item",
    name: "Accordion_Item",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Accordion_Item.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
