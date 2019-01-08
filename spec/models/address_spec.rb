require 'rspec'
require 'rails_helper'

include RSpec
describe Address do
  it 'builds a default address' do
    address = FactoryBot.build(:address, zip: 95823)
   expect(address.zip).to eq(95823)
  end
end
