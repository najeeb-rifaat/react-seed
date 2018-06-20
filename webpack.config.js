const path =
  require('path')

const HtmlWebpackPlugin =
  require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map', // little expensive but good
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Seed',
      filename: 'index.html',
      template: './templates/index.hbs'
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
          { // PostCSS lint and auto prefix css
            loader: 'postcss-loader'
          },
          { // Compile sassy css
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    public: 'devbox.local:8080', // Change this to whatever local URL you like
    headers: { // example for dev server headers
      'Access-Control-Allow-Origin': '*'
    }
  }
}
