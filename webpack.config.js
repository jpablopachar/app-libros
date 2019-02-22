const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'js/bundle.js'
  },
  // mode: 'development',
  mode: 'production',
  module: {
    rules: [{
      test: /\.css/,
      use: [
        // Si se encuentra en desarrollo, carga los estilos en javascript
        // Si se encuentra en producción, carga los estilos en su propio css
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkAttributes: true,
        useShortDoctype: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css'
    })
  ],
  devtool: 'source-map'
};