module Concerns::RFA::ApplicantHouseholdAddressApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do
    def residence_types(auth_header)
      response = FaradayCals.get('/dictionaries/residence-ownership-types?token=null', auth_header)
      JSON.parse(response.body)
    end
  end
end
