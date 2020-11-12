const autoprefixer = require('autoprefixer');
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
  mode: "development", //开发模式（文件出现错误的话，指向具体文件）
  // mode: "production", //生产模式（文件出现错误的话，指向打包文件）
  entry: './src/index.js', //入口文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: './'
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
    new CleanWebpackPlugin()
  ]
}