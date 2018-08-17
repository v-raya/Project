# frozen_string_literal: true

# module which provides access to contacts
module Concerns::Rfa::ContactApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do
    def create_contact(auth_header, contact_json)
      response = FaradayCals.post("/#{api_resource_path}", auth_header, contact_json)
      new(JSON.parse(response.body))
    end

    def update_contact(auth_header, id, contact_json)
      response = FaradayCals.put("/#{api_resource_path}/#{id}", auth_header, contact_json)
      new(JSON.parse(response.body))
    end

    def delete_contact(auth_header, id)
      response = FaradayCals.delete("/#{api_resource_path}/#{id}", auth_header)
      new(JSON.parse(response.body))
    end
  end
end
