require 'rspec'
require 'rails_helper'

include RSpec
describe RFA::HouseholdAdult do
  it 'builds a default household adult' do
    household_adult = FactoryGirl.build(:household_adult, legal_first: 'test first')
   expect(household_adult.legal_first).to eq('test first')
  end
end
