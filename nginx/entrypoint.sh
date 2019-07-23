#!/bin/sh
envsubst '$$PROJECT_NAME $$APP_PORT' < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf
wait-for-it "$PROJECT_NAME"_app:"$APP_PORT"
exec nginx -g 'daemon off;'
