let path = require('path');
module.exports = {
  mode: "development",
  entry: './src/index.js', //入口文件
  output: {
    filename: "wanzhang.js",
    path: path.resolve(__dirname, "./dist")
  }
}