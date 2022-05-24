# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # mount_devise_token_auth_for 'User', at: 'auth'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :articulos, only: %i[index show create update destroy]
  resources :temas, only: %i[index show create update destroy]
  resources :archivos, only: %i[index show create update destroy]
end
