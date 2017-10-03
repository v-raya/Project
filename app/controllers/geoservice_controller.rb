class GeoserviceController < CalsBaseController
  def create
    @response_from_suggestion = geoservice_helper.suggest(params)
    render :json =>  @response_from_suggestion
  end

  def geoservice_helper
    Helpers::GeoserviceHelper.new(auth_header: get_session_token)
  end

end
