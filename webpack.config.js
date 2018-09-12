const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const FileManagerPlugin = require('filemanager-webpack-plugin')
// const { DefinePlugin } = require('webpack')
const log = require('webpack-log')({ name: 'wds' })
const pkg = require('./package.json')

// Resolve environment settings for webpack.
const config = f => (
  { development, production } = {
    development: true
  }
) => {
  const env = {
    development: Boolean(development),
    production: Boolean(production),
    version: pkg.version
  }

  log.info(`Environment settings`)
  log.info(env)

  return f(env)
}

module.exports = config(({ development, production, version }) => ({
  target: 'web',
  devtool: '#cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.json'],
  },
  // context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/app.js',
    page: './js/page.js',
    generator: './js/generator.js',
    coins: './data/coins.js',
    fiat: './data/fiat.js',
    BTTSchema: './templates/BTTSchema.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new CleanPlugin([path.resolve(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default see the FAQ for details)
      template: 'index.html'
    }),
    new CopyWebpackPlugin([
      {from:'js/thirdparty',to:'js/thirdparty'} 
    ]),
    new CopyWebpackPlugin([
      {from:'img',to:'img'} 
    ]),
    new CopyWebpackPlugin([
      {from:'style',to:'style'} 
    ]),
    new CopyWebpackPlugin([
      {from:'node_modules/cryptocoins-icons/SVG',to:'cryptocoins-icons/SVG'} 
    ]),
    
    new CopyWebpackPlugin([
      {from:'templates',to:'templates'} 
    ]),
  ].filter(Boolean)
}))


