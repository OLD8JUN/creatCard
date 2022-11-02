import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import Vuex from 'vuex'
import store from './store'


Vue.use(ElementUI);
Vue.use(Vuex)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
