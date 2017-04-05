Rails.application.routes.draw do
  root 'pages#index'
  resources :facilities,  only:[:index, :show] do
    collection { get :search }
  end
  resources :search, only:[:index] do

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
