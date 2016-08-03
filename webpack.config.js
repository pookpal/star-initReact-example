var webpack = require('webpack');
var path = require('path');


var config = require('./web.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); //抽取html
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    devtool: 'source-map',

    // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./dist", //最好写上，否则报错
        port: 8080
    },


    // 配置入口
    entry:{
        "main": path.resolve(__dirname, 'src/entry/main.jsx'),
        "zh-CN": path.resolve(__dirname, 'src/entry/zh-CN.js'),
        "en-US": path.resolve(__dirname, 'src/entry/en-US.js'),
        "common": ['react','react-dom','react-router','redux','react-redux']
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        //publicPath: 'dist',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },

            // 只对src目录里的less文件应用CSS Module,自动添加hash后缀
            { test: /\.less$/, include: [path.resolve(__dirname, 'src/components'),path.resolve(__dirname, 'src/views')], loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'less-loader') },

            { test: /\.less$/,exclude: [path.resolve(__dirname, 'src/components'),path.resolve(__dirname, 'src/views')],loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!' + 'autoprefixer-loader!' +`less`)},

            { test: /\.js[x]?$/, include: path.resolve(__dirname, 'src'), exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, './node_modules')],
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader:{
        modulesDirectories: ['node_modules', path.join(__dirname, './node_modules')],
    },

    plugins: [

        new CopyWebpackPlugin([
            {
                context: './src/assets/images',
                from: '**/*',
                to: './assets/images'},
            {
                context: './src/assets/iconFont',
                from: '**/*',
                to: './assets/iconFont'
            },
            {
                context: './src/assets/data',
                from: '**/*',
                to: './assets/data'
            }
        ]),

        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),

        new ExtractTextPlugin("style.css"),

        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),

        new HtmlWebpackPlugin({
            title: 'demo', //标题
            filename: './dist/index.html', //生成的html存放路径，相对于 path
            template: './src/entry/index.html', //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: true, //为静态资源生成hash值
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        },
            {
                title: 'demo', //标题
                filename: './dist/index-en.html', //生成的html存放路径，相对于 path
                template: './src/entry/index-en.html', //html模板路径
                inject: true, //允许插件修改哪些内容，包括head与body
                hash: true, //为静态资源生成hash值
                minify: { //压缩HTML文件
                    removeComments: true, //移除HTML中的注释
                    collapseWhitespace: false //删除空白符与换行符
                }
            }
        ),

        new webpack.HotModuleReplacementPlugin(),

        //生成环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),

        new OpenBrowserPlugin({ url: 'http://localhost:8080/dist' })
    ]
};
