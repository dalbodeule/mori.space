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
                    publicPath (file) {
                        const material = [
                            "node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff",
                            "node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.eot",
                            "node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff2",
                            "node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.ttf"
                        ];
                        const roboto = [
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Thin.woff2',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Thin.woff',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Light.woff2',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Light.woff',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff2',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Medium.woff2',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Medium.woff',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Bold.woff2',
                            'node_modules/materialize-css/dist/fonts/roboto/Roboto-Bold.woff'
                        ];
                        const fa = [
                            'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
                            'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
                            'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
                            'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
                            'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
                            'node_modules/font-awesome/fonts/FontAwesome.otf'
                        ];
                        if(material.includes(file)) {
                            return '/material/'+file.replace('node_modules/material-design-icons-iconfont/dist/fonts/', '');
                        } else if(roboto.includes(file)) {
                            return '/roboto/'+file.replace('node_modules/materialize-css/dist/fonts/roboto/', '');
                        } else if(fa.includes(file)) {
                            return '/fa/'+file.replace('node_modules/font-awesome/fonts/', '');
                        }
                        return false;
                    },
                    name: '[path][name].[ext]'
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