const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js', // string
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.json?/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.json']
    }
};
