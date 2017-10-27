const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'jquery',
            'materialize',
            './src/js/dropdown.js',
            './src/js/init.js',
            './src/js/jquery.sticky-kit.min.js',
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

    },
    plugins: [

    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery$': 'jquery/src/jquery',
            'materialize$': 'materialize-css/dist/js/materialize.js',
            'js-url$': 'js-url/url.js',
            'moment$': 'moment/moment.js'
        }
    }
}