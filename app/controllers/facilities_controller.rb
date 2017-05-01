class FacilitiesController < CalsBaseController
  include Response

  def index
    @facilities = Facility.all
    respond_to do |format|
      format.html
      format.js
      format.json { render json: @facilities, status: :ok }
    end
  end

  def show
    @facility ||= Facility.find_by_id(params[:id])
    respond_to do |format|
      format.html
      format.js
      format.json { render json: @facility, status: :ok }
    end
  end

  def search
    @facilities = Facility.search(params[:query])
    json_response @facilities
  end
end
