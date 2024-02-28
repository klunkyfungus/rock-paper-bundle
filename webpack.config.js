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
}