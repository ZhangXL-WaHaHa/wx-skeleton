//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  
  // 跳转到骨架屏页面
  skipSkeleton() {
    wx.navigateTo({
      url: '/pages/skeleton/index',
    })
  }
})
