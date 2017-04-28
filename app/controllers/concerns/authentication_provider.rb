
module AuthenticationProvider
  extend ActiveSupport::Concern

  def validate_token
    puts 'validating token method'
    true
  end

  def store_token_in_redis(token)
    puts 'store in redis method'
    session[:token] = token
  end
end
