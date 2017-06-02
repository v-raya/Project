require 'hypernova'

class FacilitiesController < CalsBaseController
  around_action :hypernova_render_support
  include Response

  def index
    @facilities = facility_helper.all.to_json
  end

  def show
    @facility = facility_helper.find_by_id(params[:id])
    # @facility ||= Facility.find_by_id(params[:id])
    @children ||= @facility.children.to_json
    @complaints ||= @facility.complaints.to_json
    @facility = @facility.to_json
  end

  def search
    post_data = request.body.read
    parsed_post_data = JSON.parse(post_data)

    query_hash = QueryPreprocessor.params_to_query_hash(parsed_post_data['params'])
    logger.info "query_hash: #{query_hash}"
    es_query_json = Elastic::QueryBuilder.match_boolean(query_hash).to_json
    logger.info "es query: #{es_query_json}"
    @facilities = facility_helper.search es_query_json
    json_response @facilities
  end

  private

  def facility_helper
    Helpers::Facility.new(auth_header: session['token'])
  end
end
