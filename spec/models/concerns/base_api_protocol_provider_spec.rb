require 'rspec'
require 'rails_helper'

include RSpec

describe BaseApiProtocolProvider do
  it 'returns all for facility' do
    facilities = Facility.all
    expect(facilities.size).not_to eq(0)
  end
end
