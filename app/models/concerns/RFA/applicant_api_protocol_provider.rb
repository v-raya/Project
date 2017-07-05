module Concerns::RFA::ApplicantApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::BaseApiProtocolProvider

  class_methods do
    def create(auth_header, parent_id, body)
      response = FaradayCals.post("/#{parent_path}/#{parent_id}/#{api_resource_path}", auth_header, body)
      new(JSON.parse(response.body))
    end

    def ethnicity_types(auth_header)
      response = FaradayCals.get('/dictionaries/ethnicity-types?token=null', auth_header)
      JSON.parse(response.body)
    end

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

    def state_types(auth_header)
      response = FaradayCals.get('/dictionaries/states?token=null', auth_header)
      JSON.parse(response.body)
    end

    def salary_types(auth_header)
      response = FaradayCals.get('/dictionaries/income-types?token=null',auth_header)
      JSON.parse(response.body)
    end

    def residence_types(auth_header)
      response = FaradayCals.get('/dictionaries/residence-ownership-types?token=null', auth_header)
      JSON.parse(response.body)
    end

  end
end
