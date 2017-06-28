class FacilitiesController < CalsBaseController

  include Response

  def index
    #  @race_types = Helpers::Dictionaries::RaceTypeHelper.new(auth_header: 'abc').all
    # byebug
    # rfa_application_helper.create_application
    @facilities = facility_helper.all
  end

  def show
    @facility = facility_helper.find_by_id(params[:id])
    # @facility ||= Facility.find_by_id(params[:id])
    @children ||= @facility.children
    @complaints ||= @facility.complaints
    @facility = @facility
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
  def rfa_application_helper
    Helpers::RFA::Application.new(auth_header: session['token'])
  end
end
