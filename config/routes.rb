Rails.application.routes.draw do
  root 'welcome#index'

  resources :facilities, only: [:index, :show] do
    collection { post :search }
  end

  resources :search, only: [:index] do
  end

  # heartbeat page
  get 'heartbeat', to: 'heartbeat#show'


  namespace :rfa do
    resources :a01, only: [ :show, :create, :edit, :update] do

      resources :applicant, only: [:index, :create, :edit]
      resource :residence, only: [:show, :create, :edit]

    end

  end

  resource :rfa, controller: :rfa, only: [] do
    member do
      get :show
      get :index
      get :residence_ownership_types
      get :languages
      get :name_types
      get :phone_number_types

      post :residence
    end
  end

end
