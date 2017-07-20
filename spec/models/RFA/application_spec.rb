require 'rspec'
require 'rails_helper'

include RSpec
describe Rfa::Application do
  it 'builds a default rfa application' do
    rfa_application = FactoryGirl.build(:application, id: 12)
   expect(rfa_application.id).to eq(12)
  end
end
