//app.js
App({
  onLaunch: function () {
    this.globalData.socketConnected || this.connectSocket()

    // wx.getSystemInfo({
    //   success: (res) => {
    //     console.log(res)
    //   },
    // })
  },

  globalData: {
    serverAddress: 'http://192.168.31.154:7777',
    MQAddress: 'ws://114.212.84.64:8083/webSocket',
    socketConnected: false,
  },

  connectSocket() {
    wx.onSocketOpen(() => {
      this.globalData.socketConnected = true
    })
    // wx.connectSocket({ url: this.globalData.MQAddress })
  },
})
