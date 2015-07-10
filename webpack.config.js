'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LIB_NAME = 'r34k7';

var banner = _.template([
  '',
  ' r34k7 Container - <%= pkg.description %>',
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
      'container':  './lib/container.jsx',
      'dispatcher': './lib/dispatcher.js',
      'event':      './lib/event.js',
      'handler':    './lib/handler.jsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: LIB_NAME + '.js',
    libraryTarget: 'umd',
    library: 'r34k7Container'
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
      loader: 'babel-loader'
    }, {
      test: /\.(js|jsx)$/,
      loader: 'jsx-loader?harmony'
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
