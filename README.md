> 根据github上面https://github.com/QiaokeliHenku的music项目，进行react的学习，包含了react，vue，react hooks三个不同版本，涵盖了react非常多的知识点以及一些常用的库。

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
  #### 4.学习网易云api的相关文档，进行api的调用
  > 网易云音乐API文档[点击传送](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi)
  > github[点击传送](https://github.com/Binaryify/NeteaseCloudMusicApi)

  需要克隆到本地，服务器启动默认端口为 3000，记得和项目请求代理的端口保持一致，启动服务即可进行调用
