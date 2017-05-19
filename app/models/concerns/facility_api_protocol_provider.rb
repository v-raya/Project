module FacilityApiProtocolProvider
  extend ActiveSupport::Concern
  include BaseApiProtocolProvider

  class_methods do
    def search(query, authn_header)
      response = Faraday.get "#{ENV['BASE_CALS_API_URL']}/#{class_name_downcase_pluralized}/search?query=#{query}"
      JSON.parse(response.body)
    end

  end

  included do
    # def instance_method_example
    #   'example of an instance method'
    # end

  end
end
