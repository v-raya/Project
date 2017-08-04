module Concerns::Rfa::ApplicantApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do
    def education_levels(auth_header)
      response = FaradayCals.get('/dictionaries/education-level-types', auth_header)
      JSON.parse(response.body)
    end

    def gender_types(auth_header)
      response = FaradayCals.get('/dictionaries/genders', auth_header)
      JSON.parse(response.body)
    end

    def language_types(auth_header)
      response = FaradayCals.get('/dictionaries/languages', auth_header)
      JSON.parse(response.body)
    end

    def state_types(auth_header)
      response = FaradayCals.get('/dictionaries/states', auth_header)
      JSON.parse(response.body)
    end

    def salary_types(auth_header)
      response = FaradayCals.get('/dictionaries/income-types',auth_header)
      JSON.parse(response.body)
    end

    # def find_by_id_and_application_id(parent_id, id, auth_header)
    #   response = FaradayCalsmock.get("/rfa-1a-forms/#{parent_id}/#{class_name_downcase_pluralized}/#{id}", auth_header)
    #   new(JSON.parse(response.body))
    # end
  end
end
