Page({

  /**
   * 页面的初始数据
   */
  data: {
    // searchText: "搜索",
    // id: 10,
    // navs: [{
    //     id: 1,
    //     name: "项目"
    //   },
    //   {
    //     id: 2,
    //     name: "文件"
    //   },
    //   {
    //     id: 3,
    //     name: "编辑"
    //   },
    //   {
    //     id: 4,
    //     name: "工具"
    //   }
    // ],
    // message: 'Hello MINA!',
    // // flag: false
    // flag: true,
    // a: 1,
    // b: 2,
    // c: 3,
    // length: 6,
    // name: "MINA",
    // /* 两层循环 */
    // tests: [{
    //   id: 1,
    //   values: ["😀", "/(ㄒoㄒ)/~~", "佛系"]
    // }, {
    //   id: 1,
    //   values: ["😀", "/(ㄒoㄒ)/~~", "佛系"]
    // }]
    swiper_list: [],
    navs:[],
    floor_list:[]
  },
  handleTap: function (e) {
    console.log(e);
    console.log(e.currentTarget.dataset.value);
    console.table(e);
    console.log(e.currentTarget.checked)
  },
  handleInput: function (e) {
    console.table(e);

  },
  handleCheckboxChange: function (e) {
    console.table(e);
    console.log(e.detail)
  },
  getUserInfo: function (e) {
    console.log(e);

  },
  //用于父子传值 子向父传值
  handleChildEvent: function (e) {
    console.log("进入到父节点事件中....");
    console.table(e);
    console.log(e.detail);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        // setData 设置属性
        //  this.swiper_list = res.data.message
        //  console.log(this.swiper_list)
        this.setData({
          swiper_list: res.data.message
        })
      }
    })

    // 导航条
    wx.request({
      url:'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: (res) => {
        // setData 设置属性
        //  this.navs = res.data.message
         console.log(res);
        this.setData({
          navs:res.data.message
        })
      }
    })

    // 楼层
    wx.request({
      url:
        'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: (res) => {
        // setData 设置属性
        //  this.floor = res.data.message
        console.log(res);
        this.setData({
          floor_list: res.data.message
        })
      }
    })
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