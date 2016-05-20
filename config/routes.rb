Rails.application.routes.draw do

  get 'welcome/index'

  namespace :api do
    resources :workouts
  end

  root 'welcome#index'

end
