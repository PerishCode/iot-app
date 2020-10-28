const {
  globalData: { statusBarHeight, navigationBarHeight },
} = getApp()

Component({
  properties: {},
  data: {},
  ready() {
    const { back, to } = this.__proto__

    wx.$ = {}
    wx.$.navigation = {
      back: back.bind(this),
      to: to.bind(this),
    }

    this.setData({
      statusBarHeight,
      navigationBarHeight,
      pageStack: ['home'],
      currentPage: 'home',
      parameters: {},
    })
  },
  methods: {
    back() {
      const { pageStack } = this.data

      if (pageStack.length > 1) {
        pageStack.splice(-1, 1)
        context.setData({
          pageStack,
          currentPage: pageStack[pageStack.length - 1],
        })
      }
    },
    to(page, parameters) {
      this.setData({
        parameters,
        pageStack: this.data.pageStack.concat([page]),
        currentPage: page,
      })
    },
  },
})
