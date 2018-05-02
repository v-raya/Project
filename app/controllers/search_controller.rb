class SearchController < CalsBaseController
  before_action -> { require_privilege(method(:index)) }

  def index
    @landingPage_url = SANDBOX_LANDING_URL
    @dictionaries    = dictionaries_helper.facilities_dictionaries
    @user = user_from_session
  end

  private
  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end

end
