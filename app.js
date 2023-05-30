// app.js
App({
    onLaunch() {
        this.globalData.music = wx.getBackgroundAudioManager()
    },
    globalData: {
        music: {}
    },
    onHide() {
        this.globalData.music.pause()
    }
})