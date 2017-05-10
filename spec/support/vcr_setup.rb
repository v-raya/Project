require 'vcr'
require 'webmock/rspec'

VCR.configure do |c|
  c.cassette_library_dir = 'spec/cassettes'
  c.hook_into :webmock, :faraday
  c.allow_http_connections_when_no_cassette = true
  c.ignore_localhost = false
  c.debug_logger = File.open("debugging asdqwefvc", 'w')
  c.ignore_request do |request|
    localhost_has_identify?(request)
  end
end

private
def localhost_has_identify?(request)
  #byebug
  if request.uri.starts_with?(CALS_API_BASE_URL)
    false
  else
    true
  end

  # if (request.uri =~ /127.0.0.1:\d{5}\/__identify__/)
  #
  #   true
  # else
  #   false
  # end
end
