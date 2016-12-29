# 开发小程序笔记
## 项目配置
app.json 页面路由也配置都在这边
更多 https://mp.weixin.qq.com/debug/wxadoc/dev/?t=20161222

## 一个页面的写的流程
在 app.json 的 page 字段中注册一个页面，如

```
"pages": [
  "pages/main/index"
]
```

index.js 中加
```
Page({
  data: {
    
  },
  foo: function(){}
}
```

index.js 一定要有。
index.wxml 类似 html。一定要有

index.wxss 类似 css。可选

## 支持的标签
* view 视图
* scroll-view 可滚动视图容器
* swiper  滑块视图容器
* block
* text 类似 span
* a

## 指令
### 循环
```
<block wx:for="{{logs}}" wx:for-item="log">
  <text class="log-item">{{index + 1}}. {{log}}</text>
</block>
```

## 事件
## 绑定事件
* bind事件名 如 bindtap
* catch事件名。这个不会冒泡。

更详细见 https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html?t=20161229 

## 生命周期
* onLaunch 项目启动后
* onLoad 页面 load 后

## 页面跳转
```
wx.navigateTo({
  url: '../main/index'
})
```

## 设置数据
Page.setData({
  key: value
})

## 模块加载
CMD 那套

## [API](https://mp.weixin.qq.com/debug/wxadoc/dev/api/)
### 数据缓存
类似 localStroge
wx.getStorage，getStorageSync

## 其他
* globalData 全局数据
* 改了 app.json 的数据需要重新编译
* 发现在项目设置中开了 ES6 转 ES5 有问题。代码不会更新。。。


## 下载开发者工具
[下载地址](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=20161222)