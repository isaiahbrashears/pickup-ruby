Rails.application.routes.draw do
  get 'welcome/index'
  # get 'calculator', to: 'welcome#calculator'
  # post 'calculator', to: 'welcome#calculator'

  get 'calculator', to:  'calculator#index'
  get 'bah', to: 'calculator#bah'
  post 'bah', to: 'calculator#bah'


  resources :games

  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
