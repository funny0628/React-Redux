var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                // options: {
                //   presets: ['@babel/preset-env']
                // }
              }
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [{
                loader: 'style-loader' 
              },{
                loader:'css-loader',
             
                options: {
                  modules:{
                    
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',                
                  }
                }
              }],
             
            },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader:('url-loader'),
                  options: {
                    limit: 8192 //当文件的大小超过了8192时,就会把图片单独的打包成出来, 否则就是用base64 打包到js文件中
                  }
                }
              ]
            },
             {//antd样式处理
              test:/\.css$/,
              exclude:/src/,
              use:[
                  { loader: "style-loader",},
                  {
                      loader: "css-loader",
                      options:{
                          importLoaders:1
                      }
                  }
              ]
            },
          ]
      },
    plugins: [new HtmlWebpackPlugin({
      template: './public/index.html'
    })],
    resolve:{
      extensions: [".js",".jsx", ".json"]
    },
    devServer: { historyApiFallback: { index: 'index.html' }} 
  };