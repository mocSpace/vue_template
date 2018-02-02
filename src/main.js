// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import axios from 'axios'
// mint-ui样式
import 'mint-ui/lib/style.css'
// 同步单页路由与数据中心
import router from './router'
import store from './vuex/index'
// 验证规则
import Vuerify from 'vuerify'
import Rules from './verifyRules'

// 网络请求配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
// 添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json'
    };
    console.log("请求前拦截:");
    store.dispatch('showLoading');
    return config
  },
  err => {
    return Promise.reject(err)
  }
);
//添加一个返回拦截器
axios.interceptors.response.use(function (response) {
  //对返回的数据进行一些处理，比如说把loading动画关掉
  store.dispatch('hideLoading');
  return response;
}, function (error) {
  //对返回的错误进行一些处理
  store.dispatch('hideLoading');
  return Promise.reject(error);
});
Vue.prototype.$http = axios;


Vue.use(Vuex);
Vue.use(Vuerify, Rules);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


/**
 * 备注提醒：
 *
 * HTTP请求相关
 *  Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
 *  Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
 *  在一个Vue实例内使用
 *  this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);
 *  this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
 *
 * 显示隐藏加载中提示
 * this.$store.dispatch('showLoading');
 * this.$store.dispatch('hideLoading')
 *
 */
