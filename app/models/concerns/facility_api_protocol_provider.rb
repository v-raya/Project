module Concerns::FacilityApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do
    def search(query, auth_header)
      response = FaradayBase.post("#{ENV['BASE_CALS_API_URL']}/#{class_name_downcase_pluralized}/search",
                                  auth_header,
                                  query)
      JSON.parse(response.body)
    end
  end

  included do
    # def instance_method_example
    #   'example of an instance method'
    # end
  end
end
