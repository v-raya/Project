require 'active_resource'

class Facility < ActiveResource::Base
  self.site = BASE_CALS_URL
end
