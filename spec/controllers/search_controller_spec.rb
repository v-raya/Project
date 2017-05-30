require 'rspec'
require 'rails_helper'

include RSpec

describe SearchController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  it 'renders the index template' do
    get :index
    expect(response).to render_template('index')
  end
end
