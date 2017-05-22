require 'rspec'
require 'rails_helper'

describe QueryPreprocessor do

  describe '#search_query' do
    context 'with more than 1 non empty arrays as values' do
      it 'builds query with single element arrays as values' do
        expected_output = [{:county=>'01', :type=>'02', :fac_name=>'home'}]
        params = {'county': ['01'], 'type': ['02'], 'fac_nbr': [''], 'fac_name': ['home'], 'fac_addr': ['']}
        output = QueryPreprocessor.params_to_query_hash(params)

        expect(output).to eq(expected_output)
      end

      it 'builds query with multiple element arrays as values' do
        expected_output =[{:county=>'01', :type=>'2', :fac_nbr=>'80'},
                          {:county=>'01', :type=>'2', :fac_nbr=>'90'},
                          {:county=>'01', :type=>'4', :fac_nbr=>'80'},
                          {:county=>'01', :type=>'4', :fac_nbr=>'90'},
                          {:county=>'02', :type=>'2', :fac_nbr=>'80'},
                          {:county=>'02', :type=>'2', :fac_nbr=>'90'},
                          {:county=>'02', :type=>'4', :fac_nbr=>'80'},
                          {:county=>'02', :type=>'4', :fac_nbr=>'90'}]
        params = {'county': ['01', '02'], 'type': ['2', '4'], 'fac_nbr': ['80', '90']}
        output = QueryPreprocessor.params_to_query_hash(params)

        expect(output).to eq(expected_output)
      end
    end

    context 'with only one multi element array as value' do
      it 'builds query with one multiple element array as value' do
        expected_output = [{:county=>'01'}, {:county=>'02'}, {:county=>'03'}]
        params = {'county': ['01', '02', '03']}
        output = QueryPreprocessor.params_to_query_hash(params)

        expect(output).to eq(expected_output)
      end
    end
  end
end
