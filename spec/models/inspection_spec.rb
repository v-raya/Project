require 'rspec'
require 'rails_helper'

include RSpec

describe Inspection do
  it 'builds a default inspection model' do
    inspection = FactoryGirl.build(:inspection, id: 77777)
    expect(inspection.id).to eq(77777)
  end
end
