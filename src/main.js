import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

Vue.use(BootstrapVue)
