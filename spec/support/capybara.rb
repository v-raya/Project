require 'capybara/rspec'
require 'capybara/poltergeist'
require "selenium/webdriver"

selenium_browser = ENV['SELENIUM_BROWSER'].downcase.to_sym

case selenium_browser
when :chrome, :headless_chrome

  capability_options = selenium_browser == :headless_chrome ? %w[headless disable-gpu no-sandbox] : []

  Capybara.register_driver selenium_browser do |app|
    capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
      chromeOptions: {args: capability_options}
    )
    Capybara::Selenium::Driver.new app,
      browser: :chrome,
      desired_capabilities: capabilities
  end
  Capybara.javascript_driver = selenium_browser

when :internet_explorer

  SELENIUM_SERVER = ENV['SELENIUM_SERVER'] || 'localhost:4444'
  CAPYBARA_APP_HOST = ENV['CAPYBARA_APP_HOST'] || 'https://web.preint.cwds.io/cals'
  CAPYBARA_APP_PORT = (ENV['CAPYBARA_APP_PORT'] || '4448') unless ENV['TEST_END_TO_END']

  Capybara.app_host = "#{CAPYBARA_APP_HOST}"
  if defined? CAPYBARA_APP_PORT
    Capybara.app_host =  "#{Capybara.app_host}:#{CAPYBARA_APP_PORT}"
    Capybara.server_port = CAPYBARA_APP_PORT
  end

  Capybara.register_driver :internet_explorer do |app|

    capabilities = Selenium::WebDriver::Remote::Capabilities.internet_explorer(
      native_events: false,
      javascript_enabled: true,
      version: 11
    )
    Capybara::Selenium::Driver.new app,
      browser: :internet_explorer,
      url: "http://#{SELENIUM_SERVER}/wd/hub",
      desired_capabilities: capabilities
  end
  # Selenium::WebDriver.logger.level = :debug
  Capybara.javascript_driver = selenium_browser

else
  Capybara.javascript_driver = :poltergeist
end

Capybara.app = Rack::Builder.parse_file(File.expand_path('../../../config.ru', __FILE__)).first
