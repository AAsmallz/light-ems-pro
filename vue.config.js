const { defineConfig } = require('@vue/cli-service');
const path = require('path');
// jquery 全局注册step1
const webpack = require('webpack');

module.exports = defineConfig({
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            // jquery 全局注册step2
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery'
            })
        ]
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', path.resolve('./src'));
    }
});
