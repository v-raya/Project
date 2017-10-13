class WelcomeController < CalsBaseController
#  include AuthenticationProvider
  def index
    @applications = rfa_application_helper.all_expanded
  end

  def create

  end

  private

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end
end
