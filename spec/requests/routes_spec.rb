require 'rails_helper'

RSpec.describe 'routes scope', :type => :request do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  context 'with custom relative url' do
    before(:each) do
      allow(controller).to receive_messages(:authenticate_with_cwds => true)
      allow(ENV).to receive(:[]).and_call_original
      allow(ENV).to receive(:[]).with('RAILS_RELATIVE_URL_ROOT').and_return('/cals')
      Cals::Application.reload_routes!
    end

    it 'redirects requests' do
      get '/cals/facilities'
      expect(response).to have_http_status(:redirect)
    end

    it 'does not raise requests' do
      expect { get '/cals/facilities' }.not_to raise_error
    end

    after do
      allow(ENV).to receive(:[]).with('RAILS_RELATIVE_URL_ROOT').and_call_original
      Cals::Application.reload_routes!
    end
  end

  context 'without custom relative url' do
    it 'redirects requests' do
      get '/facilities'
      expect(response).to have_http_status(:redirect)
    end
  end
end
