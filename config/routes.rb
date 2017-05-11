Rails.application.routes.draw do

  root 'search#index'
  resources :facilities,  only:[:index, :show] do
    collection { get :search }
  end
  resources :search, only:[:index] do

  end


  # heartbeat page
  get 'heartbeat', to: 'heartbeat#show'

end
