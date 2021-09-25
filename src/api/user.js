/**
 * 登录模块
 */
import request from '@/network/request'
//post
export const loginApi = (data) => {
  return request ({
    method:'POST',
    url:'/mobile/get',
    data
  })
}
//get
export const sendSm = (phone) => {
  return request ({
    method:'GRT',
    url:`/mobile/get/${phone}`
  })
}