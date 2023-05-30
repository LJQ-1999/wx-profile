// index.js
// 获取应用实例

const app = getApp()

Page({
  data: {
      
  },
  // 事件处理函数
  bindViewTap() {
  },
  onLoad() {
      app.globalData.music.stop()
  },

  enterProfile() {
    wx.redirectTo({
      url: '/pages/profile/profile',
    })
  }
})
