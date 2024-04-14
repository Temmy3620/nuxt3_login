FROM php:8.3.6-fpm
ENV TZ Asia/Tokyo

RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libicu-dev libonig-dev && \
    docker-php-ext-install intl pdo_mysql zip bcmath && \ 
    apt-get install -y libpq-dev

RUN apt-get update && apt-get install -y vim nano

RUN docker-php-ext-install pdo_pgsql pgsql

COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

COPY --from=composer:2.6.5 /usr/bin/composer /usr/bin/composer

WORKDIR /app

ENV HISTFILE=/root/.bash_history


# Node.jsのダウンロードと解凍
#curl -sL https://deb.nodesource.com/setup_18.x | bash -
#apt-get install -y nodejs

