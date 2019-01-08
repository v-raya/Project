require 'rspec'
require 'rails_helper'

include RSpec

describe Complaint do
  it 'builds a default complaint model' do
    complaint = FactoryBot.build(:complaint, code: 99999)
    expect(complaint.code).to eq(99999)
  end
end
