# prestage build used for handling composer
FROM composer:1.7 as vendor

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist

# main build stage


FROM ubuntu

MAINTAINER webmaster@localhost
ENV APACHE_DOCUMENT_ROOT=/var/www/html/

RUN apt-get update && apt-get install -y tzdata

RUN apt-get install -y php \
	libapache2-mod-php \
	php-mysql \
	php-cgi \
	php-curl \
	php-mbstring \
	php-json \
	curl lynx-common lynx \
	&& rm -rf /var/lib/apt/lists/* \
	&& apt-get clean -y


RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

CMD /usr/sbin/apache2ctl -D FOREGROUND

RUN rm /var/www/html/index.html

# copy vendor into the project from the prebuild stage
RUN mkdir /var/www/vendor
COPY --from=vendor /app/vendor/ /var/www/vendor/

#COPY necasary PHP files
RUN mkdir /var/www/php
COPY Classes /var/www/php/Classes
COPY lib /var/www/php/lib
COPY public_html/ /var/www/html

# configure Secrets for protected information
RUN mkdir /var/www/secrets
COPY secrets/. /var/www/secrets
RUN touch /var/www/secrets/ng-templating.ini && php /var/www/secrets/ng-templating.php


EXPOSE 80



