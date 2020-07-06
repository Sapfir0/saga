const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = ({
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', // этот путь будет добавляться в пути до каждого бандла внутри хтмл и других бандлов
        filename: "js/[name].[hash].bundle.js",
        chunkFilename: 'js/[name].[hash].bundle.js',
    },
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        "sourceMap": true,
                    }
                }
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        watchContentBase: true,
        progress: true,
        compress: true,
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {from: 'public', to: '.'},
            ],
        }),
        new HtmlWebpackPlugin({template: './public/index.html'}),

    ]
})