#!/usr/bin/env bash
set -eu
wait-for-it -t 300 "$PROJECT_NAME"_db:3306
wait-for-it -t 300 "$PROJECT_NAME"_mongo:27017
bin/rake db:migrate
bin/rake db:migrate:sequel
exec bin/rails server --binding 0.0.0.0
