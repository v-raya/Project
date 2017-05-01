require 'rspec'
require 'rails_helper'

include RSpec

describe Child do
  it 'builds a default child model' do
    child = FactoryGirl.build(:child, name: 'test')
    expect(child.name).to eq('test')
  end
end
