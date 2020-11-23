/*
包含n个接口请求函数的模块,函数的返回值:promise
一般暴露多个所以不会写default
 */
import ajax from './ajax.js'
// 1、根据经纬度获取位置详情
export function reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export function reqFoodTypes = () => ajax(`/index_category`)
// 3、根据经纬度获取商铺列表
// export function reqShops = (a,b) => ajax(`/shops`,{longitude:a,latitude:b})
export function reqShops = (longitude,latitude) => ajax(`/shops`,{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表
export function reqSearchshop = (geohash,keyword) => ajax(`/search_shops`,{geohash,keyword})
// 5、获取一次性验证码
export function reqCaptcha = () => ajax(`/captcha`)
// 6、用户名密码登陆
export function reqLoginpwd = (name,pwd,captcha) => ajax(`/login_pwd`,{name,pwd,captcha},'POST')
// 7、发送短信验证码
export function reqSendcode = (phone) => ajax(`/sendcode`,{phone})
// 8、手机号验证码登陆
export function reqLoginsms = (phone,code) => ajax(`login_sms`,{phone,code},'POST')
// 9、根据会话获取用户信息
export function reqUserinfo = () => ajax(`/userinfo`)
// 10、用户登出
export function reqLogout = () => ajax(`/logout`)
