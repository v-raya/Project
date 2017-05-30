module FacilityApiProtocolProvider
  extend ActiveSupport::Concern
  include BaseApiProtocolProvider

  class_methods do
    def search(query, auth_header)
      response = FaradayBase.get("#{ENV['BASE_CALS_API_URL']}/#{class_name_downcase_pluralized}/search?query=#{query}", auth_header)
      JSON.parse(response.body)
    end
  end

  included do
    # def instance_method_example
    #   'example of an instance method'
    # end
  end
end
