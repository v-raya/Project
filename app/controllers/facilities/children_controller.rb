# frozen_string_literal: true

class Facilities::ChildrenController < CalsBaseController
  include Response

  def index
    children = child_helper.find_by_facility(params[:facility_id])
    json_response children
  rescue ApiError => e
    render json: e.response, status: e.status
  end

  private

  def child_helper
    Helpers::Child.new(auth_header: get_session_token)
  end
end
