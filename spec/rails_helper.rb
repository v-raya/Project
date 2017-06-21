ENV['RAILS_ENV'] = 'test'
require 'simplecov'
SimpleCov.start 'rails'
puts "required simplecov"

require File.expand_path('../../config/environment', __FILE__)
abort('The Rails environment is running in production mode!') if Rails.env.production?
require 'spec_helper'
require 'rspec/rails'
require 'capybara/rspec'
require 'capybara/poltergeist'

# Add additional requires below this line. Rails is not loaded until this point!
# Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }
# ActiveRecord::Migration.maintain_test_schema!

Dir[File.dirname(__FILE__) + "/support/**/*.rb"].each {|f| require f }

Capybara.register_driver :accessible_selenium do |app|
  Capybara::Selenium::Driver.new(app)
end

Capybara.javascript_driver = :poltergeist
# Capybara.app = eval("Rack::Builder.new {( " + File.read(File.dirname(__FILE__) + '/../config.ru') + "\n )}")
Capybara.app = Rack::Builder.parse_file(File.expand_path('../../config.ru', __FILE__)).first

RSpec.configure do |config|
  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

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
