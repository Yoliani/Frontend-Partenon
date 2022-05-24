# frozen_string_literal: true

Rails.application.routes.draw do
  # devise_for :users,
  #            controllers: {
  #              sessions: 'users/sessions',
  #              registrations: 'users/registrations'
  #            }
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'users/registrations'
  }
  get '/member-data', to: 'members#show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :articulos, only: %i[index show create update destroy]
  resources :temas, only: %i[index show create update destroy]
  resources :archivos, only: %i[index show create update destroy]
end
