require 'rspec'
require 'rails_helper'

describe CalsBaseController do
  controller do
    def custom
      render json: true, status: :ok
    end
  end

  before do
    routes.draw do
      get 'custom' => 'cals_base#custom'
      get 'logout' => 'cals_base#logout'
    end
  end

  it 'sets token when token is empty' do
    allow(Cwds::Authentication).to receive(:token_generation).with('dcba', AUTHENTICATION_API_BASE_URL).and_return('abcd')
    allow(Cwds::Authentication).to receive(:token_validation).with('abcd', AUTHENTICATION_API_BASE_URL).and_return(true)

    process :custom, method: :get, params: {accessCode: 'dcba'}
    expect(session['token']).to eq('abcd')
  end

  it 'redirects when token invalid' do
    allow(Cwds::Authentication).to receive(:authentication_url).with(AUTHENTICATION_API_BASE_URL, 'http://test.host/custom').and_return('www.google.com')
    process :custom, method: :get
    expect(response).to redirect_to 'www.google.com'
  end

  it 'logs out the user' do
    allow_any_instance_of(CalsBaseController).to receive(:authenticate_with_cwds).and_return(true)
    allow(Cwds::Authentication).to receive(:authentication_url).with(AUTHENTICATION_API_BASE_URL, '').and_return('www.google.com')
    allow(Cwds::Authentication).to receive(:logout_url).with(AUTHENTICATION_API_BASE_URL, 'www.google.com').and_return('www.google.com/login')
    get :logout
    assert_redirected_to 'www.google.com/login'
  end
end
