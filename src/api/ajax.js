/*
ajax请求函数模块
返回值 promise对象（异步返回的数据是: response.data）
 */
// 默认暴露一个函数ajax(地址，请求参数-对象的形式，请求方式默认get)
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
  // 高阶函数:接收函数的函数（resolve，reject函数）
  return new Promise(function(resolve, reject) {
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求，外层又套了一个promise
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    //回调
    promise.then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
