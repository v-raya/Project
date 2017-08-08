module Concerns::Rfa::ApplicationApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do

    def all_expanded(auth_header)
      response = FaradayCals.get('/' + api_resource_path + '?expanded=true', auth_header)
      JSON.parse(response.body)['items'].map { |itm| new(itm) }
    end

    def create_application(auth_header)
      #create, so we aren't posting a body
      response = FaradayCals.post('/rfa-1a-forms', auth_header,'{}')
      JSON.parse(response.body)
    end


    def name_types(auth_header)
      response = FaradayCals.get('/dictionaries/name-types', auth_header)
      JSON.parse(response.body)
    end

    def phone_types(auth_header)
      response = FaradayCals.get('/dictionaries/phone-number-types', auth_header)
      JSON.parse(response.body)
    end
  end
end
