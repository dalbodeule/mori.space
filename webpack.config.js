const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'jquery',
            'materialize',
            './src/js/dropdown.js',
            './src/js/init.js',
            './src/js/jquery.sticky-kit.js',
            './src/js/scrollspy.js',
            './src/js/sidenav.js'
        ],
        mcnick: [
            'vue',
            'url',
            'moment',
            './src/js/mcnick.js'
        ],
        mcuuid: [
            'vue',
            'url',
            'moment',
            './src/js/mcuuid.js'
        ],
        mchistory: [
            'vue',
            'url',
            'moment',
            './src/js/mchistory.js'
        ],
        mcapi: [
            './src/js/jjsonviewer.js',
            './src/js/api.js'
        ]
    },
    output: {
        path: __dirname+'/public/js',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }, {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    outputPath: '../fonts/',
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: false,
                ecma: 5
            }
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery$': 'jquery/src/jquery.js',
            'materialize$': 'materialize-css/dist/js/materialize.js',
            'materializecss$': 'materialize-css/dist/css/materialize.css',
            'js-url$': 'js-url/url.js',
            'moment$': 'moment/moment.js',
            'iconfont$': 'material-design-icons-iconfont/dist/material-design-icons.css',
            'font-awesome$': 'font-awesome/css/font-awesome.min.css'
        }
    }
}