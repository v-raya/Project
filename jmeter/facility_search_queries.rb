# frozen_string_literal: true

require 'ffaker'
require 'json'

100.times do
  h = {
    'county.id': {
      query_type: 'term',
      value: [(1...58).to_a.sample.to_s, ''].sample
    },
    'type.id': {
      query_type: 'term',
      value: [(1...18).to_a.sample.to_s, ''].sample
    },
    license_number: {
      query_type: 'match_phrase',
      value: ''
    },
    name: {
      query_type: 'match',
      value: [FFaker::Name.first_name, FFaker::Name.last_name, ''].sample
    },
    'addresses.address': {
      query_type: 'match',
      value: [FFaker::AddressUS.street_name, FFaker::AddressUS.state, ''].sample
    }
  }
  puts h.to_json
end
