Rails.application.routes.draw do
  root 'welcome#index'

  resources :facilities, only: [:show] do
    get 'profile'
    collection { post :search }
    resources :children, only: [:index], controller: 'facilities/children'
    resources :complaints, only: [:index], controller: 'facilities/complaints'
  end

  resources :search do
    collection { post :user_and_dictionaries}
  end

  # heartbeat page
  get 'heartbeat', to: 'heartbeat#show'
  get 'logout',   to: 'cals_base#logout'



  namespace :rfa do
    constraints lambda{ |request| !DISABLE_RFA_APPLICATION } do
      resources :a01 do
        post :submit, on: :member
        resources :applicant, only: [:index, :create, :edit]
        resource :residence, only: [:show, :create, :edit]
        resources :c01
        resources :tracking
      end
      resources :b01
    end

  end
  #get 'geoservice', to: 'geoservice#show'
  resources :geoservice, only: [:create] do
    collection { post :validate }
  end
end
