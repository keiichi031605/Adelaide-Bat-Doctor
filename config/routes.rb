Rails.application.routes.draw do
  root to: 'products#index'
  get 'map', to: 'maps#index'
  resources :products, only: [:index, :show]
end
