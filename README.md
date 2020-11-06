# Meme Twitch Bot

A bot to play audios (memes) such as "That's what she said" or "No mames que asco"
for the twitch streaming platform.

## Requirements

### Docker

For [Docker](Docker.md).

### Full local installation

-   [Node](https://nodejs.org)
-   [Composer](https://getcomposer.org/download/)
-   [PHP](https://www.php.net/downloads.php)
-   [MySQL](https://dev.mysql.com/downloads/)

## Installation

Clone the repository with

    $ git clone https://gitlab.com/werofuentes/meme-twitch-bot bot
    $ cd bot

Create `.env` file

    $ cp .env.example .env

After this you should set the database credentials. Also you should configure
the `APP_URL` variable as well since the frontend depends on that variable to
successfully make the requests to our API.

Generate key for the application

    $ php artisan key:generate

Install dependencies for Composer and NPM.

    $ composer install
    $ npm install

Run migrations

    $ php artisan migrate

Compile the front-end once

    $ npm run dev

Now, if you want to have hot reload for the frontend, you need to set the
variable `MIX_API` with you local url without protocol. For example if your
url is `http://mi-url-local.test` then the variable should be set to
`mi-url-local.test`. After that you can run:

    $ npm run watch
