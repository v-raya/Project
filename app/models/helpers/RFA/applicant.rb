class Helpers::RFA::Applicant < Helpers::ModelHelperBase

  def model_class
    RFA::Applicant
  end

  def gender_types
    RFA::Applicant.gender_types(auth_header)
  end

  def ethnicity_types
    RFA::Applicant.ethnicity_types(auth_header)
  end

  def education_levels
    RFA::Applicant.education_levels(auth_header)
  end

  def language_types
    RFA::Applicant.language_types(auth_header)
  end

  def state_types
    RFA::Applicant.state_types(auth_header)
  end

  def salary_types
    RFA::Applicant.salary_types(auth_header)
  end

  def residence_types
    RFA::Applicant.residence_types(auth_header)
  end
end
