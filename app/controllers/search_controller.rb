class SearchController < CalsBaseController
  before_action -> { require_search_privilege(method(:index)) }
  include Response

  def index; end

  def user_and_dictionaries
    dictionaries = dictionaries_helper.facilities_dictionaries
    user = user_from_session
    user_dictionaries = {}
    user_dictionaries['countyTypes'] = dictionaries[:county_types]
    user_dictionaries['facilityTypes'] = dictionaries[:facility_types]
    user_dictionaries['user'] = user
    json_response user_dictionaries
  end

  private
  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end

end
