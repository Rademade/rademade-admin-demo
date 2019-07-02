#!/usr/bin/env bash
set -eu
wait-for-it -t 300 "$PROJECT_NAME"_db:3306
wait-for-it -t 300 "$PROJECT_NAME"_mongo:27017
bin/rake db:migrate
bin/rake db:migrate:sequel
rsync -a --delete --exclude /uploads public/ /docroot
exec bin/rails server -b 0.0.0.0
