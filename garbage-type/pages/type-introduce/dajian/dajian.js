// pages/type-introduce/dajian/dajian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireList: [{
        tip: '询问物业该如何投放'
      },
      {
        tip: '预约回收经营者上门回收'
      },
    ],

    lastList: [{
        list: '床'
      },
      {
        list: '床板'
      },
      {
        list: '床头柜'
      },
      {
        list: '化妆台'
      },
      {
        list: '桌子'
      },
      {
        list: '椅子'
      },
      {
        list: '凳子'
      },
      {
        list: '油烟机'
      },
      {
        list: '沙发'
      },
      {
        list: '茶几'
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