import Router from 'vue-router'
import Vue from "vue";
import Home from "./page/Home.vue"
import Detail from "./page/Detail.vue"
Vue.use(Router)

const router = new Router({
 // mode: 'history',
  routes: [
    {path : '/',  name: 'home', component: Home},
    {path : '/:slug',  name: 'detail', component: Detail}
  ]
});

new Vue({
  el: "#app",
  router
});