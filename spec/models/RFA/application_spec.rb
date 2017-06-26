require 'rspec'
require 'rails_helper'

include RSpec
describe RFA::Application do
  it 'builds a default rfa application' do
    rfa_application = FactoryGirl.build(:application, county: 12)
   expect(rfa_application.county).to eq(12)
  end
end
