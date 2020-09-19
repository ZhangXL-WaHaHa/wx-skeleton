// pages/skeleton/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSkeleton: true,  //是否显示骨架屏

    bgImage: 'https://hbimg.huabanimg.com/628753ae20d56bf9720878cb41805d625e38f4c7100f34-TXSo7u_fw658/format/webp', 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置3秒后骨架屏消失
    setTimeout(() => {
      this.setData({
        showSkeleton: false
      })
    }, 3000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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