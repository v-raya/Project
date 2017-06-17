Rails.application.routes.draw do
  scope ENV['RAILS_RELATIVE_URL_ROOT'] || '/' do
    root 'search#index'

    resources :facilities, only: [:index, :show] do
      collection { post :search }
    end

    resources :search, only: [:index] do
    end

    # heartbeat page
    get 'heartbeat', to: 'heartbeat#show'
  end
end
