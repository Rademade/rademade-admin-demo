namespace :db do
  task 'migrate:sequel': :environment do
    require 'sequel'
    Sequel.extension :migration
    Sequel::Migrator.run(DB, 'db/sequel', table: 'schema_migrations_sequel')
  end
end
