require 'rspec'
require 'rails_helper'

include RSpec
describe Occupation do
  it 'builds a default occupation' do
    occupation = FactoryGirl.build(:occupation, employer_name: 'test employer inc')
   expect(occupation.employer_name).to eq('test employer inc')
  end
end
