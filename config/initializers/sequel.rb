require 'erb'
sequel_yml = YAML.load ERB.new(File.read "#{::Rails.root}/config/sequel.yml").result
DB = Sequel.connect(sequel_yml[::Rails.env])
DB.extension :pagination
Sequel::Dataset::Pagination.send(:include, Kaminari::Sequel)
