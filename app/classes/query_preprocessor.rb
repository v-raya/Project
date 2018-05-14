class QueryPreprocessor

  # input {key1: [v1, v2], key2: v3}
  # output [{key1: v1, key2: v3}, {key1: v2, key2: v3}]
  def self.params_to_query_hash(params)
    # remove blank values from each array
    params.each do |k,v|
      params[k] = [v] if v.class != Array
      params[k] = params[k].reject{ |value| value.blank? }
    end
    params.delete_if{|k,v| v.empty?}
    values = params.values
    # if more than 1 field selected, we need to generate combinations
    combinations = values[0].product(*values[1..-1])
    # map combinations of values to keys and create hashes
    combinations.map { |p| Hash[params.keys.zip p] }
  end
end
