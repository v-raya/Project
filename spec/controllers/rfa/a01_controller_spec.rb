require 'rspec'
require 'rails_helper'

include RSpec

describe  Rfa::A01Controller do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  describe 'Post create' do
    it 'makes a application and returns its id' do
      post :create

      expect(response.status).to eq(302)
      #redirect was successfull
    end
  end
  
  describe 'get edit' do
    it 'renders the edit page' do
      rfa_application =   FactoryGirl.build(:application, id: 7)
      get :edit, {params: {id: rfa_application.id}}
      expect(response).to render_template('edit')
    end
  end
end
