module Concerns::RFA::ApplicationResidenceApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do

    def create(auth_header, parent_id, body)
      response = FaradayCals.put("/#{parent_path}/#{parent_id}/#{api_resource_path}", auth_header, body)
      new(JSON.parse(response.body))
    end

    def residence_types(auth_header)
      response = FaradayCals.get('/dictionaries/residence-ownership-types?token=null', auth_header)
      JSON.parse(response.body)
    end
  end
end
