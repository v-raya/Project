
module AuthenticationProvider
  extend ActiveSupport::Concern

  def store_token_in_redis(token)
    session[:token] = token
  end
end
