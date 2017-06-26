class Helpers::RFA::ApplicantHouseholdAddress < Helpers::ModelHelperBase

  def model_class
    RFA::ApplicantHouseholdAddress
  end

  def residence_types
    RFA::ApplicantHouseholdAddress.residence_types(auth_header)
  end

end
