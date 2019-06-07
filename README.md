# rademade-admin-demo

Run the site locally:
```
# create rademade_admin_demo_development database
bin/rake db:migrate
bin/rake db:migrate:sequel
bin/rake rademade_admin:bower:install
bin/rails server
```

Run the site locally with Docker:
```
. .env
docker build . -t "$REGISTRY/$PROJECT_NAME"
docker-compose up
```

Create a user:
```
User.create(email: 'u1@gmail.com', password: '123456', admin: true)
```
