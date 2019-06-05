FROM ruby:2.3

RUN echo 'deb http://deb.debian.org/debian stretch-backports main' >> /etc/apt/sources.list \
    && apt-get update \
    && apt-get -t stretch-backports install -y nodejs npm wait-for-it \
    && npm install bower -g \
    && echo "{\"allow_root\": true}" >> ~/.bowerrc

RUN mkdir /site
WORKDIR /site
COPY . .

# Disable admin_resources in config/routes.rb to make it not connect to db
RUN bundle install --without development test --deployment \
    && sed -Ei 's/^(\s*admin_resources)\b/# TEMPORARY \1/' config/routes.rb \
    && bin/rake rademade_admin:bower:install \
    && RAILS_ENV=production bin/rake assets:precompile \
    && sed -Ei 's/^# TEMPORARY //' config/routes.rb

ENTRYPOINT ["bin/entrypoint.sh"]
