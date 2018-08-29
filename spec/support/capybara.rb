require 'capybara/rspec'
require 'capybara/accessible'
require 'selenium/webdriver'

selenium_browser = ENV['SELENIUM_BROWSER'].downcase.to_sym

def remote_capabilities(capybara_config)
  # app host is used to test against the app deployed to a remote URL
  # for example web.preint....
  capybara_app_host = ENV['CAPYBARA_APP_HOST'] # || 'https://web.preint.cwds.io/cals'
  if capybara_app_host.present?
    capybara_config.app_host = "#{capybara_app_host}"

    # for testing against deployed app, CAPYBARA_APP_PORT is not needed
    # port is used for IE testing against code running on development machine
    capybara_app_port = ENV['CAPYBARA_APP_PORT']
    if capybara_app_port.present?
      capybara_config.app_host =  "#{capybara_config.app_host}:#{capybara_app_port}"
      capybara_config.server_host = '0.0.0.0'
      capybara_config.server_port = capybara_app_port
    else
      capybara_config.run_server = false
    end
  end
end

def register_internet_explorer(capybara_config, selenium_browser)
  selenium_server = ENV['SELENIUM_SERVER'] || 'localhost:4444'

  capybara_config.register_driver selenium_browser do |app|

    capabilities = Selenium::WebDriver::Remote::Capabilities.internet_explorer(
      native_events: false,
      javascript_enabled: true,
      version: 11
    )
    Capybara::Selenium::Driver.new app,
      browser: selenium_browser,
      url: "http://#{selenium_server}/wd/hub",
      desired_capabilities: capabilities
  end
  # Selenium::WebDriver.logger.level = :debug
  capybara_config.javascript_driver = selenium_browser

end

def registar_chrome(capybara_config, selenium_browser)
  capability_options = selenium_browser == :headless_chrome ? %w[headless disable-gpu no-sandbox] : []

  capybara_config.register_driver :accessible_selenium do |app|
    capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
      chromeOptions: {args: capability_options}
    )
    driver = Capybara::Selenium::Driver.new(app,
                                            browser: :chrome,
                                            desired_capabilities: capabilities
                                            )
    adaptor = Capybara::Accessible::SeleniumDriverAdapter.new
    Capybara::Accessible.setup(driver, adaptor)
  end
  capybara_config.javascript_driver = :accessible_selenium

end

remote_capabilities(Capybara)

# wait increased to 5 seconds to avoid random failures.
# default wait is 2 seconds.
Capybara.default_max_wait_time = 5

case selenium_browser
when :chrome, :headless_chrome
  registar_chrome(Capybara, selenium_browser)

when :internet_explorer
  register_internet_explorer(Capybara, selenium_browser)

else
  Capybara.javascript_driver = selenium_browser.to_sym
end

Capybara.app = Rack::Builder.parse_file(File.expand_path('../../../config.ru', __FILE__)).first

module Capybara
  module Accessible
    class SeleniumDriverAdapter
      def modal_dialog_present?(driver)
        driver.browser.switch_to.alert
        true
      rescue ::Selenium::WebDriver::Error::UnhandledAlertError,
          ::Selenium::WebDriver::Error::NoSuchAlertError,
          ::NoMethodError
        false
      end
    end
  end
end
