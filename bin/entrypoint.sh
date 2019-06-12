#!/usr/bin/env bash
set -eu
wait-for-it -t 300 db-mariadb:3306
wait-for-it -t 300 db-mongo:27017
bin/rake db:migrate
bin/rake db:migrate:sequel
exec bin/rails server -b 0.0.0.0
