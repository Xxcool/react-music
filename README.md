> 根据github上面react项目进行react的学习[点击传送](https://github.com/QiaokeliHenku)，包含了react，vue，react hooks三个不同版本，涵盖了react非常多的知识点以及一些常用的库。

<!--more-->

### react-music学习总结

  #### 1.通过 create-react-app 构建项目初始框架

  #### 2.package.json中相关依赖，通过yarn进行下载

  #### 3.react-redux 的Provider和connect运用与学习

  最外层容器中，把所有内容包裹在Provider组件中，将之前创建的store作为prop传给Provider，
  如果需要使用state中的数据，就必须是使用connect方法对编写的组件进行包装。

  ```
  class MyComponent extends Component {
    // content...
  }

  export default connect(...args)(MyComponent);
  ```
  #### 4.利用redux-persist持久化数据存储，解决刷新页面数据丢失问题
  使用redux存储数据，但是刷新会导致数据丢失的问题，所以用到了redux-persist持久化数据存储插件
  > 请查看另一篇文章 :point_right:[点击传送门](https://juejin.im/post/6885907913265971208)

  #### 5.学习网易云api的相关文档，进行api的调用
  > 网易云音乐API文档 :point_right:[点击传送](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi)

  > github :point_right:[点击传送](https://github.com/Binaryify/NeteaseCloudMusicApi)

  需要克隆到本地，服务器启动默认端口为 3000，记得和项目请求代理的端口保持一致，启动服务即可进行调用

  #### 图片预览

  ![](https://github.com/Xxcool/react-music/blob/main/src/static/images/view01.png)

  ![](https://github.com/Xxcool/react-music/blob/main/src/static/images/view02.png)

  ![](https://github.com/Xxcool/react-music/blob/main/src/static/images/view03.png)
