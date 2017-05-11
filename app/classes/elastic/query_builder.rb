class Elastic::QueryBuilder
    include ActiveModel::Model

    def self.match_and(query_hash)
        # read more about match query here
        # https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html

        # prepare array of match queries.
        a = []

        # each key is an attribute to query on
        query_hash.each{ |k,v|   a << {match: { k.to_sym => v }} }

        # wrap array in a bool AND(must)
        return {
            bool: {
                must: a
            }
        }
    end

    # query_array : array of hash - attributes and values to query
    # all keys of a hash will be combined with   AND
    #  each array item will be combined with  OR
    #
    # input [ {fac_co_nbr: '23', fac_name: 'home'}, {fac_co_nbr: '45'} ]
    # translates to  (fac_co_nbr: 23 AND fac_name: home) OR (fac_co_nbr: 45)
    # returns:
    # {"query":{"bool":{"should":[{"bool":{"must":[{"match":{"fac_co_nbr":"28"}},{"match":{"fac_name":"home"}}]}},{"bool":{"must":[{"match":{"fac_co_nbr":"18"}}]}}]}}}
    #
    def self.match_boolean(query_array)

        # prepare array of match queries.
        combined_query_array = []

        # loop through each array item to create piece of query
        query_array.each do |itm|
            combined_query_array << match_and(itm)
        end

        # wrap array in a bool OR query
        return {
            query: {
                bool: {
                    should: combined_query_array
                }
            }
        }
    end

end
