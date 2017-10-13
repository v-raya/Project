require 'rails_helper'

RSpec.describe 'routes scope', :type => :request do

  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  context 'with custom relative url' do
    let(:app) {
      Rack::Builder.parse_file(File.expand_path('../../../config.ru', __FILE__)).first
    }

    before(:context) do
      @tmp_env_var = ENV['RAILS_RELATIVE_URL_ROOT']
      ENV['RAILS_RELATIVE_URL_ROOT']='/cals'
    end

    it 'redirects requests' do
      get '/cals/facilities'
      expect(response).to have_http_status(:redirect)
    end

    it 'does not raise error' do
      expect { get '/cals/facilities' }.not_to raise_error
    end

    after(:context) do
      @app = nil
      ENV['RAILS_RELATIVE_URL_ROOT'] = @tmp_env_var
    end

  end

  context 'without custom relative url' do
    before(:each) do
      allow(controller).to receive_messages(:authenticate_with_cwds => true)
    end

    it 'redirects requests' do
      get '/facilities'
      expect(response).to have_http_status(:redirect)
    end
  end
end
