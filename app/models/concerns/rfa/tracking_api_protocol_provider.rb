# frozen_string_literal: true

module Concerns::Rfa::TrackingApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do
    def create_tracking(auth_header, application_id)
      response = FaradayCals.post("/#{parent_path}/#{application_id}/#{api_resource_path}", auth_header, '{}')
      JSON.parse(response.body)
    end

    def update(auth_header, parent_id, id, body)
      # TODO: impl
    end

    def find_by_id(auth_header, id, application_id)
      response = FaradayCals.get("/#{parent_path}/#{application_id}/#{api_resource_path}/#{id}", auth_header)
      new(JSON.parse(response.body))
    end
  end
end
