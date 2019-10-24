const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8877,
    hot: true,
  },
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({ // 打包输出HTML
      title: 'Hot Reload',
      filename: 'index.html',
      template: 'src/index.html'
    }),
  ]
}