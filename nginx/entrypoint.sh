#!/bin/sh
envsubst '$$PROJECT_NAME' < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf
wait-for-it "$PROJECT_NAME"_app:3000
exec nginx -g 'daemon off;'
