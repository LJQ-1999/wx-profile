// pages/profile/profile.js
const globalData = getApp()
const music = globalData.globalData.music
Page({

    /**
     * 页面的初始数据
     */
    data: {
        play: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        music.title = "卡农"
        music.src = ""
        music.play()
        music.onEnded(() => {
            music.title = "卡农"
            music.src = ""
            music.play()
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        music.play()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        music.stop()
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    playMusic() {
        if (this.data.play == true) {
            this.setData({
                play: false
            })
            music.pause()
        } else {
            this.setData({
                play: true
            })
            music.play()
        }
    },

    myWx() {
        wx.previewImage({
            urls: [''],
        })
    },

    home() {
        wx.redirectTo({
            url: '../home/home',
        })
    }
})