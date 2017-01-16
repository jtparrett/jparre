var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src'),
  'import-glob-loader'
];

module.exports = {
  context: path.join(__dirname, "./src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./javascript/routes/application.js",
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
      }
    ]
  },
  output: {
    path: __dirname + "./app/",
    filename: "assets/application.production.js",
    publicPath: '/'
  },
  plugins: debug ? [
    new ExtractTextPlugin('assets/application.production.css'),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin('assets/application.production.css'),
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.jsx', '.html', '.js', '.sass'],
    root: [path.join(__dirname, './src')]
  }
};
