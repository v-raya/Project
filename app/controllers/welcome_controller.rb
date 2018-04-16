# frozen_string_literal: true

class WelcomeController < CalsBaseController
  def index
    @applications = rfa_application_helper.all_expanded
    @content = Content::ContentService.new.filter_content(user_from_session)
  end

  def create; end

  private

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end
end
