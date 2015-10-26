var path    = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        'r34k7':  path.join(__dirname, 'lib/app')
    },
    debug: false,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    externals: {
        react: 'React'
    },
    resolve: {
        modulesDirectories: ['./lib'],
        extensions: ['', '.js', '.html']
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
