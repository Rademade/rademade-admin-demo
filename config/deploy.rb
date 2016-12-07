lock '3.4.0'

set :application, 'RademadeAdminDemo'

set :deploy_to, '/home/rademade-admin/website-production'

set :scm, :git
set :repo_url, 'git@github.com:Rademade/rademade-admin-demo.git'

# setup rvm.
set :rvm_type,          :system
set :rvm_ruby_version,  'ruby-2.3.0@rademade-admin'

# how many old releases do we want to keep, not much
set :keep_releases, 5

# files we want symlinking to specific entries in shared
set :linked_files, %w{
  config/database.yml
  config/mongoid.yml
  config/sequel.yml
  config/secrets.yml
}

# dirs we want symlinking to shared
set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/uploads}

set(:config_files, %w(database.yml mongoid.yml sequel.yml secrets.yml))

namespace :deploy do

  namespace :assets do
    before 'deploy:assets:precompile', 'deploy:assets:create_manifest_json'
    task :create_manifest_json do
      on roles :web do
        within release_path do
          execute :mkdir, release_path.join('assets_manifest_backup')
        end
      end
    end
  end

  desc 'Download bower components for admin panel'
  task 'admin:bower:install' do
    on roles(:web) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'rademade_admin:bower:install'
        end
      end
    end
  end

  desc 'Export i18n js'
  task 'i18n:js:export' do
    on roles(:web) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'i18n:js:export'
        end
      end
    end
  end

  desc 'Restart application'
  after :restart, :restart_passenger do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      within release_path do
        execute :touch, 'tmp/restart.txt'
      end
    end
  end

  desc 'Migrate sequel'
  task 'sequel:migrate' do
    on roles(:web) do
      within release_path do
        with rails_env: fetch(:rails_env) do
          execute :rake, 'sequel:migrate'
        end
      end
    end
  end

  before 'deploy:assets:precompile', 'deploy:i18n:js:export'
  before 'deploy:assets:precompile', 'deploy:admin:bower:install'
  after :updated, 'sequel:migrate'
  after :finishing, 'deploy:restart_passenger'
  after :finishing, 'deploy:cleanup'
end
