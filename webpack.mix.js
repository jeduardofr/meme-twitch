const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const browserSyncConfiguration = {
    open: "external",
    proxy: process.env.MIX_PROXY,
    files: ["resources/views/**/*.php", "public/js/*.js", "public/css/*.css"],
    notify: false
};

if (process.env.MIX_PROXY !== "webserver") {
    browserSyncConfiguration.host = process.env.MIX_PROXY;
}

mix.ts("resources/ts/index.tsx", "public/js")
    .browserSync(browserSyncConfiguration)
    .postCss("resources/css/tailwind.css", "public/css", [
        require("tailwindcss")
    ]);

if (mix.inProduction()) {
    mix.version();
}
