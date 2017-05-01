require 'rspec'
require 'rails_helper'

include RSpec

describe BaseApiProtocolProvider do
  it 'returns all for facility' do
    facilities = Facility.all

    expect(facilities).to eq(53)
  end
end
