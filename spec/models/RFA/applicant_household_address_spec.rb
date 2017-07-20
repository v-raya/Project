require 'rspec'
require 'rails_helper'

include RSpec
describe Rfa::ApplicationResidence do
  it 'builds a default applicant household address ' do
    application_residence = FactoryGirl.build(:application_residence, weapon_in_home: true)
   expect(application_residence.weapon_in_home).to eq(true)
  end
end
