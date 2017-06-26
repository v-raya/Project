class Helpers::RFA::Applicant < Helpers::ModelHelperBase

  def model_class
    RFA::Applicant
  end

  def gender_types
    RFA::Applicant.gender_types(auth_header)
  end

  def  race_types
    RFA::Applicant.race_types(auth_header)
  end

  def  education_levels
    RFA::Applicant.education_levels(auth_header)
  end

  def language_types
    RFA::Applicant.language_types(auth_header)
  end

end
