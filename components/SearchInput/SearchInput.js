// components/SearchInput/SearchInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "搜索"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function (e) {
      console.log("进入 searchInput 的点击事件");
      this.triggerEvent('myChildEvent', '😄');
    }
  }
})
