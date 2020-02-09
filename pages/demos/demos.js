// pages/demos/demos.js
import { request } from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],//分类数据
    rightContent: [],
    selectIndex: 0, //默认选中第一个分类
    scroll_top: 0 //滚动条的位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  handleItemClick: function (e) {
    const index = e.currentTarget.dataset.index;
    const scroll_top = 0;
    this.setData({
      rightContent: this.data.categories[index].children,
      selectIndex: index,
      scroll_top: scroll_top
    })
  },
  /* 
  1. 每次拿到数据之后，先把数据存在存在缓存里面 storage
  同时设置一下缓存时间
  2. 当下次进来的时候
    a.如果在有效时间内容，我们就不发请求；
    b.如果过了时间，那么就再次请求数据
   */
  getCategories: async function () {
    const categories = await request({
      url: "/categories"
    });
    const rightContent = categories[0].children;
    const selectIndex = 0;
    wx.setStorageSync("carts", {
      time: Date.now(),
      data: categories
    })
    this.setData({
      categories, rightContent, selectIndex
    })
    console.log(categories);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  /* 
      1. 先从缓存中获取数据
      2. 判断数据是否过期，如果过期重新请求数据
      3. 如果没有过期 直接使用数据
   */
  onShow: function () {
    let carts = wx.getStorageSync("carts");
    if (!carts) {
      this.getCategories();
    } else {
      // 判断一下是否时间过期 10s 
      if (Date.now() - carts.time > 1000 * 10) {
        this.getCategories();
      } else {
        //不过期 同时又请求过数据
        let categories = carts.data;
        const rightContent = categories[0].children;
        const selectIndex = 0;
        this.setData({
          categories, rightContent, selectIndex
        })

      }
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})