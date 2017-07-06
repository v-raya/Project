require 'rspec'
require 'rails_helper'

include RSpec

describe WelcomeController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  describe 'GET index' do
    it 'renders index' do
      get :index
      expect(response).to render_template('index')
    end
  end
end
