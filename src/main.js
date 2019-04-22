import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import ES6Promise from 'es6-promise';
import LOTTE_SVC from '@/common/svc.js'

Vue.config.productionTip = false;
ES6Promise.polyfill();
Vue.prototype.$http = axios;
Vue.prototype.LOTTE_SVC = LOTTE_SVC;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#wrap')
