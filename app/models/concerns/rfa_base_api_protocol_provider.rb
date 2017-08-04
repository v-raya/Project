module Concerns::RfaBaseApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseCalsApiProtocolProvider

  class_methods do
    def create(auth_header, parent_id, body)
      response = FaradayCals.post("/#{parent_path}/#{parent_id}/#{api_resource_path}", auth_header, body)
      new(JSON.parse(response.body))
    end

    def find_by_application_id(auth_header, parent_id)
      response = FaradayCals.get("/#{parent_path}/#{parent_id}/#{api_resource_path}", auth_header)
      response.status == 200 ? JSON.parse(response.body) : nil
    end
  end
end
