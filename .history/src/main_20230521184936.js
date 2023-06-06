import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.less'
// 导入Element组件
import '@/elementUI/index'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 导入dayjs方法
import dayjs from 'dayjs'
import { fabric } from 'fabric'

import axios from 'axios'

// 全局注册富文本编辑器
Vue.use(VueQuillEditor)

// 全局注册fabric插件
Vue.use(fabric)
// 请求基准路径的配置
axios.defaults.baseURL = 'http://127.0.0.1:8884/api/'
// 将axios挂载到vue原型对象上，在别的组件中通过this.$http发起ajax请求
Vue.prototype.$http = axios
Vue.config.productionTip = false

// 定义时间格式化函数
Vue.prototype.$formatDate = (dateObj) => {
  return dayjs(dateObj).format('YYYY-MM-DD HH:mm:ss')
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
