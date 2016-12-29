//index.js
//获取应用实例
var app = getApp()
var items = [{
  name: '学习'
}, {
  name: '睡觉'
}]
Page({
  data: {
    title: 'Todo MVC',
    items: items,
    currItem: ''
  },
  inputHandler: function(e) {
    debugger
    this.setData({
      currItem: e.detail.value
    })
  },
  onLoad: function () {
    console.log('onLoad1')
    //debugger
  }
})
