import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from './plugins/axios'
Vue.config.productionTip = false
Vue.use(Axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
