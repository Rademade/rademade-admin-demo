FROM ruby:2.3

ENV INSTALL_PATH  /app

# install to vendor/bundle
ENV BUNDLE_PATH $INSTALL_PATH/vendor/bundle

# make executables available without "bundle exec"
ENV GEM_HOME $INSTALL_PATH/vendor/bundle
ENV PATH $INSTALL_PATH/bin:$GEM_HOME/bin:$PATH

RUN apt-get update && \
    (curl -sS https://deb.nodesource.com/setup_8.x | bash -) && \
    apt-get install -qq -y --no-install-recommends \
        imagemagick libmagickwand-dev jpegoptim optipng \
        build-essential default-libmysqlclient-dev libffi-dev \
        wait-for-it nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/* && \
    gem install bundler && \
    echo "{ \"allow_root\": true }" >> /root/.bowerrc && \
    npm install -g bower && \
    mkdir -p /root/.ssh/ && \
    ssh-keyscan -H github.com >> ~/.ssh/known_hosts

WORKDIR /app
