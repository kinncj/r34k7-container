'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var banner = _.template([
  '',
  ' r34k7 Container Example - <%= pkg.description %>',
  ' @version v<%= pkg.version %>',
  ' @link <%= pkg.homepage %>',
  ' @license <%= pkg.license %>',
  ' @author <%= pkg.author.name %> (<%= pkg.author.url %>)',
  ''
].join('\n'), {
  pkg: require('./package.json')
});

module.exports = {
  entry: {
      'r34k7':  './lib/app.js',
      'r34k7example':  './example/example.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      loaders: ['react-hot-loader', 'babel-loader']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.PrefetchPlugin('react'),
    new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment')
  ]
};
