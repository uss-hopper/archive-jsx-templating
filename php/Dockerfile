FROM composer:1.7 as vendor

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist

FROM richarvey/nginx-php-fpm
RUN rm /var/www/html/index.php

RUN mkdir /var/www/php
COPY Classes /var/www/php/Classes
COPY lib /var/www/php/lib
RUN mkdir /var/www/vendor
COPY --from=vendor /app/vendor/ /var/www/html/vendor/
COPY public_html /var/www/html
EXPOSE 80



