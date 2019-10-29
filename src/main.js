import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: About },
  { path: "/about", component: About },
  { path: "/resume", component: Resume },
  { path: "/contact", component: Contact }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
