// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    name: '西瓜',
    array: [{
        name: '洗衣液'
      },
      {
        name: '头发'
      },
      {
        name: '书本'
      },
      {
        name: '书包'
      },
      {
        name: '酸奶'
      },
    ],
    resultArray: [{
        name: '洗衣液',
        type: '【湿垃圾】',
        answer: '干垃圾'
      },
      {
        name: '头发',
        type: '【湿垃圾】',
        answer: '干垃圾'
      },
      {
        name: '书本',
        type: '【湿垃圾】',
        answer: '干垃圾'
      },
      {
        name: '书包',
        type: '【湿垃圾】',
        answer: '干垃圾'
      },
      {
        name: '酸奶',
        type: '【湿垃圾】',
        answer: '干垃圾'
      },
    ],
    testResult: true,
    grade: '100'

  },

  clickButton: function() {
    let that = this;
    let i = that.data.num;
    that.data.num = that.data.num + 1;
    console.log(that.data.array, i)
    that.setData({
      num: that.data.num,
      name: that.data.array[i].name
    })
    if (that.data.num === that.data.array.length) {
      that.setData({
        testResult: false
      })
    }
  },
  clickAgain: function() {
    this.setData({
      testResult: true,
      num: 1
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