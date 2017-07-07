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
end
