// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultList: [{
      title: '瓜皮',
      type: '湿垃圾',
      url: '../type-introduce/shi-laji/shi-laji'
    }, {
      title: '西瓜瓜皮',
        type: '湿垃圾',
        url: '../type-introduce/shi-laji/shi-laji'
    }, {
      title: '西瓜籽',
        type: '湿垃圾',
        url: '../type-introduce/shi-laji/shi-laji'
    }, {
      title: '西瓜霜',
        type: '有害垃圾',
        url: '../type-introduce/shi-laji/shi-laji'
    }, {
      title: '瓜皮',
        type: '湿垃圾',
        url: '../type-introduce/shi-laji/shi-laji'
    }, {
      title: '瓜皮',
        type: '湿垃圾',
        url: '../type-introduce/shi-laji/shi-laji'
    }, {
      title: '瓜皮',
        type: '湿垃圾',
        url: '../type-introduce/shi-laji/shi-laji'
    }, ],
    result: false

  },
  getInputValue: function(e) {
    let that = this;
    console.log(e.detail)
    that.setData({
      result: true
    })
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