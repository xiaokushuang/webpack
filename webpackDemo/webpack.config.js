const autoprefixer = require('autoprefixer');
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: "development", //开发模式（文件出现错误的话，指向具体文件）
  devtool: "cheap-module-eval-source-map", //代码中出现错误的时候，会具体显示错误信息
  devServer: { //这个是webpack 建立的服务,npm install webpack-dev-server -D 之后需要进行的配置，在package.json中配置了’start‘
    contentBase: "./dist",
    port: 8080,
    open: true,
    hot: true, //热更新（页面不强制刷新，只是页面的内容相应改变）
    hotOnly: true,
  },
  // mode: "production", //生产模式（文件出现错误的话，指向打包文件）
  // entry: './src/index.js', //入口文件(单文件)
  entry: { //多文件入口，会在index.html 中引入这两个js 文件
    bundle: "./src/index.js",
    index: './src/main.js'
  },
  output: {
    // filename: "bundle.js",//单文件入口需要这样写，如果是多文件入口，这个就不需要写了
    path: path.resolve(__dirname, "./dist"),
    // publicPath: './' //打包之后的index.html 中引入的js 路径前面加上这个链接(cdn 缓存)
  },
  module: {
    rules: [{
        test: /\.(jpg|png|gif|svg)$/, //文件名字后缀为这些的时候，就使用下面的file-loader
        use: {
          loader: 'file-loader', //作用是读取信息，进行一些操作
          options: {
            name: "[name].[ext]", //自己配置生产的图片的文件名，默认为hash 值
            outputPath: "images" //图片文件打包到dist 下的images 文件夹下
          }
        }
        // use: {
        //   loader: 'url-loader', //作用是读取信息，进行一些操作
        //   options: {
        //     name: "[name].[ext]", //自己配置生产的图片的文件名，默认为hash 值
        //     outputPath: "images", //图片文件打包到dist 下的images 文件夹下
        //     limit: 2048 //小于这个大小的，就把文件转换成base64,单位是字节
        //   }
        // }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          //从下往上调用loader
          "style-loader", //一般放到上面
          // "css-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2 //表示：引入css-loader 的时候必须引入下面两个loader,如果有3个，就写3
            }
          },
          "sass-loader",
          "postcss-loader", //给一些浏览器不兼容的样式加-webkit前缀,需要在package.json 添加"browserslist": ["> 1%"]，表示使用率在1%以上的浏览器
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, //iconfont 图标引入
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./font",
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    //需要下载插件，作用是在dist 文件夹下生成index.html 文件
    new htmlWebpackPlugin({
      template: "./public/index.html"
    }),
    //需要下载插件，作用是每次打包之后删除在dist 文件夹之前的打包文件
    new CleanWebpackPlugin(),
    //热模块更新技术,修改内容页面不强制刷新
    new webpack.HotModuleReplacementPlugin()
  ]
}