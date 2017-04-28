module FacilityApiProtocolProvider
  extend ActiveSupport::Concern
  include BaseApiProtocolProvider

  included do
    def instance_method_example
      'example of an instance method'
    end
  end
end
