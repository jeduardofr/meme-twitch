<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Meme Twitch</title>
        <link rel="icon" type="image/png" href="{{ asset('images/logo.png') }}" sizes="16x16" />
        <link rel="stylesheet" href="{{ asset('css/tailwind.css') }}">
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
    </head>
    <body class="bg-blue-dark">
        <div id="app"></div>
        <script src="{{ mix('/js/index.js') }}"></script>
    </body>
</html>
