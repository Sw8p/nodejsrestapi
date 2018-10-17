const nodeExternals = require('webpack-node-externals')
const path = require('path')
module.exports = {
    mode: 'development',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    devtool: 'inline-source-map',
    externals: [nodeExternals()],
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
}
