## OpenAI Forward Service [English](README.MD)

can be achieved with just over 20 lines of code：

- 将任意的请求转发给 openai 的 api 端点，转发的路径为：https://api.openai.com/；
- 该服务在互联网的服务器上部署，将指定端口的请求转发给 openai，理论上可以通过转发机制帮助连接到 openaiapi；
- 该服务仅进行数据转发，不涉及任何隐私数据的处理。
- 可以编译为无需环境依赖的二进制可执行文件

> 中国用户可以使用 http://198.12.121.83:3000 进行测试；

## 安装

> 本地需要安装 node 环境

```
npm install
```

## 运行

```shell
npm run start
```

## 编译可以执行文件(win64)

```
npm run pkg:win
```

## 编译可以执行文件(linux64)

```
npm run pkg:linux
```
