require 'rspec'
require 'rails_helper'

include RSpec

describe Facility do
  it 'builds a default facility model' do
    facility = FactoryGirl.build(:facility, name: 'test')
    expect(facility.name).to eq('test')
  end
end
