module Concerns::RFA::ApplicationApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do
    def name_types(auth_header)
      response = FaradayCals.get('/dictionaries/name-types?token=null', auth_header)
      JSON.parse(response.body)
    end

    def phone_types(auth_header)
      response = FaradayCals.get('/dictionaries/phone-number-types?token=null', auth_header)
      JSON.parse(response.body)
    end

  end
end
