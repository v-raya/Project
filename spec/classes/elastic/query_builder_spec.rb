require 'rspec'
require 'rails_helper'

describe FacilitiesController do

  describe "Build query" do
    it "builds simple bool AND" do

      expected_output = {
        bool: {
          must: [
            { match_phrase: {'fac_co_nbr':'28'} },
            { match_phrase:{'fac_name':'home'} }
          ]
      }}

      input = {fac_co_nbr: '28', fac_name: 'home'}
      output = Elastic::QueryBuilder.match_and(input)

      expect(output).to eq(expected_output)
    end

    it "builds complex bool AND/OR" do

      expected_output = {
        query: {
          bool: {
            should: [
              {bool:
               {must: [
                  {match_phrase:{'fac_co_nbr':'28'}},
                  {match_phrase:{'fac_name':'home'}}
                ]
                }
               }]
          }
        },
        from: '0',
        size: '5' 
      }

      input = [{"fac_co_nbr"=>"28", "fac_name"=>"home"}]
      from = "0"
      size = "5"
      output = Elastic::QueryBuilder.match_boolean(input, from, size)
      expect(output).to eq(expected_output)
    end

  end

end
