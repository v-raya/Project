require 'hypernova'

class FacilitiesController < CalsBaseController
  around_action :hypernova_render_support
  include Response

  def index
  #  @facilities = facility_helper_session.all.to_json
    f ||= atomic_facility
    @facilities = f.all.to_json
    # respond_to do |format|
    #   format.html
    #   format.js
    #   format.json { render json: @facilities, status: :ok }
    # end
  end

  def show
    f ||= atomic_facility
    @facility = f.find_by_id(params[:id])
    # @facility ||= Facility.find_by_id(params[:id])

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
    @facilities = atomic_facility.search(params[:query])
    json_response @facilities
  end
end

def atomic_facility
  Helpers::FacilityModelHelper.new(auth_header: session['token'])
end

private :atomic_facility
