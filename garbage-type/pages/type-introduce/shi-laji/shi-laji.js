// pages/type-introduce/shi-laji/shi-laji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireList: [{
      tip: '应从产生时就与其他品种垃圾分开收集，投放前尽量沥干水分'
    },
    {
      tip: '盛放此类垃圾的容器，如塑料袋等，在投放时应予去除'
    },
    {
      tip: '有包装物的此类垃圾应将包装物去除后分类投放，包装物应投放到对应的可回收物或干垃圾/其他垃圾收集容器'
    }
    ],
    oneList: [{
      list: '谷物及其加工食品（米、米饭、面、面包、豆类）'
    },
    {
      list: '肉蛋及其加工食品（鸡、鸭、猪、牛、羊肉、蛋、动物内脏、腊肉、午餐肉、蛋壳）'
    },
    {
      list: '水产及其加工食品（鱼、鱼鳞、虾、虾壳、鱿鱼）'
    },
    {
      list: '蔬菜（绿叶菜、根茎蔬菜、菌菇）'
    },
    {
      list: '调料'
    },
    {
      list: '酱料'
    }
    ],
    twoList: [{
      list: '火锅汤底（沥干后的固体废弃物）'
    },
    {
      list: '鱼骨'
    },
    {
      list: '碎骨'
    },
    {
      list: '茶叶渣'
    },
    {
      list: '咖啡渣'
    }
    ],
    threeList: [{
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
    fourList: [{
      list: '水果果肉（椰子肉）'
    },
    {
      list: '水果果皮（西瓜皮、橘子皮、苹果皮）'
    },
    {
      list: '水果茎枝（葡萄枝）'
    },
    {
      list: '果实（西瓜籽）'
    }
    ],
    fiveList: [{
      list: '家养绿枝'
    },
    {
      list: '花卉'
    },
    {
      list: '花瓣'
    },
    {
      list: '枝叶'
    },
    ],
    lastList: [{
      list: '中药药渣'
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