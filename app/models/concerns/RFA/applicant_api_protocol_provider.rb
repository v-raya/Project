module Concerns::RFA::ApplicantApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do
    def education_levels(auth_header)
      response = FaradayCals.get('/dictionaries/education-level-types?token=null', auth_header)
      JSON.parse(response.body)
    end

    def gender_types(auth_header)
      response = FaradayCals.get('/dictionaries/genders?token=null', auth_header)
      JSON.parse(response.body)
    end

    def language_types(auth_header)
      response = FaradayCals.get('/dictionaries/languages?token=null', auth_header)
      JSON.parse(response.body)
    end
  end
end
