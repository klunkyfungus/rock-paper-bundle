const HtmlWebpackPlugin = require('html-webpack-plugin');
//const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png)$/i,
                type: 'asset/resource'
            }
        ]
    },
    entry: './code/main.js',
    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
}