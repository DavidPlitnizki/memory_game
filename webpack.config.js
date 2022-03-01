const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss)$/,
                use: [{
                   loader: "style-loader"
               }, {
                   loader: "css-loader",
                   options:{
                       sourceMap: true,
                       modules: {
                        localIdentName: '[local]__[name]___[hash:base64:5]'
                       },
                   }
               }, {
                   loader: "sass-loader"
               }]
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            limit: 8000,
                            outputPath: './assets/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*','.js','.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}])
    ],
    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    }
  };
