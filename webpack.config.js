const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const modoDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: modoDev ? 'development' : 'production',

  entry: {
    main: [
      './src/main.js'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },

  devtool: 'eval-source-map',

  module: {
    rules: [{
      test: /\.s[ac]ss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/i,
      use: ['file-loader']
    }, {
      test: /\.html$/i,
      type: "assets/resource"
    }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css"
    }),

    new CopyPlugin({
      patterns: [{
        context: path.resolve(__dirname),
        from: "./src",
        to: path.resolve(__dirname, 'public')
      }]
    })
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        }
      }),
      new HtmlMinimizerPlugin()
    ]
  },

  devServer: {
    static: {
      directory: ("./public")
    },
    compress: true,
    port: 9000
  }
};