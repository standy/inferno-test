
module.exports = {
    entry: {
        index: './index.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: './build',
    },
};
