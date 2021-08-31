import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载vant组件库
import Vant from 'vant'

//引用vant组件库样式
import 'vant/lib/index.css'

//自动设置REM基准值
import 'amfe-flexible'

//引入全局样式
import './assets/css/index.scss'
//使用vant
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
