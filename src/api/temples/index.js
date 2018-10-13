import request from '@/plugin/axios'
const path = 'temples'
export function AddTemple(data) {
  return request({
    url: path + '/add',
    method: 'post',
    data
  })
}
