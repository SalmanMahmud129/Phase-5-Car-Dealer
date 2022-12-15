Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:index, :show, :create]
  resources :vehicles
  resources :reviews
  

  # Route for login session
  post "/login", to: "sessions#create"

  #Route for Auth
  get "/auth", to: "users#show"

  #Route for staying logged in
  get "/me", to: "users#show"

  #Route for logging out
  delete "/logout", to: "sessions#destroy"

  
  
  get '/hello', to: 'application#hello_world'


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
