class Rfa::C01Controller < CalsBaseController

  def index
    rfa_c01_app_response = rfa_c01_application_helper.create(params[:a01_id], '{}')
    redirect_to edit_rfa_a01_c01_path(id: rfa_c01_app_response.id, a01_id: params[:a01_id])
  end

  def edit
    @dictionaries = dictionaries_helper.rfa_c01_dictioniaries
    @rfa_c1_application = rfa_c01_application_helper.find_by_id(params[:a01_id], params[:id])
    @application = rfa_application_helper.find_by_id(params[:a01_id])
  end

  def update
    c01_application_response = params[:c01]
    a01_application_id = params[:a01_id]
    c01_application_id = params[:id]
    rfa_c01_application_helper.update(a01_application_id, c01_application_id, c01_application_response.to_json)
  end

  private

  def rfa_c01_application_helper
    Helpers::Rfa::C01::ApplicationHelper.new(auth_header: get_session_token)
  end

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end
end
