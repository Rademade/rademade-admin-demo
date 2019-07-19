FROM nginx:stable

RUN apt-get update && \
    apt-get install -qq -y --fix-missing --no-install-recommends \
        wait-for-it && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY ./nginx/entrypoint.sh /entrypoint.sh
COPY ./nginx/nginx.tmpl /etc/nginx/nginx.tmpl
COPY ./public /static

ENTRYPOINT ["/entrypoint.sh"]
