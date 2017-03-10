Rails.application.routes.draw do
  get 'notes' => 'notes#index'
  root 'notes#index'
end
