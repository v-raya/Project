
require 'hypernova'

class FacilitiesController < CalsBaseController
  around_action :hypernova_render_support
  include Response

  def index
    @facilities = Facility.all.to_json

    # respond_to do |format|
    #   format.html
    #   format.js
    #   format.json { render json: @facilities, status: :ok }
    # end
  end

  def show
    @facility ||= Facility.find_by_id(params[:id])

    @children ||= @facility.children.to_json
    @complaints ||= @facility.complaints.to_json
    @facility = @facility.to_json

    # respond_to do |format|
    #   format.html
    #   format.js
    #   format.json { render json: @facility, status: :ok }
    # end
  end

  def search
    @facilities = Facility.search(params[:query])
    json_response @facilities
  end
end
