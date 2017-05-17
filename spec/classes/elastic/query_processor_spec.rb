require 'rspec'
require 'rails_helper'

describe Elastic::QueryProcessor do

  describe '#search_query' do
    context 'with more than 1 non empty arrays as values' do
      it 'builds query with single element arrays as values' do
        expected_output = {query: {bool: {should: [{bool: {must: [{match: {county: '01'}}, {match: {type: '02'}}, {match: {fac_name: 'home'}}]}}]}}}

        unprocessed_params = {'county': ['01'], 'type': ['02'], 'fac_nbr': [''], 'fac_name': ['home'], 'fac_addr': ['']}
        output = Elastic::QueryProcessor.search_query(unprocessed_params)

        expect(output).to eq(expected_output)
      end

      it 'builds query with multiple element arrays as values' do
        expected_output = {query:
                               {bool:
                                    {should:
                                         [{bool: {must: [{match: {county: '01'}}, {match: {type: '2'}}, {match: {fac_nbr: '80'}}]}},
                                          {bool: {must: [{match: {county: '01'}}, {match: {type: '2'}}, {match: {fac_nbr: '90'}}]}},
                                          {bool: {must: [{match: {county: '01'}}, {match: {type: '4'}}, {match: {fac_nbr: '80'}}]}},
                                          {bool: {must: [{match: {county: '01'}}, {match: {type: '4'}}, {match: {fac_nbr: '90'}}]}},
                                          {bool: {must: [{match: {county: '02'}}, {match: {type: '2'}}, {match: {fac_nbr: '80'}}]}},
                                          {bool: {must: [{match: {county: '02'}}, {match: {type: '2'}}, {match: {fac_nbr: '90'}}]}},
                                          {bool: {must: [{match: {county: '02'}}, {match: {type: '4'}}, {match: {fac_nbr: '80'}}]}},
                                          {bool: {must: [{match: {county: '02'}}, {match: {type: '4'}}, {match: {fac_nbr: '90'}}]}}]
                                    }
                               }
        }

        unprocessed_params = {'county': ['01', '02'], 'type': ['2', '4'], 'fac_nbr': ['80', '90']}
        output = Elastic::QueryProcessor.search_query(unprocessed_params)

        expect(output).to eq(expected_output)
      end
    end

    context 'with only one multi element array as value' do
      it 'builds query with one multiple element array as value' do
        expected_output = {query: {bool: {should: [{bool: {must: [{match: {county: '01'}}]}}, {bool: {must: [{match: {county: '02'}}]}},
                                                   {bool: {must: [{match: {county: '03'}}]}}]}}}
        unprocessed_params = {'county': ['01', '02', '03']}
        output = Elastic::QueryProcessor.search_query(unprocessed_params)

        expect(output).to eq(expected_output)
      end
    end
  end
end
