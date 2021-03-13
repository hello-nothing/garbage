// pages/type-introduce/zhuangxiu/zhuangxiu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireList: [{
        tip: '询问物业如何投放'
      },
      {
        tip: '投放到指定的装修垃圾堆放场所'
      }
    ],

    lastList: [{
        list: '浴缸'
      },
      {
        list: '废弃马桶'
      },
      {
        list: '石灰'
      },
      {
        list: '石头'
      },
      {
        list: '水泥'
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