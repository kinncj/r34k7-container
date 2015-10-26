var path = require('path');

module.exports = {
    entry: {
        'r34k7example':  path.join(__dirname, 'example/example.js')
    },
    debug: false,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    externals: {
        react: 'React',
        r34k7: 'r34k7'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loader: 'babel-loader' },
            { test: /\.html?$/, loader: 'file?name=[name].[ext]' }
        ],
    }
};
