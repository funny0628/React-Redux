var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output:{
        path:path.join(__dirname,"dist"),
        filename:"main.js"
    },
    mode: 'production',
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
              use: [ 'style-loader', 'css-loader' ],
              options: {
                modules:{
                 
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                 
                 
                }
               
              }
            }
          ]
      },
    plugins: [new HtmlWebpackPlugin({
      template: './public/index.html'
     
    })]
  };