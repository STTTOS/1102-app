import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components/element'
import apis from './apis';

Vue.config.productionTip = false
Vue.prototype.$apis = apis;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
