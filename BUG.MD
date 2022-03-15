## 

> 1:ant-design-vue按需加载的坑的解决 
在vue.config.js中添加如下配置 
https://www.jb51.net/article/186494.htm

```js
css: {
    loaderOptions: {
        less: {
            javascriptEnabled: true
        }
    }
}
```
