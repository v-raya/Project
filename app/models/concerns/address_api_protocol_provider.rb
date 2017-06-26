module Concerns::AddressApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do
    def states(auth_header)
      response = FaradayCals.get('/dictionaries/states?token=null', auth_header)
      JSON.parse(response.body)
    end
  end

end
