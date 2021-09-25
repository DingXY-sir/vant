//封装axios
import axios from 'axios'

//引用vuex文件，设置token
import store from '@/store/index'

const request = axios.create({
    baseURL: '/api',
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前设置token
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `token ${user.token}`
  }
  console.log('0000')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});
export default request