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
               },
              {bool:
               {must: [
                  {match_phrase:{'fac_co_nbr':'18'}}
                ]
                }
               }]
          }
        }
      }

      input = [ {fac_co_nbr: '28', fac_name: 'home'}, {fac_co_nbr: '18'} ]
      output = Elastic::QueryBuilder.match_boolean(input)

      expect(output).to eq(expected_output)
    end

  end

end
