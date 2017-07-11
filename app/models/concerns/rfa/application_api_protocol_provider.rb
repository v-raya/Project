module Concerns::RFA::ApplicationApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do

    def create_application(auth_header)
      #create, so we aren't posting a body
      response = FaradayCals.post('/rfa-1a-forms?token=null', auth_header,'{}')
      JSON.parse(response.body)
    end


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
