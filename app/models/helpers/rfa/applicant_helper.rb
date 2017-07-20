class Helpers::Rfa::ApplicantHelper < Helpers::ModelHelperBase

  def model_class
    Rfa::Applicant
  end

  def create(parent_id, body)
    model_class.create(auth_header, parent_id, body)
  end

  def gender_types
    Rfa::Applicant.gender_types(auth_header)
  end

  def education_levels
    Rfa::Applicant.education_levels(auth_header)
  end

  def language_types
    Rfa::Applicant.language_types(auth_header)
  end

  def state_types
    Rfa::Applicant.state_types(auth_header)
  end

  def salary_types
    Rfa::Applicant.salary_types(auth_header)
  end

end
