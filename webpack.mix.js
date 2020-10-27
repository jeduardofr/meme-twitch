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

mix.ts("resources/ts/index.tsx", "public/js")
    .browserSync({
        open: "external",
        proxy: "webserver",
        files: ["resources/views/**/*.php", "public/js/*.js"],
        notify: false
    })
    .postCss("resources/css/tailwind.css", "public/css", [
        require("tailwindcss")
    ]);

if (mix.inProduction()) {
    mix.version();
}
