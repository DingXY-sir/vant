import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'


Vue.use(Vuex)
const USER_KEY = 'user'

export default new Vuex.Store({
  state: {
    user:getItem(USER_KEY)  //当前登录用户登录状态（token等数据）
  },
  mutations: {
    setUser(state,data){
      state.user = data
      //为了防止页面刷新丢失数据，利用本地储存持久化数据
      setItem(USER_KEY,state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
