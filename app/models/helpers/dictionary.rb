class Helpers::Dictionary < Helpers::ModelHelperBase

  def race_types
    Dictionaries::RaceType.all(auth_header)
  end

  def ethnicity_types
    Dictionaries::EthnicityType.all(auth_header)
  end

end
