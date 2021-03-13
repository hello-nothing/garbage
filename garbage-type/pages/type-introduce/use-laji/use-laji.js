// pages/type-introduce/use-laji/use-laji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireList: [{
        tip: '尽量保持清洁干燥，避免污染'
      },
      {
        tip: '废纸应保持平整'
      },
      {
        tip: '立体包装物应清空内容物，清洁后压扁投放'
      },
      {
        tip: '废玻璃制品应轻投轻放'
      },
      {
        tip: '有尖锐边角的应包裹后投放'
      },
    ],
    oneList: [{
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
    twoList: [{
        list: '塑料瓶罐及瓶盖（饮料瓶、奶瓶、洗发水瓶、乳液罐）'
      },
      {
        list: '食用油桶'
      },
      {
        list: '塑料碗（盆）'
      },
      {
        list: '塑料盒子（食品保鲜盒、收纳盒）'
      },
      {
        list: '塑料玩具（塑料积木、塑料模型）'
      },
      {
        list: '塑料衣架'
      },
      {
        list: '施工安全帽'
      },
      {
        list: 'PE塑料'
      },
      {
        list: 'pvc'
      },
      {
        list: '亚克力板'
      },
      {
        list: '塑料卡片'
      },
      {
        list: '密胺餐具'
      },
      {
        list: 'kt板'
      },
      {
        list: '泡沫（泡沫塑料、水果网套）'
      }
    ],
    threeList: [{
        list: '食品及日用品玻璃瓶罐（调料瓶、酒瓶、化妆品瓶）'
      },
      {
        list: '玻璃杯'
      },
      {
        list: '窗玻璃'
      },
      {
        list: '玻璃制品（放大镜、玻璃摆件）'
      },
      {
        list: '碎玻璃'
      }
    ],
    fourList: [{
        list: '金属瓶罐（易拉罐、食品罐/桶）'
      },
      {
        list: '金属厨具（菜刀、锅）'
      },
      {
        list: '金属工具（刀片、指甲剪、螺丝刀）'
      },
      {
        list: '金属制品（铁钉、铁皮、铝箔）'
      }
    ],
    fiveList: [{
        list: '旧衣服'
      },
      {
        list: '床单'
      },
      {
        list: '枕头'
      },
      {
        list: '棉被'
      },
      {
        list: '皮鞋'
      },
      {
        list: '毛绒玩具（布偶）'
      },
      {
        list: '棉袄'
      },
      {
        list: '包'
      },
      {
        list: '皮带'
      },
      {
        list: '丝绸制品'
      }
    ],
    lastList: [{
        list: '电路板（主板、内存条）'
      },
      {
        list: '充电宝'
      },
      {
        list: '电线'
      },
      {
        list: '插头'
      },
      {
        list: '木制品（积木）'
      }
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