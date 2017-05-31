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
    @facilities = facility_helper.search(params[:query])
    json_response @facilities
  end

  private

  def facility_helper
    Helpers::Facility.new(auth_header: session['token'])
  end
end
