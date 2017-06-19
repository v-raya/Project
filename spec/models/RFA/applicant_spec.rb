require 'rspec'
require 'rails_helper'

include RSpec
describe RFA::Applicant do
  it 'builds a default Applicant' do
    applicant = FactoryGirl.build(:applicant, dl_number: 'D12345678')
   expect(applicant.dl_number).to eq('D12345678')
  end
end
