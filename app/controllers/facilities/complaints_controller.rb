# frozen_string_literal: true

class Facilities::ComplaintsController < CalsBaseController
  include Response

  def index
    complaints = complaint_helper.find_by_facility(params[:facility_id])
    json_response complaints
  rescue ApiError => e
    render json: e.response, status: e.status
  end

  private

  def complaint_helper
    Helpers::Complaint.new(auth_header: get_session_token)
  end
end
