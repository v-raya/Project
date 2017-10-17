

class SearchController < CalsBaseController


  def index
    @landingPage_url = SANDBOX_LANDING_URL
    @dictionaries    = dictionaries_helper.facilities_dictionaries
  end

  private

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end

end
