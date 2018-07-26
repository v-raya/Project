# frozen_string_literal: true

class Trackings::A02Controller < CalsBaseController
  before_action -> { require_rfa_privilege(method(:edit)) }, only: [:edit]

  def index
    a02_response = rfa02_helper.create_a02(params[:tracking_id])
    redirect_to edit_tracking_a02_path(params[:tracking_id], a02_response.id)
  end

  def edit
    @user = user_from_session
    @tracking = tracking_helper.find_by_id(params[:tracking_id])
    @rfa02 = rfa02_helper.find_by_id(params[:tracking_id], params[:id])
  end

  def update
    @a02_id = params[:id]
    @tracking_id = params[:tracking_id]
    rfa02_helper.update(@tracking_id, @a02_id, a02_params.to_json)
    render json: rfa02_helper.find_by_id(@tracking_id, @a02_id)
  rescue ApiError => e
    render json: e.response, status: e.status
  end

  private

  def a02_params
    params.require(:a02)
  end

  def tracking_helper
    Helpers::Rfa::TrackingHelper.new(auth_header: get_session_token)
  end

  def rfa02_helper
    Helpers::Rfa::A02Helper.new(auth_header: get_session_token)
  end
end
