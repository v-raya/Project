# frozen_string_literal: true

class WelcomeController < CalsBaseController
  def index
    @applications = rfa_application_helper.all_expanded
    @check_for_priviliges = check_for_priviliges
  end

  def create; end

  private

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end
end
