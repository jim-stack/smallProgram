import { request } from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_list: [],
    navs: [],
    floor_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiper_list();
    this.getNavs();
    this.getFloor_list();
  },
  
  // 实现首页轮播图
  //1. 要来拿到轮播图数据
  //2. 配合使用一下  async await 
  getSwiper_list: async function (e) {
    // wx.request({
    //   url: 'https://www.linweiqin.cn/api/public/v1/home/swiperdata',
    //   success: (res) => {
    //       console.log(res.data.message);
    //       this.setData({
    //         swiper_list:res.data.message
    //       })
    //   }
    // })
    const swiper_list = await request({
      url: "/home/swiperdata"
    });
    this.setData({
      swiper_list
    })

  },
  //获取分类导航数据
  getNavs: async function (e) {
    const navs = await request({
      url: "/home/catitems"
    });
    this.setData({
      navs
    })
    console.log(navs);
  },
  // 获取楼层数据
  getFloor_list: async function (e) {
    const floor_list = await request({
      url: "/home/floordata"
    });
    console.log(floor_list);
    this.setData({
      floor_list
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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