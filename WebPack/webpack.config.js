const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyJs = require('terser-webpack-plugin');
const cssMinify = require('css-minimizer-webpack-plugin');

module.exports = 
{
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: 
    {
        filename: "principal.js",
        path: __dirname + '/public'
    },
    devServer: 
    {
        port: 9000 
    },
    optimization: 
    {
        minimize: true,
        minimizer: 
        [
            new uglifyJs({
                parallel: true
            }),
            new cssMinify({})
        ]
    },
    plugins: 
    [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ]
    ,
    module: 
    {
        rules: 
        [
            {
                test: /\.s?[ac]ss$/,
                use: 
                [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // adiciona dentro da dom a tag style - conflita com o acima
                    'css-loader', // interpreta os @imports, url(), imgs dentro do css
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}