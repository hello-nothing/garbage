//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
  },
  onReady: function () {
    wx.hideLoading()
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  }
  
})
