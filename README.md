# Docker with Laravel Starter

This repository contains a docker configuration ready to work with
[Laravel](https://laravel.com/) for the backend and [React](https://reactjs.org/)
with [TypeScript](https://www.typescriptlang.org/) for our frontend plus
[TailwindCSS](https://tailwindcss.com/) as our CSS framework.

## Getting up and running

The first thing we need to do is to clone the repository.

    $ git clone https://github.com/jeduardofr/docker-laravel-starter example

After that we need to copy `.env.example` to `.env` to set our database credentials
that will be use when starting the containers.

    $ cp .env.example .env

We have one extra variable related to the database which is `DB_ROOT_PASSWORD`.
Once this is done, we can proceed to start the container and install all the
composer dependencies for our project.

    $ docker-compose up -d
    $ docker run --rm -v $(pwd):/app composer install

Since `root` is use to install all the dependencies, we need to change the owner
of the `vendor` folder as the one we're currently using.

    $ sudo chown $USER:$USER -R .

If you're using the frontend with `React` you will need to install all the
[NPM](https://nodejs.org) dependencies with:

    $ docker-compose exec app npm install

And that's all related to the basic setup.

### Useful Commands

The next commands just explain how to use each container.

Generate the key for our application

    $ docker-compose exec app php artisan key:generate

Run migrations

    $ docker-compose exec app php artisan migrate

Access of our database container

    $ docker-compose exec db bash
    $ mysql -u root -p DB_ROOT_PASSWORD

Install npm dependency

    $ docker-compose exec app npm install moment

Install composer dependency

    $ docker-compose exec app composer require tymon/jwt-auth
