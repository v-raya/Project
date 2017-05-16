class Elastic::QueryProcessor
  include ActiveModel::Model

  def self.search_query(unprocessed_params)
    query_builder_params = process_params(unprocessed_params)
    Elastic::QueryBuilder.match_boolean(query_builder_params)
  end

  private
  def self.process_params(unsanitized_params)
    params = unsanitized_params.select { |key, value| value.present? }

    values = params.values
    keys = params.keys
    if values.count > 1
      combinations = values[0].product(*values[1..-1])
      processed = combinations.map { |p| Hash[keys.zip p] }
    else
      processed = params.map { |k, values| values.map { |v| Hash[k, v] } }.flatten
    end
    processed
  end
end
