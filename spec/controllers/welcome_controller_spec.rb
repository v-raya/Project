# frozen_string_literal: true

require 'rspec'
require 'rails_helper'

describe WelcomeController do
  before(:each) do
    allow_any_instance_of(WelcomeController).to receive(:user_from_session).and_return(FactoryBot.build(:user))
    allow(controller).to receive_messages(authenticate_with_cwds: true)
    allow(controller).to receive_messages(get_session_token: ENV['TOKEN'])
  end

  describe 'GET index' do
    it 'renders index' do
      get :index
      expect(response).to render_template('index')
    end
  end
end
