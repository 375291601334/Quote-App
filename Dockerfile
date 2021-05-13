FROM nginx

COPY ./static /var/www/quote-app.local

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/quote-app.local.conf

COPY ./certs /etc/ssl/certs
