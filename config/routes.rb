Rails.application.routes.draw do

  # namespace :api do
    resources :admins
    resources :farsis
    resources :englishes
    resources :supportfor_protestors
    resources :artworks
    resources :media
    
    post '/login', to: 'admins#login'
    get '/me', to: 'admins#me'
    get '/previewenglish', to: 'englishes#preview'
    get '/previewfarsi', to: 'farsis#preview'
  # end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? } 

end
