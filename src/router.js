import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/About",
      name: "About",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
});
