#!/usr/bin/env bash
set -eu
wait-for-it -t 300 "$PROJECT_NAME"_db:"$MYSQL_PORT"
wait-for-it -t 300 "$PROJECT_NAME"_mongo:"$MONGO_PORT"
bin/rake db:migrate
bin/rake db:migrate:sequel
exec bin/rails server --port "$APP_PORT" --binding 0.0.0.0
