import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  hashbang: true,
  history: true,
  transitionOnLoad: true,
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['../views/Login.vue'], resolve);
      }
    }, {
      path: '/index',
      name: 'index',
      component: function (resolve) {
        require(['../views/index.vue'], resolve);
      }
    }
  ]
})
