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

After this you should set the database credentials.

Generate key for the application

    $ php artisan key:generate

Install dependencies for Composer and NPM.

    $ composer install
    $ npm install

Run migrations

    $ php artisan migrate

Compile the front-end once

    $ npm run dev

Start the local environment with hot reload

    $ npm run watch
