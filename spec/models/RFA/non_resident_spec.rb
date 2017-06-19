require 'rspec'
require 'rails_helper'

include RSpec
describe RFA::NonResident do
  it 'builds a default non resident' do
    non_resident = FactoryGirl.build(:non_resident, legal_middle: 'test middle')
   expect(non_resident.legal_middle).to eq('test middle')
  end
end
