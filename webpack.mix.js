const mix = require('laravel-mix');

mix.react('resources/js/app.js', 'public/js')
    .postCss("resources/css/app.css", "public/css", [
        require("tailwindcss"),
    ])
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    });


