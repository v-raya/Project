class QueryPreprocessor

  def self.params_to_query_hash(params)
    # remove blank values from each array
    params.each{ |k,v| params[k] = v.reject{ |value| value.blank? } }
    params.delete_if{|k,v| v.empty?}
    values = params.values
    keys = params.keys
    # if more than 1 field selected, we need to generate combinations
    # if empty, it should get out & return no val
    combinations = values[0].product(*values[1..-1])
    # map combinations of values to keys and create hashes
    combinations.map { |p| Hash[keys.zip p] }
  end
end
