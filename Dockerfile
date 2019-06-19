FROM ruby:2.3

RUN apt-get update && \
    apt-get install -qq -y netcat curl openssh-client build-essential apt-utils mysql-client libsodium-dev imagemagick libmagickwand-dev libcurl4-openssl-dev jpegoptim optipng libssl-dev libfontconfig --fix-missing --no-install-recommends wait-for-it && \
    (curl -sS https://deb.nodesource.com/setup_8.x | bash -) && \
    (curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -) && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn nodejs --no-install-recommends && \
    echo "{ \"allow_root\": true }" >> /root/.bowerrc && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir /app
RUN mkdir -p /root/.ssh/

WORKDIR /app

RUN ssh-keyscan -H github.com >> ~/.ssh/known_hosts

ENV GEM_HOME /app/vendor/bundle
ENV PATH $GEM_HOME/bin:$PATH
ENV BUNDLE_PATH $GEM_HOME
ENV BUNDLE_BIN $GEM_HOME/bin

RUN gem install bundler && \
    bundle config --global path "$BUNDLE_PATH" && \
    bundle config --global bin "$BUNDLE_BIN"

RUN npm install bower -g && npm install gulp -g
