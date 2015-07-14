'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    exampleWebpackConfig = require('./example.webpack.config.js');

gulp.task('webpack', function(callback) {
  var jsFilename = webpackConfig.output.filename;
  if (gutil.env.production) {
    webpackConfig.output.filename = gutil.replaceExtension(jsFilename, '.min.js');
    webpackConfig.plugins = webpackConfig.plugins.concat(
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify('production') }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  webpack(webpackConfig).run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({ colors: true }));
    browserSync.reload();
    callback();
  });
});

gulp.task('buildExample', function(callback) {
  var jsFilename = exampleWebpackConfig.output.filename;
  if (gutil.env.production) {
    exampleWebpackConfig.output.filename = gutil.replaceExtension(jsFilename, '.min.js');
    exampleWebpackConfig.plugins = exampleWebpackConfig.plugins.concat(
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify('production') }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  webpack(exampleWebpackConfig).run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[example]', stats.toString({ colors: true }));
    browserSync.reload();
    callback();
  });
});

gulp.task('server', function() {
  browserSync({
    open: false,
    notify: false,
    server: {
      baseDir: ['example', 'dist']
    }
  });
});

gulp.task('watch', function() {
    gulp.watch('./lib/*.{jsx}', ['webpack']);
    gulp.watch('./lib/*.{js}', ['webpack']);
    gulp.watch('./example/*.{jsx}', ['webpack']);
    gulp.watch('./example/*.{js}', ['webpack']);
});

gulp.task('default', ['webpack', 'server', 'watch']);
gulp.task('example', ['buildExample', 'server', 'watch']);
