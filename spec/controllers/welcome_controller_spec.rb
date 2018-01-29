require 'rspec'
require 'rails_helper'

describe WelcomeController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
    allow(controller).to receive_messages(:get_session_token => ENV['TOKEN'])
  end

  describe 'GET index' do
    it 'renders index' do
      get :index
      expect(response).to render_template('index')
    end
  end
end
