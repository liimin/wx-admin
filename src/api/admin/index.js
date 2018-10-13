import request from '@/plugin/axios'
const path = 'admin'
export function AccountLogin(data) {
  return request({
    url: path + '/login',
    method: 'post',
    data
  })
}
