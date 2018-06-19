let mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({ processCssUrls: false });

 mix.webpackConfig({
    output: {
         chunkFilename: mix.inProduction() ? 'chunks/[name].[chunkhash].js' : 'chunks/[name].js',
         publicPath: mix.inProduction() ? '/build/' : '/'
    },
    plugins: [
        new LiveReloadPlugin()
    ],
    module: {
        rules: [
            { test: /iview.src.*?js$/, loader: 'babel-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
});

 if (mix.inProduction()) {
    mix.webpackConfig({
      plugins: [new BabiliPlugin()]
    });

    mix.options({
        uglify: false
    });
    mix.setPublicPath('public/build');
    mix.disableNotifications();
    
} else {
    mix.sourceMaps();
}

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
