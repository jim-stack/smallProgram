/* 
  1. 加遮罩
  2. 配置通用的Url
  3. 使用promise 进行改造
 */
import {
  BASE_URL
} from "./urls.js"
export const request = (params) => {
  wx.showLoading({
    title: '正在加载中',
    mask: true
  })
  return new Promise(function(resolve, reject) {
    wx.request({
      ...params,
      url: BASE_URL + params.url,
      success: (res) => {
        resolve(res.data.message);
      },
      fail: (err) => {
        reject(err);
      },
      complete:()=>{
        wx.hideLoading();
      }
    });
  })

}