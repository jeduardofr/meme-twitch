# Meme Twitch Bot

Una plataforma en conjunto con un bot (proximamente) que te permite tocar audios
a tu streamer favorito de algunas frases conocidas como:

-   Ah se mamo (Franco Escamilla)
-   No mames que asco (Fedelobo)
-   Ya la cague, verdad? (Fedelobo)

El objetivo en general es el que el público pueda interactuar mas con el streamer
sin necesidad de recurrir a las recompensas de Twitch o de terceros.

## Integrantes del Equipo

-   Jesús Rangel
-   Andrés López

## Datos generales del proyecto

El servidor de nuestro proyecto esta creado con Laravel y la parte del front
esta creada con React en conjunto con TypeScript. En sí toda la transferencia de
información se realiza mediante una API.

## Requisitos

### Docker

Para [Docker](Docker.md).

### Instalación completa local

-   [Node](https://nodejs.org)
-   [Composer](https://getcomposer.org/download/)
-   [PHP](https://www.php.net/downloads.php)
-   [MySQL](https://dev.mysql.com/downloads/)

## Instalación

Clonar el repositorio con:

    $ git clone https://gitlab.com/werofuentes/meme-twitch-bot bot
    $ cd bot

Crear archivo `.env`

    $ cp .env.example .env

Después de esto, necesitas configurar las credenciales para la base de datos.
Además necesitamos configurar el valor `APP_URL` y `APP_API` ya que nuestro front-end
depende de dicha variable para poder ser ejecutado de manera correcta.

Instalar dependencias de NPM y Composer

    $ composer install
    $ npm install

Generar llave para la aplicación

    $ php artisan key:generate

Correr migraciones

    $ php artisan migrate

Compilar nuestro front-end

    $ npm run dev

Se cuenta con dos seeders para mayor facilidad de interacción, se ejecutan con el comando

    $ php artisan db:seed

El proyecto cuenta con correo electrónico, por lo que es necesario que se coloquen
los datos de la cuenta a usar para enviar correos o de otra forma el registro de usuarios
no va a funcionar de manera correcta debido a que se envía un correo de bienvenida
al usuario.
