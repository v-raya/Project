
module AuthenticationProvider
  extend ActiveSupport::Concern

  def store_token_in_redis(token)
    session[:token] = token
  end

  def get_session_token
    session[:token]
  end
end
