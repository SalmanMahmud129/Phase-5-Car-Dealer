Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:index, :show, :create]
  resources :vehicles
  resources :reviews
  resources :shopping_carts
  # resources :cart_vehicles
  
  # get the users cart
  get "/current-cart", to: "shopping_carts#current_cart"


  
  post "/add-to-cart/:id", to: "cart_vehicles#create"

  delete "/remove-from-cart/:id", to: "cart_vehicles#destroy"



  # Create payment intent

  post "/create-payment-intent", to: "charge#create"

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
