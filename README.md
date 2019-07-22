# rademade-admin-demo

Requirements:
```
Docker
Docker Compose
```

Preparations:
```
docker-compose pull
docker-compose build
docker-compose run app sh -c '
    bundle install
    wait-for-it -h db -p 3306
    rake db:migrate
    rake db:migrate:sequel
    rake db:schema:dump
    rake rademade_admin:bower:install
    rake bower:install
'
```

Run the site locally:
```
docker-compose up
```

Create a user:
```
docker-compose run app bundle exec rails runner "User.create(email: 'admin@example.com', password: '123456', admin: true)"
```
