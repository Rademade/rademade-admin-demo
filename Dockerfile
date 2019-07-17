FROM ruby:2.3

RUN apt-get update && \
    (curl -sS https://deb.nodesource.com/setup_8.x | bash -) && \
    apt-get install -qq -y --fix-missing --no-install-recommends \
        imagemagick libmagickwand-dev jpegoptim optipng \
        build-essential default-libmysqlclient-dev libffi-dev \
        wait-for-it nodejs && \
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
