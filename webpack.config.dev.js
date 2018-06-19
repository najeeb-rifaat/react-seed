const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Najeeb App',
      filename: 'index.html',
      template: './templates/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(s?)css$/,
        use: [
          { // Load styles
            loader: 'style-loader'
          },
          { // style as es module
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    public: 'devbox.local:8080',
    headers: { // example for dev server headers
      'Access-Control-Allow-Origin': '*'
    }
  }
}
