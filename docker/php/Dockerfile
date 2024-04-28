FROM php:8.3.6-fpm
ENV TZ=Asia/Tokyo
ENV COMPOSER_ALLOW_SUPERUSER=1

RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libicu-dev libonig-dev \
    vim nano libpq-dev && \
    docker-php-ext-install intl pdo_mysql zip bcmath pdo_pgsql pgsql && \
    apt-get clean

COPY --from=composer:2.6.5 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Laravel プロジェクトのファイルを /back から /app にコピー
COPY ./back /app



COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

ENV HISTFILE=/root/.bash_history
