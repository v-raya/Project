class FaradayBase
  BODY_METHODS = %i[post put].freeze

  def self.get(url, auth_header)
    faraday_shared(:get, url, auth_header)
  end

  def self.post(url, auth_header, body)
    faraday_shared(:post, url, auth_header, body)
  end


  # private

  def self.faraday_shared(method, url, auth_header, body = nil)
    Faraday.send(method) do |req|
      req.url url
      req.headers = default_headers(auth_header)
      req.body = body if method.in?(BODY_METHODS)
    end
  end

  def self.default_headers(auth_header)
    h = {
      :'Content-Type' => 'application/json'
    }
    h.merge({:'Authorization' => auth_header}) if auth_header.present?
    return h
  end

  private_class_method :default_headers, :faraday_shared
end
