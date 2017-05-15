require 'hypernova'

class FacilitiesController < CalsBaseController
  around_action :hypernova_render_support
  skip_before_action  :verify_authenticity_token,  only: [:search]
  include Response

  def index
    @facilities = Facility.all.to_json
  end

  def show
    @facility ||= Facility.find_by_id(params[:id])
    @children ||= @facility.children.to_json
    @complaints ||= @facility.complaints.to_json
    @facility = @facility.to_json
  end

  def search
    post_data = request.body.read
    parsed_post_data = JSON.parse(post_data)

    query = search_query(parsed_post_data['params'])

    @facilities = Facility.search query
    json_response @facilities
  end

  private
  def search_query(unprocessed_params)
    if unprocessed_params['county'].is_a?(Array) || unprocessed_params['county'].is_a?(Array)
      query_builder_params = process_params(unprocessed_params)
      Elastic::QueryBuilder.match_boolean(query_builder_params)
    else
      Elastic::QueryBuilder.match_and(unprocessed_params)
    end
  end

  def process_params params
    processed=[]
    single_value_params = params.reject { |k| ['county', 'type'].include?(k) }

    params['county'] = params['county'].is_a?(Array) ? params['county'] : [params['county']]
    params['type'] = params['county'].is_a?(Array) ? params['county'] : [params['county']]

    params['county'].each do |county|
      params['type'].each do |type|
        processed << {'county' => county, 'type' => type}.merge(single_value_params)
      end
    end
    processed
  end
end
