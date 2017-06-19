require 'rspec'
require 'rails_helper'

include RSpec

describe FacilitiesController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  describe 'GET index' do
    it 'assigns @facilities' do
      get :index
      expect(assigns(:facilities).size).to eq(53)
    end

    it 'renders the index template' do
      get :index
      expect(response).to render_template('index')
    end
  end

  describe 'POST search' do
    it 'renders search' do
      request.headers['Content-Type'] = 'application/json'
      request.headers['Accept'] = 'application/json'

      post :search, {:params => {:params => {:fac_name => ['home']}}}
      expect(response.status).to eq(200)
      expect(response.body.include?('TWEEDLE'))
    end
  end
end
