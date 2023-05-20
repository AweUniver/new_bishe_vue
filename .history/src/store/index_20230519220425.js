import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 导入axios
import { getUserInfoAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '', // 用户token
    userInfo: {} // 定义用户信息对象
  },
  mutations: {

  },
  actions: {

  },
  getters: {
  },
  // 配置为 vuex 的插件
  plugins: [createPersistedState()]
})
