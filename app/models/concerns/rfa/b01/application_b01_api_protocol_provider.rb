module Concerns::Rfa::B01::ApplicationB01ApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do
    def create_application(auth_header)
      response = FaradayCals.post('/rfa-1b-forms', auth_header, '{}')
      JSON.parse(response.body)
    end
  end
end
