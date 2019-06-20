#!/usr/bin/env bash
set -eu
wait-for-it -t 300 db:3306
wait-for-it -t 300 mongo:27017
bin/rake db:migrate
bin/rake db:migrate:sequel
bin/rake db:schema:dump  # update db/schema.rb
exec bin/rails server -b 0.0.0.0
