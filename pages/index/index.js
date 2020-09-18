//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  
  methods: {
    // 跳转到骨架屏页面
    viewSkeleton() {
      wx.navigateTo({
        url: '/pages/skeleton/index',
      })
    }
  }
})
