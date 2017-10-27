module Concerns::Rfa::B01::ApplicationB01ApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do
    def create_application(auth_header,application_id, adult_id, api_url_path)
      response = FaradayCals.post("/rfa-1a-forms/#{application_id}/rfa-1b-forms/#{api_url_path}/#{adult_id}", auth_header, '{}')
      JSON.parse(response.body)
    end

    def all(auth_header, application_id)
      response = FaradayCals.get("/rfa-1a-forms/#{application_id}/rfa-1b-forms/", auth_header)
      JSON.parse(response.body)
    end
  end
end
