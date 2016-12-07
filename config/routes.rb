# -*- encoding : utf-8 -*-
Rails.application.routes.draw do

  mount RademadeAdmin::Engine => '/'
  namespace :rademade_admin, path: '/' do

    # Active record
    admin_resources :authors, :articles, :rubrics
    # Sequel
    admin_resources :categories, :items, :colors

  end

end
