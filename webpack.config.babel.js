import path from 'path'
import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const vueLoaders = {
  html: 'pug-loader',
  css: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader', use: 'css-loader'
  }),
  less: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader', use: ['css-loader', 'less-loader']
  })
}

export default {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlPlugin({ title: 'Edison', template: 'app/app.pug' })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader', fallback: 'style-loader'
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'], fallback: 'style-loader'
        })
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: vueLoaders }
      }, {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]?[hash]' }
      }
    ]
  },

  performance: { hints: false },
  resolve: { alias: { 'vue$': 'vue/dist/vue.common.js' } },

  devtool: '#eval-source-map',
  devServer: {
    hot: true,
    port: 8888,
    host: '0.0.0.0',
    historyApiFallback: true,
    proxy: { '**': `http://localhost:20409` }
  },

  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false }
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true })
  ])
}
