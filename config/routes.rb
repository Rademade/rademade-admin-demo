# -*- encoding : utf-8 -*-
Rails.application.routes.draw do

  mount RademadeAdmin::Engine => '/'
  namespace :rademade_admin, path: '/' do

    admin_resources :users, :posts, :tags
    admin_resources :authors, :articles, :rubrics
    admin_resources :galleries, :active_galleries, :only => []

  end

end
