### Base64在前端的应用
- Canvas 图片生产
  - canvas的toDataURL可以吧canvas的画布内容转base64编码格式, 包含图片展示的data url
- 文件获取
  - FileReader的readAsDataURL可以把上传的文件转为base64格式的dataURI
- JWT json web token
- 移动端网站图标优化
- 小图片
- sourceMap
- 混淆加密代码

- BASE64是编解码, 主要的作用在于内容能在各个网关间无错的传输
- 64个字符
  - A-Z 26
  - a-z 26
  - 0-9 10
  - +/ 2
- 优点
  - 可以将二进制数据转化为可打印字符, 方便传输数据
  - 对数据进行简单的加密
  - 减少http请求
- 缺点
  - 编码和解码需要工作量
  - 体积变大