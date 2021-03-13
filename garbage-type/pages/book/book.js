// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    list: ['可回收物', '有害垃圾', '湿垃圾/厨余/餐厨/易腐垃圾', '干垃圾/其他垃圾', '装修垃圾', '大件垃圾'],
    onelist: [{
      list: '纸板箱'
    },
    {
      list: '报纸'
    },
    {
      list: '废弃书本'
    },
    {
      list: '快递纸袋'
    },
    {
      list: '打印纸'
    },
    {
      list: '信封'
    },
    {
      list: '广告单'
    },
    {
      list: '纸塑复合包装（利乐包）'
    }
    ],
    twolist: [{
      list: '荧光（日光）灯管'
    },
    {
      list: '卤素灯'
    }
    ],
    threelist: [{
      list: '糕饼'
    },
    {
      list: '糖果'
    },
    {
      list: '风干食品（肉干、红枣、中药材）'
    },
    {
      list: '粉末类食品（冲泡饮料、面粉）'
    },
    {
      list: '宠物饲料'
    }
    ],
    fourlist: [{
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
    fivelist: [{
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
    sixlist: [{
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
  //tab框
  selected: function (e) {

    console.log(e)
    let that = this;
    let index = e.currentTarget.dataset.index
    console.log(index)
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1
      })
    } else if (index == 2) {
      that.setData({
        selected: 2
      })
    } else if(index ==3){
      that.setData({
        selected: 3
      })
    } else if (index == 4) {
      that.setData({
        selected: 4
      })
    } else if (index == 5) {
      that.setData({
        selected: 5
      })
    }
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