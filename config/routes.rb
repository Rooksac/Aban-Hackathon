Rails.application.routes.draw do

  # namespace :api do
    # resources :admins
    resources :farsis, only: [:index]
    resources :englishes, only: [:index]
    resources :supportfor_protestors, only: [:index]
    resources :artworks, only: [:index]
    resources :media, only: [:index]
    
    # post '/login', to: 'admins#login'
    # get '/me', to: 'admins#me'
    get '/previewenglish', to: 'englishes#preview'
    get '/previewfarsi', to: 'farsis#preview'
  # end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? } 

end
