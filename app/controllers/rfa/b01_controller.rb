class Rfa::B01Controller < CalsBaseController
  def create
    # make api call to create application
    # rfa_app_response = rfa_b01_application_helper.create_rfa_b01_application
    # rfa_b01_application = Rfa::ApplicationB01.new(rfa_app_response['id'])
    # redirect_to edit_rfa_b01_path(rfa_b01_application.id)
  end

  def index
    @hi = 'hi'
    @dictionaries = dictionaries_helper.rfa_b01_dictioniaries
  end

  def edit
    @dictionaries = dictionaries_helper.rfa_b01_dictioniaries
    # @application = rfa_b01_application_helper.find_by_id(params[:id])
  end

  def update; end

  private

  def rfa_b01_application_helper
    Helpers::Rfa::B01::ApplicationHelper.new(auth_header: get_session_token)
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end
end
