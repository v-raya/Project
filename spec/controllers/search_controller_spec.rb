require 'rspec'
require 'rails_helper'

include RSpec

describe SearchController do
  it 'renders the index template' do
    get :index
    expect(response).to render_template('index')
  end
end
