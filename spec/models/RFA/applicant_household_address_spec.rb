require 'rspec'
require 'rails_helper'

include RSpec
describe RFA::ApplicantHouseholdAddress do
  it 'builds a default applicant household address ' do
    applicant_household_address = FactoryGirl.build(:applicant_household_address, weapons: true)
   expect(applicant_household_address.weapons).to eq(true)
  end
end
