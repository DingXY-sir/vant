/**
 * 登录模块
 */
import request from '@/network/request'

export const loginApi = (data) => {
  return request ({
    url:'/mobile/get',
    data
  })
}