const path = require('path');
const hwp = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pathDefiner = (targetPath) => {
    return path.join(__dirname, 'src', targetPath);
}

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true,
        port:3000
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },          
            { 
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", "postcss-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] 
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx'],
        alias: {
            "@actions": pathDefiner('store/actions'),
            "@reducers": pathDefiner('store/reducers'),
            "@constants": pathDefiner('store/constants')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new hwp(
            {
                template: path.join(__dirname, './public/index.html')
            }
        )
    ]
};