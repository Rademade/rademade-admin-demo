#!/usr/bin/env bash
set -eu
export MARIADB_PASSWORD=`cat /run/secrets/mariadb-user-password`
export MONGO_PASSWORD=`cat /run/secrets/mongo-user-password`
wait-for-it -t 300 db-mariadb:3306
wait-for-it -t 300 db-mongo:27017
bin/rake db:migrate
bin/rake db:migrate:sequel
exec bin/rails server -b 0.0.0.0
