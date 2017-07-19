import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
    devtool: 'source-map',

    context: __dirname,

    entry: {
        app: "./src/assets/js/app.js",
        map: "./src/assets/js/map.js",
        search: "./src/assets/js/search.js",
    },
    output: {
        path: path.join(__dirname, "public/assets"),
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        { loader: 'css-loader', options: {minimize: true } },
                        { loader: 'sass-loader'}
                    ]
                })
            },
            {
                test: /\.js$/,
                use: { loader: 'babel-loader'}
            }
        ]
    },

    plugins: [
        extractSass,
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map'
        })
    ],

    watch: true,
};

export default config;