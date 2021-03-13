// pages/type-introduce/harm-laji/harm-laji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireList: [{
      tip: '注意轻放'
    },
    {
      tip: '易破损的应连带包装或包裹后投放'
    },
    {
      tip: '废弃药品宜连带包装一并投放'
    },
    {
      tip: '杀虫剂等压力罐容器，应排空内容物后投放'
    }
    ],
    oneList: [{
      list: '充电电池'
    },
    {
      list: '镍镉电池'
    },
    {
      list: '铅酸电池'
    },
    {
      list: '蓄电池'
    },
    {
      list: '纽扣电池'
    }
    ],
    twoList: [{
      list: '荧光（日光）灯管'
    },
    {
      list: '卤素灯'
    }
    ],
    threeList: [{
      list: '过期药物'
    },
    {
      list: '药物胶囊'
    },
    {
      list: '药片'
    },
    {
      list: '药品内包装'
    }
    ],
    fourList: [{
      list: '废油漆桶'
    },
    {
      list: '染发剂壳'
    },
    {
      list: '过期的指甲油'
    },
    {
      list: '洗甲水'
    }
    ],
    fiveList: [{
      list: '废矿物油及其包装物'
    }
    ],
    sixList: [{
      list: '水银血压计'
    },
      {
        list: '水银体温计'
      }, ,
      {
        list: '水银温度计'
      },
    ],
    sevenList: [{
      list: '老鼠药（毒鼠强）'
    },
    {
      list: '杀虫剂雾罐'
    }
    ],
    lastList: [{
      list: 'X光片等感光胶片'
    },
    {
      list: '相片底片'
    }
    ],


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
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