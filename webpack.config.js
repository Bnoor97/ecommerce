const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '',
        filename: 'main.js',
    },
    mode: 'development',

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1400,
        overlay: true,//for errors
        writeToDisk: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        }
                    }
                ]
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new HtmlWebpackPlugin({
            filename: "product.html",
            template: "./src/product.html",
        }),

        new HtmlWebpackPlugin({
            filename: "checkout.html",
            template: "./src/checkout.html",
        }),

        new HtmlWebpackPlugin({
            filename: "payment.html",
            template: "./src/payment.html",
        }),

        new HtmlWebpackPlugin({
            filename: "search.html",
            template: "./src/search.html",
        }),

        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html",
        }),

        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),

        new OptimizeCssAssetsWebpackPlugin({}),
    ],
};