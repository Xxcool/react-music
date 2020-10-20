
import axios from 'axios'

// 设置请求代理路径
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true; //配置为true
axios.interceptors.response.use(res => res)

export default function request (url, data = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    let p = null
    if (method === 'get') { // 如果是get请求
      p = axios.get(url, {
        params: data
      })
    } else {
      p = axios.post(url, data)
    }
    p.then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
