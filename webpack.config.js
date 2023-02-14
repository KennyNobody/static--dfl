const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pages = require('./src/js/pages');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "./docs"),
        filename: "js/bundle.js",
    },
    devtool: false,
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs'),
        },
        client: {
            overlay: true,
            progress: true,
        },
        open: true,
        watchFiles: ["src/*.html", "src/includes/*.html", "src/pages/*.html", "src/styles/*.css"],
        hot: true,
        compress: false,
        port: 9000,
    },
    plugins: [
        ...pages,
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                '!.git',
            ],
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/",
                    to: "./assets/",
                    noErrorOnMissing: true
                },
            ],
        }),
        new SpriteLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/inline",
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'sprite.svg',
                    publicPath: '/assets/sprite/'
                }
            }
        ],
    },
};