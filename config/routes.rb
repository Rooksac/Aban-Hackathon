Rails.application.routes.draw do
  resources :supportfor_protestors
  resources :artworks
  resources :media
  resources :admins
  resources :farsis
  resources :englishes
  
  post '/login', to: 'admins#login'
  get '/me', to: 'admins#me'
  get '/previewenglish', to: 'englishes#preview'
  get '/previewfarsi', to: 'farsis#preview'
end
