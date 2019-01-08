require 'rspec'
require 'rails_helper'

include RSpec
describe Phone do
  it 'builds a default phone' do
    phone = FactoryBot.build(:phone, number: 9251115555)
   expect(phone.number).to eq(9251115555)
  end
end
