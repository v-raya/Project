require 'rspec'
require 'rails_helper'

include RSpec

describe Rfa::ResidenceController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  describe 'post create' do
    it 'makes an a residence' do
  
    end
  end


end
