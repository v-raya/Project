module Concerns::ChildPreferenceApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do
    def age_group_preferences(auth_header)
    response = FaradayBase.get(CALS_API_URL + "/dictionaries/age-groups?token=#{auth_header}", auth_header)
      JSON.parse(response.body)
    end

    def sibling_groups(auth_header)
    response = FaradayBase.get(CALS_API_URL + "/dictionaries/rfa/sibling-groups?token=#{auth_header}", auth_header)
      JSON.parse(response.body)
    end
  end

  included do
    # def instance_method_example
    #   'example of an instance method'
    # end
  end
end
