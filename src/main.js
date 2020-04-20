import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/filters/formatMoney'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueMoment from 'vue-moment'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueMoment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
