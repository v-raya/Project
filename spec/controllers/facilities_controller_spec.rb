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
      expect(assigns(:facilities).size).to eq(38547)
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

describe FacilitiesController, :type => :controller do
  context 'set session token' do
    it 'should token if token is empty' do
      allow(Cwds::Authentication).to receive(:token_validation).with('abcd', AUTHENTICATION_API_BASE_URL).and_return(true)

      get :index, params: {token: 'abcd'}
      expect(session['token']).to eq('abcd')
    end
  end

  it 'should redirect if token invalid' do
    allow(Cwds::Authentication).to receive(:authentication_url).with(AUTHENTICATION_API_BASE_URL, 'http://test.host/facilities').and_return('www.google.com')

    get :index
    response.should redirect_to 'www.google.com'
  end
end
