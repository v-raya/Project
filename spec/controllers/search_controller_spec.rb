require 'rspec'
require 'rails_helper'

describe SearchController do
  before(:each) do
    allow(controller).to receive_messages(authenticate_with_cwds: true)
    allow(controller).to receive_messages(get_session_token: ENV['TOKEN'])
  end
  describe 'GET index' do
    it 'renders the index template without requiring to check priviliges' do
      allow(controller).to receive(:check_for_priviliges).and_return(['Something'])
      get :index
      expect(response).to render_template('index')
    end
    it 'does not render the index template with requiring to check priviliges' do
      allow(controller).to receive(:check_for_priviliges).and_return([])
      get :index
      expect(response).to render_template('errors/forbidden_page')
    end
  end
end
