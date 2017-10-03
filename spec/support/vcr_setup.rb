require 'vcr'
require 'webmock/rspec'

VCR.configure do |c|
  c.cassette_library_dir = 'spec/cassettes'
  c.hook_into :webmock, :faraday
  c.allow_http_connections_when_no_cassette = true
  c.ignore_localhost = false
  c.ignore_request do |request|
    !(request.uri.starts_with?(CALS_API_BASE_URL) || request.uri.starts_with?(CALS_API_URL) || request.uri.starts_with?(GEO_SERVICE_URL))
  end

  # c.register_request_matcher :ignore_port_matcher do |request_1, request_2|
  #   ( URI(request_1.uri).host == URI(request_2.uri).host ) &&
  #     ( URI(request_1.uri).path == URI(request_2.uri).path )
  # end

  # :host, :headers
  c.default_cassette_options = {match_requests_on: [:path, :method, :body]}

end
