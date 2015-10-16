source 'https://rubygems.org'

gem 'rademade_admin', github: 'Rademade/rademade_admin', branch: 'dev'

# Mongoid
gem 'mongoid'
gem 'mongoid-paranoia'
gem 'mongoid-grid_fs'
gem 'mongoid-tree'
gem 'carrierwave-mongoid', require: 'carrierwave/mongoid'
gem 'mongoid_sortable_relation'

# Sql
gem 'mysql2', '~> 0.3', '< 0.4'

# Active Record
gem 'globalize'
gem 'activerecord_sortable'

# Sequel
gem 'sequel'
gem 'carrierwave-sequel', require: 'carrierwave/sequel'

# Uploaders
gem 'carrierwave'

group :development do
	gem 'capistrano', '3.2.1'
	gem 'capistrano-rails', '~> 1.1'
	gem 'capistrano-bundler'
	gem 'capistrano-rvm', '0.1.2'
	gem 'pry'
end

group :test, :development do
	gem 'rspec'
end