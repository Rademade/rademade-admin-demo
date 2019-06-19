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
docker-compose run app bundle exec "wait-for-it -t 30 -h db -p 3306 -- rake db:migrate"
docker-compose run app bundle exec "wait-for-it -t 30 -h db -p 3306 -- rake db:migrate:sequel"
docker-compose run app bundle exec rake rademade_admin:bower:install
docker-compose run app bundle exec rake bower:install
```

Run the site locally:
```
docker-compose up
```

Create a user:
```
docker-compose run app bundle exec rails runner "User.create(email: 'admin@example.com', password: '123456', admin: true)"
```
