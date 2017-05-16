require 'hypernova'

class FacilitiesController < CalsBaseController
  around_action :hypernova_render_support
  skip_before_action :verify_authenticity_token, only: [:search]
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
    query = Elastic::QueryProcessor.search_query(parsed_post_data['params'])
    @facilities = Facility.search query
    json_response @facilities
  end
end
