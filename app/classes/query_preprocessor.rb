class QueryPreprocessor

  def self.params_to_elasticsearch_query(params)
    Elastic::QueryBuilder.match_boolean(params_to_query_hash(params))
  end

  def self.params_to_query_hash(params)
    # remove blank values from each array
    params.each{ |k,v| params[k] = v.reject{ |value| value.blank? } }
    # remove hash keys where value is empty
    params.delete_if{|k,v| v.empty?}
    # puts "params : #{params}"

    values = params.values
    # puts "valus : #{values}"

    keys = params.keys
    # puts "keys : #{keys}"

    # if more than 1 field selected, we need to generate combinations
    combinations = values[0].product(*values[1..-1])
    # puts "combinations : #{combinations}"

    # arrange combinations as array of hashes
    processed = combinations.map { |p| Hash[keys.zip p] }
    # puts "processed : #{processed}"
  end
end
