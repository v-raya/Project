# frozen_string_literal: true

class Rfa::ContactsController < CalsBaseController
  before_action -> { require_rfa_privilege(method(:edit)) }, only: [:edit]

  def new
    @user = user_from_session
    @dictionaries = dictionaries_helper.contact_dictionaries
    @rfa_application = rfa_application_helper.find_by_application_id(params[:a01_id])
  end

  def create
    contact_helper.create_contact(params[:a01_id], contact_params.to_json)
  rescue ApiError => e
    render json: e.response, status: e.status
  end

  def edit
    @user = user_from_session
    @dictionaries = dictionaries_helper.contact_dictionaries
    @rfa_application = rfa_application_helper.find_by_application_id(params[:a01_id])
    @contact = contact_helper.find_by_id(params[:id])
  end

  def update
    @user = user_from_session
    @contact = contact_helper.update_contact(params[:id], contact_params.to_json)
  rescue ApiError => e
    render json: e.response, status: e.status
  end

  private

  def contact_params
    params.require(:contact).permit(:date, :title, :notes, classification: %i[id value],
                                                           contact_method: %i[id value], in_person_contact_data: [:is_collateral_visit, :notice,
                                                                                                                  :collateral_visit_start_time, :collateral_visit_end_time, visit_type: %i[id value],
                                                                                                                                                                            location: %i[id value]])
  end

  def contact_helper
    Helpers::Rfa::ContactHelper.new(auth_header: get_session_token)
  end

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end
end
