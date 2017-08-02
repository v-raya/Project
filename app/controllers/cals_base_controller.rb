class CalsBaseController < ApplicationController
  include AuthenticationProvider

  before_action :authenticate_with_cwds #, unless: 'Rails.env.development?'


  protected

  def authenticate_with_cwds
    if session[:token].blank?
      if Cwds::Authentication.token_validation(params[:token], AUTHENTICATION_API_BASE_URL)
        store_token_in_redis(params[:token])
      else
        redirect_to Cwds::Authentication.authentication_url(AUTHENTICATION_API_BASE_URL, request.url)
      end
    end

  end


end
