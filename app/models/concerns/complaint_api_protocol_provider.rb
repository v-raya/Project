module ComplaintApiProtocolProvider
  extend ActiveSupport::Concern
  include BaseApiProtocolProvider

  class_methods do
    def find_by_facility(facility_id)
      response = Faraday.get CALS_API_BASE_URL + "/facilities/#{facility_id}/complaints"
      JSON.parse(response.body)
    end
  end
end
