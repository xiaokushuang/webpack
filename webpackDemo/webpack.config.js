let path = require('path');
module.exports = {
  mode: "development", //开发模式（文件出现错误的话，指向具体文件）
  // mode: "production", //生产模式（文件出现错误的话，指向打包文件）
  entry: './src/index.js', //入口文件
  output: {
    filename: "wanzhang.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: './'
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif|svg)$/, //文件名字后缀为这些的时候，就使用下面的file-loader
      use: {
        loader: 'file-loader',
        options: {
          name: "[name].[ext]", //自己配置生产的图片的文件名，默认为hash 值
          outputPath: "images" //图片文件打包到dist 下的images 文件夹下
        }
      }
    }]
  }
}