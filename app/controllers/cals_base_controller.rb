class CalsBaseController < ApplicationController
  include AuthenticationProvider

  # before_action :authenticate

  PERRY_URL = "#{AUTHENTICATION_API_BASE_URL}/authn/login".freeze

  protected

  # def authenticate
  #   logger.debug 'auth that stores it in redis'
  #   # 1 . check to see if we have  auth token
  #   if session[:token].present?
  #     # if we have it, make a validation call
  #     validate_token

  #     # if successful store in redis
  #     store_token_in_redis
  #   else
  #     # if we don't have it make a redirect to perry
  #     redirect_to PERRY_URL
  #   end


  # end


  def authenticate

    # check if session has :token
    if session[:token].blank?
      puts 'no token in session'

      # 1. check if token is sent via querystring
      # facilities?token=123
      if params[:token].present?
        puts 'querystring token received'

        if validate_token
          #if successful store in redis
          store_token_in_redis(params[:token])
        else
          redirect_to build_auth_url(request.url)
        end

      else
        puts 'no token in querystring'

        # if we don't have it make a redirect to perry
        redirect_to build_auth_url(request.url)
      end

    end



  end

  def build_auth_url(callback_url)
    "#{PERRY_URL}?callback=#{callback_url}"
  end

end
