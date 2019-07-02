#!/usr/bin/env bash
set -eu
wait-for-it -t 300 db:3306
wait-for-it -t 300 mongo:27017
bin/rake db:migrate
bin/rake db:migrate:sequel
rm -rf /docroot/*
cp -r /app/public/* /docroot
exec bin/rails server -b 0.0.0.0
