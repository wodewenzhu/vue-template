import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'

import './assets/js/rem'

// console.log(Vue.prototype.constructor.name)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')