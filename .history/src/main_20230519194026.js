import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.less'
import '@/elementUI/index'
import fabric from 'fabric'
Vue.config.productionTip = false
Vue.use(fabric)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
