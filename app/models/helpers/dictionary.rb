class Helpers::Dictionary < Helpers::ModelHelperBase

  def race_types
    Dictionaries::RaceType.all(auth_header)
  end

  def ethnicity_types
    Dictionaries::EthnicityType.all(auth_header)
  end

  def address_types
    Dictionaries::AddressType.all(auth_header)
  end

  def residence_ownership_types
    Dictionaries::ResidenceOwnershipType.all(auth_header)
  end

  def relationship_types
    Dictionaries::ApplicantRelationshipType.all(auth_header)
  end

  def license_types
    Dictionaries::LicenseType.all(auth_header)
  end

  def relationship_to_applicant_types
    Dictionaries::RelationshipToApplicantType.all(auth_header)
  end

  def  name_types
    Dictionaries::NameType.all(auth_header)
  end

  def  phone_types
    Dictionaries::PhoneNumberType.all(auth_header)
  end

  def  sibling_groups
    Dictionaries::SiblingGroup.all(auth_header)
  end

  def  age_groups
    Dictionaries::AgeGroup.all(auth_header)
  end
  def  gender_types
    Dictionaries::Gender.all(auth_header)
  end

  def  name_suffix_types
    Dictionaries::NameSuffixType.all(auth_header)
  end
  def  name_prefix_types
    Dictionaries::NamePrefixType.all(auth_header)
  end

  def education_levels
    Dictionaries::EducationLevelType.all(auth_header)
  end

  def language_types
    Dictionaries::Language.all(auth_header)
  end

  def state_types
    Dictionaries::State.all(auth_header)
  end

  def salary_types
    Dictionaries::IncomeType.all(auth_header)
  end

  def marriage_termination_reasons
    Dictionaries::MarriageTerminationReason.all(auth_header)
  end

  def rfa_a01_dictioniaries
    dictionaries = {}
    dictionaries[:residence_types] = residence_ownership_types
    dictionaries[:ethnicity_types] = ethnicity_types
    dictionaries[:address_types] = address_types
    dictionaries[:relationship_types] = relationship_types
    dictionaries[:license_types] = license_types
    dictionaries[:relationship_to_applicant_types] = relationship_to_applicant_types
    dictionaries[:name_types] = name_types
    dictionaries[:name_suffix_types] = name_suffix_types
    dictionaries[:name_prefix_types] = name_prefix_types
    dictionaries[:phone_types] = phone_types
    dictionaries[:gender_types] = gender_types
    dictionaries[:education_levels] = education_levels
    dictionaries[:language_types] =  language_types
    dictionaries[:state_types] = state_types
    dictionaries[:salary_types] = salary_types
    dictionaries[:marriage_termination_reasons] = marriage_termination_reasons
    dictionaries[:age_groups] = age_groups
    dictionaries[:sibling_groups] = sibling_groups
    return dictionaries
  end
end
