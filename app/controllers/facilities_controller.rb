class FacilitiesController < CalsBaseController
  before_action -> { require_privilege(method(:show)) }, only: [:show]

  include Response

  def facility
    @facilities = {}
    @facilities['facility'] = facility_helper.find_by_id(params[:id])
    @facilities['children'] = child_helper.find_by_facility(params[:id])
    @facilities['complaints'] = complaint_helper.find_by_facility(params[:id])
    json_response @facilities
  end

  def show; end

  def search
    page_params = {}
    page_params['size_params'] = params[:size]
    page_params['from_params'] = params[:from]
    page_params['sort_params'] = params[:sort]
    page_params['order_params'] = params[:order]
    post_data = request.body.read
    parsed_post_data = JSON.parse(post_data)
    params_dictionary = {}
    parsed_post_data.each do |k, v|
      if k == 'addresses.address.street_address'
        params_dictionary[k] = v.split(',')
      else
        params_dictionary[k] = [v]
      end
    end
    query_hash = QueryPreprocessor.params_to_query_hash(params_dictionary)
    logger.info "query_hash: #{query_hash}"
    es_query_json = Elastic::QueryBuilder.facility_search_v1(query_hash, page_params).to_json
    logger.info "es query: #{es_query_json}"
    @facilities = facility_helper.search es_query_json
    @facilities_response = {}
    @facilities_response['facilities'] = @facilities['hits']['hits'].collect { |facility| facility['_source']}
    @facilities_response['total'] = @facilities['hits']['total']
    json_response @facilities_response
  rescue ApiError => e
    render json: e.response, status: e.status
  end

  private

  def facility_helper
    Helpers::Facility.new(auth_header: get_session_token)
  end

  def child_helper
    Helpers::Child.new(auth_header: get_session_token)
  end

  def complaint_helper
    Helpers::Complaint.new(auth_header: get_session_token)
  end
end
