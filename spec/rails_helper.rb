ENV['RAILS_ENV'] = 'test'
require 'simplecov'
require 'mock_redis'
SimpleCov.start 'rails'
puts "required simplecov"

require File.expand_path('../../config/environment', __FILE__)
abort('The Rails environment is running in production mode!') if Rails.env.production?
require 'spec_helper'
require 'rspec/rails'
require 'capybara/rspec'
require 'capybara/poltergeist'
require "selenium/webdriver"

# Add additional requires below this line. Rails is not loaded until this point!
# Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }
# ActiveRecord::Migration.maintain_test_schema!

Dir[File.dirname(__FILE__) + "/support/**/*.rb"].each {|f| require f }


if ENV['CHROME']

  Capybara.register_driver :headless_chrome do |app|
    capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
      chromeOptions: { args: %w[headless disable-gpu no-sandbox] }
    )

    Capybara::Selenium::Driver.new app,
      browser: :chrome,
      desired_capabilities: capabilities
  end

  Capybara.javascript_driver = :headless_chrome
else
  Capybara.javascript_driver = :poltergeist
end

# Capybara.app = eval("Rack::Builder.new {( " + File.read(File.dirname(__FILE__) + '/../config.ru') + "\n )}")
Capybara.app = Rack::Builder.parse_file(File.expand_path('../../config.ru', __FILE__)).first

RSpec.configure do |config|
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  config.before(:each, type: :feature, :set_auth_header => true) do
    allow_any_instance_of(CalsBaseController).to receive(:authenticate_with_cwds).and_return(true)
    allow_any_instance_of(CalsBaseController).to receive(:get_session_token).and_return(ENV['TOKEN'])
    allow_any_instance_of(CalsBaseController).to receive(:store_token_in_redis).and_return(ENV['TOKEN'])
   $redis.flushdb
  end


  # VCR Config
  unless ENV['DISABLE_VCR']
    config.around(:each) do |example|
      options = example.metadata[:vcr] || {}
      if options[:record] == :skip
        VCR.turned_off(&example)
      else
        name = example.metadata[:full_description].split(/\s+/, 2).join('/').underscore.gsub(/\./, '/').gsub(/[^\w\/]+/, '_').gsub(/\/$/, '')
        VCR.use_cassette(name, options, &example)
      end
    end
  end

  ## WebMock.allow_net_connect!

end
