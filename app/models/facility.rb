require 'active_resource'

class Facility < ActiveResource::Base
  self.site = ENV['BASE_CALS_API_URL']
end
