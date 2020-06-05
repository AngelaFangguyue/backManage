import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'


Vue.prototype.$http = axios.create({
  baseURL: 'https://api.example.com'
});//这里创建了一个axios的实例


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
