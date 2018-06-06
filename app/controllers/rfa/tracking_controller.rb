# frozen_string_literal: true

class Rfa::TrackingController < CalsBaseController
  def index
    tracking_response = tracking_helper.create_tracking(params[:a01_id])
    redirect_to edit_rfa_a01_tracking_path(id: tracking_response['id'], a01_id: params[:a01_id])
  end

  def edit
    @user = user_from_session
    @rfa_application = rfa_application_helper.find_by_application_id(params[:a01_id])
    @tracking = tracking_helper.find_by_id(params[:id], params[:a01_id])
  end

  def update
    # TODO: impl
  end

  def delete; end

  private

  def tracking_params; end

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end

  def tracking_helper
    Helpers::Rfa::TrackingHelper.new(auth_header: get_session_token)
  end
end
