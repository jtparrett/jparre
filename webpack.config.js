var debug = process.env.NODE_ENV === "development";
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var sassLoaders = [
  'css-loader?minimize!',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src'),
  'import-glob-loader'
];

console.log('ENVIRONMENT:', process.env.NODE_ENV);

module.exports = {
  context: path.join(__dirname, "./src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    application: "./javascript/routes/application.jsx"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?name=assets/images/[name].[ext]'
      }
    ]
  },
  output: {
    path: __dirname + "/app",
    filename: "assets/[name].production.js",
    publicPath: '/',
    contentBase: '/'
  },
  plugins: debug ? [
    new ExtractTextPlugin('assets/[name].production.css'),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
    new ExtractTextPlugin('assets/[name].production.css'),
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: {
      index: 'index.html',
      rewrites: [
        { from: /\//, to: '/index.html'}
      ]
    }
  },
  resolve: {
    extensions: ['', '.jsx', '.html', '.js', '.sass', '.jpg', '.png', '.gif', '.svg', '.mp4'],
    root: [path.join(__dirname, './src')],
    alias: {
      config: path.join(__dirname, './src/javascript/config', process.env.NODE_ENV)
    }
  }
};
