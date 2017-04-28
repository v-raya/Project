require 'rspec'
require 'rails_helper'

include RSpec

describe Facility do
  it 'builds a default facility model' do
    facility = FactoryGirl.build(:facility, fac_name: 'test')
    expect(facility.fac_name).to eq('test')
  end
end
