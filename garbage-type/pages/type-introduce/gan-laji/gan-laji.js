// pages/type-introduce/gan-laji/gan-laji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireList: [{
      tip: '应投入相应的收集容器，并保持周边环境整洁'
    }],

    lastList: [{
        list: '餐巾纸'
      },
      {
        list: '卫生间纸'
      },
      {
        list: '尿不湿'
      },
      {
        list: '猫砂'
      },
      {
        list: '狗尿垫'
      },
      {
        list: '污损纸张'
      },
      {
        list: '烟蒂'
      },
      {
        list: '干燥剂'
      },
      {
        list: '污损塑料'
      },
      {
        list: '尼龙制品'
      },
      {
        list: '编织袋'
      },
      {
        list: '防碎气泡罐'
      },
      {
        list: '毛发'
      },
      {
        list: '灰土'
      },
      {
        list: '炉渣'
      },
      {
        list: '橡皮泥'
      },
      {
        list: '太空沙'
      },
      {
        list: '带胶制品（胶水、胶带）'
      },
      {
        list: '花盆'
      },
      {
        list: '毛巾'
      },
      {
        list: '一次性餐具'
      },
      {
        list: '镜子'
      },
      {
        list: '陶瓷制品'
      },
      {
        list: '竹制品（竹篮、竹筷、牙签）'
      },
      {
        list: '成分复杂的制品（伞、笔、眼镜、打火机）'
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})